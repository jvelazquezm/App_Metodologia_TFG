
import React from 'react';
import Encabezado from './Encabezado';
import Cuerpo from './Cuerpo';
import Navegacion from './Navegacion';
import Resultados from './Resultados';
import Vulnerabilidades from './Vulnerabilidades';
import Presentacion from './Presentacion'
import {pasos} from '../assets/pasos.js';
export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      pasosiniciales : [
        ...pasos
      ],
      pasos:[
        ...pasos
      ],
      preguntaActual: 0,
      comienzo : false,
      terminado : false,
      enviado:false,
      revisando:false,
      detallado:false,
      vulnerabilidades: [0,0,0,0,0,0]
    };
  }


  cambiarPregunta = (index) => {
    console.log(this.state.pasos)
    this.setState({
      preguntaActual : index,
    });
  }
  responder = (index, respuesta) => {
    let pasos = this.state.pasos.map((paso,i) => {
      return {...paso,
        respuesta : index === i ? respuesta : paso.respuesta}
    });
    this.setState({
      pasos: pasos
    })
  }

  enviar = () => {
    if (window.confirm("¿Estás seguro de que quieres enviar tus respuestas? No podrás modficiar la categoría de tu dispositivo.")){
      this.setState({
        terminado: true
      });
    } 

    

  }
  comprobar = () => {
    const {pasos} = this.state;
    const vulnerabilidades = [0,0,0,0,0,0]
    if (pasos[1].respuesta === "No") vulnerabilidades[0]++;

    if (pasos[2].respuesta.includes("RFID")) vulnerabilidades[1]++;
    if (pasos[4].respuesta ==="Ninguno") vulnerabilidades[1]++;
    if (pasos[5].respuesta === "Directamente") vulnerabilidades[1]++;
    if ((pasos[6].respuesta === "Salud y bienestar") || (pasos[6].respuesta === "Interfaz máquina humano") || (pasos[6].respuesta ==="Seguridad") || (pasos[6].respuesta ==="Sensores")) vulnerabilidades[2]++;
    if (pasos[8].respuesta === "Sí") vulnerabilidades[3]++;
    if (this.buscar(10).length !==0 && this.buscar(10).respuesta.includes("USB")) vulnerabilidades[4]++;
    if (this.buscar(12).length !==0 && this.buscar(12).respuesta.includes("Cámara")) vulnerabilidades[4]++;
    if (this.buscar(12).length !==0 && this.buscar(12).respuesta.includes("Micrófono")) vulnerabilidades[4]++;
    if (this.buscar(13).length !==0 && this.buscar(13).respuesta === "Sí") vulnerabilidades[4]++;
    if (this.buscar(15).length !==0 && this.buscar(15).respuesta === "Sí") vulnerabilidades[5]++;
    if (this.buscar(16).length !==0 && this.buscar(16).respuesta === "No") vulnerabilidades[5]++;
    if (this.buscar(17).length !==0 && this.buscar(17).respuesta === "No") vulnerabilidades[5]++;
    if (this.buscar(18).length !==0 && this.buscar(18).respuesta === "Sí, pero no utiliza HTTPS") vulnerabilidades[5]++;

    this.setState({
      enviado: true,
      vulnerabilidades: vulnerabilidades
    })
  }
  comenzar = () => {
    this.setState({
      comienzo: true
    })
  }
  revisar = (index) => {
    this.setState({
      preguntaActual : index,
      terminado : false,
      revisando: true
    })
  }
  detallar = () => {
    this.setState({
      detallado: !this.state.detallado
    })
  }

  categorizar = () => {
    const categoria = this.state.pasos.find(paso => paso.pregunta === "Indique la categoría del dispositivo");
    const preguntasGenerales = this.state.pasos.filter(paso => ((paso.fase === "General")));
    const preguntasCategoría = this.state.pasosiniciales.filter(paso => ((paso.fase === "Especifica" && paso.categoria.includes(categoria.respuesta))));
    const preguntasCategorizadas = preguntasGenerales.concat(preguntasCategoría)
    console.log(preguntasCategorizadas)
    this.setState({
      pasos: preguntasCategorizadas
    });
  }
  buscar = (index) => {
    let temporal = this.state.pasos.find(paso => paso.index === index) || [];
    return temporal;
}  
  

  render(){
    const {preguntaActual,pasos,terminado,enviado,comienzo,revisando,vulnerabilidades,detallado} = this.state;
    return (
      <div>
        <Encabezado/>
        {comienzo === false ? 
        <Presentacion
          comenzar={this.comenzar}
        />
        :terminado === false ? 
        <>
          <Cuerpo
            index={preguntaActual}
            pasos={pasos}
            responder={this.responder}
          />
          <Navegacion
            index={preguntaActual}
            pasos={pasos}
            cambiarPregunta={this.cambiarPregunta}
            enviar={this.enviar}
            categorizar={this.categorizar}
            revisando={revisando}
          />
        </> 
        : <>{enviado === false ?
          <Resultados
            pasos={pasos}
            index={preguntaActual}
            comprobar={this.comprobar}
            revisar={this.revisar}
            vulnerabilidades={vulnerabilidades}
            buscar={this.buscar}
          />
          : 
          <Vulnerabilidades
            pasos={pasos}
            index={preguntaActual}
            vulnerabilidades={vulnerabilidades}
            vulnerable={this.vulnerable}
            buscar={this.buscar}
            detallado={detallado}
            detallar ={this.detallar}
          />}
          </>}
         {
        }
  
      </div>
    );
  }

}




import React from 'react';
import Pregunta from './Pregunta';
import Respuesta from './Respuesta';
import Foto from './Foto';
export default class Cuerpo extends React.Component {
	render() {
        const {index,pasos,responder} = this.props;
        const paso = pasos[index];
		return <div className="cuerpo">
      <div className="preguntayfoto">
        <Pregunta 
            index={index}
            pregunta={paso.pregunta}
          />
          <Foto
            foto = {paso.foto}
          />
      </div>

        <Respuesta
          index={index}
          paso={paso}
          responder = {responder}
        />
	        </div>
	}

}
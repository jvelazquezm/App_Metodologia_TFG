import React from 'react';
import { Radar } from 'react-chartjs-2';
export default class Resultados extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data:
            {
                labels: ['Firmware', 'Comunicaciones', 'Categoría', 'Tratamiento de datos', 'Interfaz física', 'Accesibilidad'],
                datasets: [{
                    type: 'radar',
                    label: 'Nº de vulnerabilidades',
                    data: [this.props.vulnerabilidades[0], this.props.vulnerabilidades[1], this.props.vulnerabilidades[2], this.props.vulnerabilidades[3], this.props.vulnerabilidades[4], this.props.vulnerabilidades[5]],
                    backgroundColor: [
                        'rgb(238,251,251,0.8)',
                        'rgb(238,251,251,0.8)',
                        'rgb(238,251,251,0.8)',
                        'rgb(238,251,251,0.8)',
                        'rgb(238,251,251,0.8)',
                        'rgb(238,251,251,0.8)'
                    ],
                    borderColor: [
                        '#203647',
                        '#203647',
                        '#203647',
                        '#203647',
                        '#203647',
                        '#203647'
                    ],
                    borderWidth: 5,
                }],

              
            },
            options : {
                scales: {
                    r: {
                        angleLines: {
                            display: true,
                            color:'black',
                        },
                        max:4,
                        beginAtZero:true,
                        ticks: {
                            stepSize:1,
                            backdropColor:'#7abfe4',
                            color:'black'
                          },
                    title: {
                        color:'black'
                    },
                    grid: {
                        color: 'black'
                      },
                      pointLabels: {
                        font: {
                            size: 16
                        },
                        color: 'black',
                        fontSize: 100
                      }
                    },
                },
                plugins:{
                    legend:{
                        labels:{
                            font: {
                                size: 24
                            },
                            color:'black',
                        }
                    }
                },
                responsive: true,
            }
        };
      }
      render() {
        const {pasos,detallado} = this.props;
        return (
            <>

            <div className="resultados">
                <h1 className="centrado">Vulnerabilidades de seguridad y privacidad encontradas</h1>
                
                {detallado === false ?
                <>
                    <div className="grafica">
                        <Radar  className="radar" data={this.state.data} options={this.state.options}/>
                    </div>
                    <button className="actions2" onClick={this.detallar}>Mostrar detalles</button> 
                </>
                :
                <>
                <div className="todo">
                    <div className="grafica">
                        <Radar  className="radar" data={this.state.data} options={this.state.options}/>
                    </div>
                                        
                    <div className="detalles">
                    <div className="conjunto1">
                        <div className="fase">
                            <h3>Firmware</h3>
                        </div>
                        <div className="resultado">
                            {pasos[1].respuesta === "No" ? <p><div>¡Cuidado! Tu dispositivo se encuentra desactualizado.</div>
                                                                 <button className="popup" onClick={()=>this.popUp("1")}> Ver consejo de buenas prácticas de seguridad
                                                                    <span className="popuptext" id="1">Debes actualizar tu dispositivo cuanto antes</span>
                                                                </button></p> : ""}

                            {this.props.vulnerabilidades[0] === 0 ? <p>No se han encontrado vulnerabilidades en este apartado</p>:""}
                        </div>
                    </div>
                    <div className="conjunto">
                        <div className="fase">
                            <h3>Comunicaciones</h3>
                        </div>
                        <div className="resultado">
                            {pasos[2].respuesta.includes("RFID") ? <p><div>¡Cuidado! Tu dispositivo emplea el protocolo de comunicación RFID, el cuál resulta muy inseguro ante ataques físicos y a las etiquetas que utilizan.</div>
                                                                </p> : ""}
                            {pasos[4].respuesta === "Ninguno" ? <p><div>¡Cuidado! Tu dispositivo no cuenta con protocolos de seguridad, la información que envías y que recibes puede estar en peligro y ser obtenida por terceras personas.</div></p> : ""}
                            {pasos[5].respuesta === "Directamente" ? <p><div>¡Cuidado! Te en cuenta que tu dispositivo se conecta directamente a la red de tu hogar por lo que es más probable que sea objetivo de ataques que buscan infiltrarse en tu red.</div></p> : ""}
                            {this.props.vulnerabilidades[1] === 0 ? <p>No se han encontrado vulnerabilidades en este apartado</p>:""}
                        </div>
                    </div>
                    <div className="conjunto">
                        <div className="fase">
                            <h3>Categoría</h3>
                        </div>
                        <div className="resultado">
                            {(pasos[6].respuesta === "Salud y bienestar") || (pasos[6].respuesta === "Interfaz máquina humano") || (pasos[6].respuesta ==="Seguridad") || (pasos[6].respuesta ==="Sensores") ? <p className="ultimo">¡Cuidado! Tu dispositivo trata directamente con datos sensibles. La categoría {pasos[6].respuesta} está formada por un conjunto de dispositivos que tratan con información sensible y tu privacidad puede verse puesta en peligro.</p> : ""}
                            {this.props.vulnerabilidades[2] === 0 ? <p>No se han encontrado vulnerabilidades en este apartado</p>:""}
                        </div>
                    </div>
                    <div className="conjunto">
                        <div className="fase">
                            <h3>Tratamiento de datos</h3>
                        </div>
                        <div className="resultado">
                        {pasos[8].respuesta === "Sí" ? <p><div>¡Cuidado! Ten en cuenta que tu dispositivo envía datos a la nube por lo que trata de darle al dispositivo la información estrictamente necesaria para su funcionamiento.</div>
                                                                <button className="popup" onClick={()=>this.popUp("8")}> Ver consejo de buenas prácticas de seguridad
                                                                    <span className="popuptext" id="8">Revisa los ajustes de privacidad de tu dispositivo para comprobar que datos está enviando a la nube</span>
                                                                </button></p> : ""}
                        {this.props.vulnerabilidades[3] === 0 ? <p>No se han encontrado vulnerabilidades en este apartado</p>:""}
                        </div>
                    </div>
                    <div className="conjunto">
                        <div className="fase">
                            <h3>Interfaz física</h3>
                        </div>
                        <div className="resultado">
                            {this.props.buscar(10).length !==0 ?
                                <>{this.props.buscar(10).respuesta.includes("USB") ? <p><div>¡Cuidado! El protocolo USB es muy vulnerable si un atacante consigue insertar una memoria USB infectada en tu dispositivo.</div>
                                                                                        <button className="popup" onClick={()=>this.popUp("10")}> Ver consejo de buenas prácticas de seguridad
                                                                                            <span className="popuptext" id="10">No permitas que nadie desconocido inserte una memoria USB en tu dispositivo</span>
                                                                                        </button></p> : ""}</>
                                :<></>}
                            {this.props.buscar(12).length !==0 ?
                                <>{this.props.buscar(12).respuesta.includes("Cámara") ? <p><div>¡Cuidado! Tu dispositivo cuenta con una cámara. Si un atacante se hace con el poder de tu dispositivo puede obtener imágenes y vídeos tuyos y de tu hogar sin que te des cuenta.</div>
                                    <button className="popup" onClick={()=>this.popUp("12")}> Ver consejo de buenas prácticas de seguridad
                                        <span className="popuptext" id="12">Cubre la cámara o apaga el dispositivo cuando no necesites de su uso</span>
                                    </button></p> : ""}</>
                                :<></>}
                            {this.props.buscar(12).length !==0 ?
                                <>{this.props.buscar(12).respuesta.includes("Micrófono") ? <p><div>¡Cuidado! Tu dispositivo cuenta con un micrófono. Un atacante podría obtener audios que recoje el micrófono donde puede haber información privada. Además, si el dispositivo cuenta con reconocimiento por voz, el atacante podría ejecutar órdenes sobre este.</div>
                                    <button className="popup" onClick={()=>this.popUp("12.5")}> Ver consejo de buenas prácticas de seguridad
                                        <span className="popuptext" id="12.5">Silencia el dispositivo o apágalo cuando no necesites de su uso. No situes otros dispositivos que reproduzcan audio cerca de tu dispositivo.</span>
                                    </button></p>: ""}</>
                                :<></>}
                            {this.props.buscar(13).length !==0 ?
                                <>{this.props.buscar(13).respuesta === "Sí" ? <p><div>¡Cuidado! Tu dispositivo tiene actuadores. Si un atacante toma el control del dispositivo, podrá ejectutar órdenes no deseadas sobre estos actuadores</div></p> : ""}</>
                                :<></>}
                            {this.props.vulnerabilidades[4] === 0 ? <p>No se han encontrado vulnerabilidades en este apartado</p>:""}
                        </div>
                    </div>
                    <div className="conjunto">
                        <div className="fase">
                            <h3>Accesibilidad</h3>
                        </div>
                        <div className="resultado">
                            {this.props.buscar(15).length !==0 ?
                                <>{this.props.buscar(15).respuesta === "Sí" ? <p><div>¡Cuidado! Tu dispositivo es accesible de manera remota, por lo que un atacante podría llegar a controlar tu dispositivo a distancia.</div>
                                    <button className="popup" onClick={()=>this.popUp("15")}> Ver consejo de buenas prácticas de seguridad
                                        <span className="popuptext" id="15">Si es posible, desactiva el acceso remoto en caso de que no vayas a utilizarlo.</span>
                                    </button></p> : ""}</>
                                :<></>}
                            {this.props.buscar(16).length !==0 ?
                                <>{this.props.buscar(16).respuesta === "No" ? <p><div>¡Cuidado! Tu dispositivo no cuenta con factor de doble autenticación. Este es una barrera para frenar a un atacante que se haga con tus credenciales de acceso.</div>
                                    <button className="popup" onClick={()=>this.popUp("16")}> Ver consejo de buenas prácticas de seguridad
                                        <span className="popuptext" id="16">Si es posible, actívalo en los ajustes de tu dispositivo.</span>
                                    </button></p> : ""}</>:<></>}
                            {this.props.buscar(17).length !==0 ?
                                <>{this.props.buscar(17).respuesta === "No" ? <p><div>¡Cuidado! La app de tu dispositivo no está basada en open source. Las aplicaciones de código abierto están respaldas por la comunidad y es más improbable encontrar en ellas fallos de seguridad.</div></p> : ""}</>:<></>}
                            {this.props.buscar(18).length !==0 ?
                                <>{this.props.buscar(18).respuesta === "Sí, pero no utiliza HTTPS" ? <p><div>¡Cuidado! Las web que no utilizan el protocolo HTTPS son muy vulnerables hoy en día.</div>
                                    <button className="popup" onClick={()=>this.popUp("18")}> Ver consejo de buenas prácticas de seguridad
                                        <span className="popuptext" id="18">Evita acceder via web a la aplicación en la medida de lo posible</span>
                                    </button></p> : ""}</>:<></>}
                            {this.props.vulnerabilidades[5] === 0 ? <p>No se han encontrado vulnerabilidades en este apartado</p>:""}
                        </div>
                    </div>
                </div>
                 
                </div>
                <button className="actions2" onClick={this.detallar}>Mostrar menos</button> 
                </>
                }    
            </div>
            </>
        )
	}
    buscar = (index) => {
        this.props.buscar(index)
    } 
    vulnerable = (index) => {
        this.props.vulnerable(index);
    }
    detallar = () => {
        this.props.detallar();
    }
    popUp = (index) => {
        console.log("hola")
        var popup = document.getElementById(index);
        popup.classList.toggle("show");

      }
}
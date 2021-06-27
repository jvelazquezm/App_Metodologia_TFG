import React from 'react';


export default class Resultados extends React.Component {
	render() {
        const {pasos} = this.props;
        return (
            <div className="resultados">
                    <h1 className="h1res">Respuestas</h1>
                <div className="conjunto1">
                    <div className="fase">
                        <h3>Firmware</h3>
                    </div>
                    <div className="resultado">
                        <p>Descripción: <button className="cambiar" onClick={()=> this.props.revisar(0)}>{pasos[0].respuesta}.</button></p>
                        <p>El firmware <button className="cambiar" onClick={()=> this.props.revisar(1)}>{pasos[1].respuesta === "Sí" ? "sí" : "no"}</button> está actualizado.</p>
                    </div>
                </div>
                <div className="conjunto">
                    <div className="fase">
                        <h3>Comunicaciones</h3>
                    </div>
                    <div className="resultado">
                    <p>Protocolos de comunicación empleados: <button className="cambiar" onClick={()=> this.props.revisar(2)}>{pasos[2].respuesta.join(", ")}.</button></p>
                    <p>Los protocolos de red y transporte que utiliza son: <button className="cambiar" onClick={()=> this.props.revisar(3)}>{pasos[3].respuesta}.</button></p>
                    <p>Protocolos de seguridad asociados: <button className="cambiar" onClick={()=> this.props.revisar(4)}>{pasos[4].respuesta}.</button></p>
                    <p>El dispositivo se conecta <button className="cambiar" onClick={()=> this.props.revisar(5)}>{pasos[5].respuesta === "Directamente" ? "" : "in"}directamente</button> a la red.</p>
                    </div>
                </div>
                <div className="conjunto">
                    <div className="fase">
                        <h3>Categoría</h3>
                    </div>
                    <div className="resultado">
                        <p>{pasos[6].respuesta}</p>
                    </div>
                </div>
                <div className="conjunto">
                    <div className="fase">
                        <h3>Tratamiento de datos</h3>
                    </div>
                    <div className="resultado">
                    <p>El dispositivo {pasos[7].respuesta === "No" ? <button className="cambiar" onClick={()=> this.props.revisar(7)}>no está conectado a la nube</button> : pasos[8].respuesta === "Sí" ? <><button className="cambiar" onClick={()=> this.props.revisar(7)}>está conectado a la nube</button> <button className="cambiar" onClick={()=> this.props.revisar(8)}>y envía datos a esta</button></>: <><button className="cambiar" onClick={()=> this.props.revisar(7)}>está conectado a la nube</button> <button className="cambiar" onClick={()=> this.props.revisar(8)}>pero no envía datos a esta</button></>}.</p>
                    </div>
                </div>
                <div className="conjunto">
                    <div className="fase">
                        <h3>Interfaz física</h3>
                    </div>
                    <div className="resultado">
                        {this.props.buscar(10).length !==0 ?
                        <p>Entradas físicas del dispositivo: <button className="cambiar" onClick={()=> this.props.revisar(this.props.buscar(10).index-1)}>{this.props.buscar(10).respuesta.join(", ")}.</button></p>
                        : <p>El dispositivo no tiene entradas físicas.</p>}

                        {this.props.buscar(11).length !==0 ?
                        <><p>El dispositivo <button className="cambiar" onClick={()=> this.props.revisar(this.props.buscar(11).index-1)}>{this.props.buscar(11).respuesta === "Sí" ? "":"no"} tiene sensores</button>.</p>
                        {this.props.buscar(12).length !==0 ?
                            <p>Entre ellos tiene: <button className="cambiar" onClick={()=> this.props.revisar(this.props.buscar(12).index-1)}>{this.props.buscar(12).respuesta.join(", ")}.</button></p> 
                            : <></>}
                            </> 
                        : <p>El dispositivo no tiene sensores.</p>}

                        {this.props.buscar(13).length !==0 ?
                        <p>El dispositivo <button className="cambiar" onClick={()=> this.props.revisar(this.props.buscar(13).index-1)}>{this.props.buscar(13).respuesta === "Sí" ? "":"no"} tiene actuadores</button>.</p> 
                        : <p>El dispositivo no tiene actuadores</p>}
                        {this.props.buscar(14).length !==0 ?
                        <p>Botones físicos: <button className="cambiar" onClick={()=> this.props.revisar(this.props.buscar(14).index-1)}>{this.props.buscar(14).respuesta}.</button></p> 
                        : <p><button className="cambiar" onClick={()=> this.props.revisar(this.props.buscar(14).index-1)}>El disposivo no cuenta con botones físicos.</button></p>}
                    </div>
                </div>
                <div className="conjunto">
                    <div className="fase">
                        <h3>Accesibilidad</h3>
                    </div>
                    <div className="resultado">
                        {this.props.buscar(15).length !==0 ?
                        <><p><button className="cambiar" onClick={()=> this.props.revisar(this.props.buscar(15).index-1)}>{this.props.buscar(15).respuesta === "Sí" ? "Se":"No se"} puede</button> acceder remontamente al dispositivo a través de una aplicación.</p>
                        {this.props.buscar(15).respuesta === "Sí" ?  
                        <>
                            {this.props.buscar(16).length !==0 ?
                            <p>El dispositivo <button className="cambiar" onClick={()=> this.props.revisar(this.props.buscar(16).index-1)}>{this.props.buscar(16).respuesta === "Sí" ? "":"no"} cuenta</button> con factor de doble autenticación</p> 
                            : <></>}
                            {this.props.buscar(17).length !==0 ?
                            <p>La aplicación <button className="cambiar" onClick={()=> this.props.revisar(this.props.buscar(17).index-1)}>{this.props.buscar(17).respuesta === "Sí" ? "":"no"} está</button> basada en open source.</p> 
                            : <></>}
                            {this.props.buscar(18).length !==0 ?
                            <p>Accesibilidad web: <button className="cambiar" onClick={()=> this.props.revisar(this.props.buscar(18).index-1)}>{this.props.buscar(18).respuesta}.</button></p> 
                            : <></>}</>:""}
                        </> 
                        : <p>El dispositivo <button className="cambiar" onClick={()=> this.props.revisar(this.props.buscar(15).index-1)}>no tiene</button> acceso remoto a través de una aplicación.</p>}

                    </div>
                </div>  
                <button className="actions2" onClick={this.props.comprobar}>Enviar respuestas</button>               
            </div>
        )
	}
    buscar = (index) => {
        this.props.buscar(index);
    }
}
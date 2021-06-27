import React from 'react';


export default class Navegacion extends React.Component {
	render() {
		const {index,pasos,revisando} = this.props;
		return <div className="actionbar">
		{(index === (0) || revisando === true) ? <></>: <>{(pasos[index].respuesta !== "") ? <button className="actions" onClick={this.clickAnterior}>Anterior</button> : <button className="disabled" disabled>Anterior</button>}</>}
		{(index === (pasos.length - 1) || revisando === true) ? <></>: <>{((pasos[index].respuesta !== []) && (pasos[index].respuesta.length !== 0)) ? <button className="actions" onClick={this.clickSiguiente}>Siguiente</button> : <button className="disabled" disabled>Siguiente</button>}</>}
		{(index !== (pasos.length - 1) || revisando === true) ? <></>: <>{((pasos[index].respuesta !== []) && (pasos[index].respuesta.length !== 0)) ? <button className="actions" onClick={this.props.enviar}>Enviar</button> : <button className="disabled" disabled>Enviar</button>}</>}
		{(revisando === true) ? <button className="actions" onClick={this.props.enviar}>Volver</button>: <></>}
		
	</div>
	}
	clickSiguiente = () => {
		if(this.props.index === 6)
			this.props.categorizar();
			
		if(this.props.pasos[this.props.index].respuesta !== "")
			this.props.cambiarPregunta(this.props.index+1)
	}
	clickAnterior = () => {
		if(this.props.pasos[this.props.index].respuesta !== "")
			this.props.cambiarPregunta(this.props.index-1)
	}

}
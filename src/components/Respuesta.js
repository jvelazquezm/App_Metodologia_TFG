import React from 'react' ;


export default class Respuesta extends React.Component {
    constructor(props) {
        super(props);
		this.state = {
			respuestas : []
		}
      }
	  
      render(){
		  const {index,paso} = this.props;
		  const {pregunta,respuesta,tipo,opciones} = paso;
            return (
				<div className="respuesta">
				{tipo === "Libre" ?
				
					<input className="input" type = "text" 
						value = {respuesta || ''} 
						onChange ={(e)=> this.props.responder(index, e.target.value)}
						placeholder ="Escriba aquí su respuesta"
						onKeyDown={this.handleKeyDown}
					/>
				:
				tipo === "Opciones" ?
				
					opciones.map((opcion,i,j) => {
						return(
							<>{(opcion === respuesta)?
							<div className="radio" key={i+j+index}>
								<input  
									key={i+j+index}
									type = "radio" 
									id ={opcion}
									name = {pregunta}
									onClick ={()=> this.props.responder(index, opcion)}
									defaultChecked
								/>
								<label htmlFor={opcion}>
									{opcion}
								</label><br/>
							</div>
							: 
							<div className="radio" key={i+j+index}>
								<input  
									key={i+j+index}
									type = "radio" 
									id ={opcion}
									name = {pregunta}
									onClick ={()=> this.props.responder(index, opcion)}
								/>
								<label htmlFor={opcion}>
									{opcion}
								</label><br/>
							</div>
							}</>
						)
					})
				
				:
			
					opciones.map((opcion,i,j) => {
						return(
							<>{(respuesta.includes(opcion))?
							<div className="checkbox" key={i+j+index}>
								<input 
									key={i+j+index}
									type = "checkbox" 
									id ={opcion}
									name = {pregunta}
									onClick ={(e)=> this.guardarRespuesta(opcion,e)}
									defaultChecked
								/>
								<label htmlFor={opcion}>
									{opcion}
								</label><br/>
							</div>
							: 
							<div className="checkbox" key={i+j+index}>
								<input 
									key={i+j+index}
									type = "checkbox" 
									id ={opcion}
									name = {pregunta}
									onClick ={(e)=> this.guardarRespuesta(opcion,e)}
									
								/>
								<label htmlFor={opcion}>
									{opcion}
								</label><br/>
							</div>
							}</>
						)
					})

				}

				</div>

	

    )}

	guardarRespuesta = (respuesta, checkboxElement) =>{
			if (checkboxElement.target.checked){
				this.props.paso.respuesta.push(respuesta);
				this.props.responder(this.props.index, this.props.paso.respuesta);

	
			}
			else{
				let index = this.props.paso.respuesta.indexOf(respuesta);
				if(this.props.paso.respuesta.length !== 0 && index !== -1){
					this.props.paso.respuesta.splice(index,1);
					this.props.responder(this.props.index, this.props.paso.respuesta);
				}
				
			}

	}
}
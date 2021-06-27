export default function Pregunta(props) {
	
	return <div className="pregunta">
		<h2 className="titulo">Pregunta {props.index +1}</h2>
		<div className="question">{props.pregunta}</div>
	</div>
}
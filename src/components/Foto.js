import React from 'react';

export default class Cuerpo extends React.Component {
    
	render() {
        const {foto} = this.props;
		return <img className="attachment" src={foto}/>
	}

}
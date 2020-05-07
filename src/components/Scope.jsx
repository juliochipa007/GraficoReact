import React from 'react';
import Line from '../chart/Line';

class Scope extends React.Component {
  
    render() {
    const {cursos:{precio, mes, color}} = this.props;

        return(
            <div>
                <Line data={precio} labels={mes} backgroundColor={color} title='Precio de los Cursos' />
            </div>
        );
    }
}

export default Scope;
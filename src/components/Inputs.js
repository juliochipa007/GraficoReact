import React from 'react';
import '../assets/materialize/css/materialize.min.css';

class Inputs extends React.Component {

    render() {
        return (
            <div className="content">
                <div className="row blue-grey darken-2">
                    <div className="col s4">
                        <h6 className="white-text left-align">
                            Nro. de Dia:
                        <input type="text" className="white-text" name="primer" />
                        </h6>
                        <h6 className="white-text left-align">
                            temperatura:
                        <input type="text" className="white-text" name="primer" />
                        </h6>
                    </div>
                    <div className="col s4">
                        <h6 className="white-text left-align">
                            Humedad:
                        <input type="text" className="white-text" name="primer" />
                        </h6>
                        <h6 className="white-text left-align">
                            PH:
                        <input type="text" className="white-text" name="primer" />
                        </h6>
                    </div>
                    <div className="col s4">
                        <h6 className="white-text left-align">
                            Tamaño:
                        <input type="text" className="white-text" name="primer" />
                        </h6>
                        <h6 className="white-text left-align">
                            Peso:
                        <input type="text" className="white-text" name="primer" />
                        </h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <button className="btn waves-effect waves-purple" type="submit" name="action"><strong>Enviar Datos</strong></button>
                    </div>
                </div>

            </div>
        );
    }
}

export default Inputs;
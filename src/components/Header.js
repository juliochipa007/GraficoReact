import React from 'react';
import '../assets/materialize/css/materialize.min.css';

class Header extends React.Component {

    render() {

        return (
            <header>
                <nav role="navigation">
                    <div className="nav-wrapper blue darken-3">
                        <a href="/" className="brand-logo center">
                            <h5>GRAFICOS</h5>
                        </a>
                    </div>
                    
                </nav>

                <ul class="sidenav" id="mobile-demo" >

                </ul>

            </header>


        );
    }
}
export default Header;
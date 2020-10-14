import React from 'react';
import { HashLink as Link } from "react-router-hash-link";

import ScrowArrowToTop from './ScrollArrowToTop';
import Map from './MapsComponent';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col-2">
                        <ul className="list-unstyled">
                            <li ><Link className="footer-link" smooth to='/#home'>Home</Link></li>
                            <li ><Link className="footer-link" smooth to='/#directory'>Directory</Link></li>
                            <li ><Link className="footer-link" smooth to='/#project'>Projetos</Link></li>
                            <li ><Link className="footer-link" smooth to='/#contact-us'>Contato</Link></li>
                        </ul>
                    </div>
                    <div className="col-1 d-block align-items-center">
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                    </div>
                    <div className="col-6 text-center">
                        <a role="button" className="btn btn-link footer-link" href="tel:+12065551234"><i className="fa fa-phone" /> 1-206-555-1234</a><br />
                        <a role="button" className="btn btn-link footer-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> campsites@nucamp.co</a>
                        <Map 
                            mapElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `400px` }} />}
                        />
                    </div>
                    <div className="col-3 justify-content-center align-items-center">
                        <ScrowArrowToTop />
                        <p className="text-light ml-3 text-center">Voltar ao topo</p>
                    </div>
                    <div className="col-12 text-center">
                        <a className="dev-link" href="https://dsreliete.github.io/elirodrigues/">
                            <p><small> Todos os direitos reservados. Website desenvolvido por Eliete da Silva Rodrigues</small></p>
                            <img className="mr-2" src="/assets/images/logoEli.png" alt="web developer logo" height="30" width="30"/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

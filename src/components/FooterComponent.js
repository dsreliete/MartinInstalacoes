import React from 'react';

import ScrowArrowToTop from './ScrollArrowToTop';
import Map from './MapComponent';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container-footer">
                <div className="row">
                    <div className="col-6 ">
                        <h1 className="text-white">Contato</h1>
                        <div className="col text-center justify-content-center align-items-center contato-container-desc">
                            <a role="button" className="btn btn-link footer-link mb-3" href="tel:+12065551234"><i className="fa fa-phone mr-3" />Telefone: 1-206-555-1234</a><br />
                            <a role="button" className="btn btn-link footer-link mb-5" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o mr-3" />Email: email@email.com</a>
                            <div className="d-flex-d-block">
                                <a className="btn btn-lg btn-social-icon btn-instagram mr-5" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                                <a className="btn btn-lg btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <Map/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-10 text-center">
                            <a className="dev-link" href="https://dsreliete.github.io/elirodrigues/">
                                <img src="/assets/images/logoEli.png" alt="web developer logo" height="30" width="30"/>
                                <p><small> Todos os direitos reservados. Website desenvolvido por Eliete da Silva Rodrigues</small></p>
                            </a>
                    </div>
                    <div className="col-2">
                        <ScrowArrowToTop />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

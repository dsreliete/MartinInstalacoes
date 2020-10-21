import React from 'react';

import ScrowArrowToTop from './ScrollArrowToTop';
// import Map from './MapComponent';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container-footer mx-5">
                <div className="row contato-container-desc justify-content-center align-items-center text-center">
                    <table className="table table-borderless text-white">
                        <thead>
                            <tr className="footer-link-label">
                                <th scope="col">TELEFONE</th>
                                <th scope="col">EMAIL</th>
                                <th scope="col">ENDEREÇO</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><a role="button" className="btn btn-link footer-link mb-3" href="tel:+12065551234"><i className="fa fa-phone mr-3" />1-206-555-1234</a></td>
                                <td><a role="button" className="btn btn-link footer-link mb-5" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o mr-3" />email@email.com</a></td>
                                <td><p className="footer-link mb-5"><i className="fa fa-map-marker mr-3" />Rua Abranches de Moura, 175<br></br>Vila Moraes, São Paulo - SP<br></br>04251-877</p></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="row text-center">
                    <a className="dev-link col-11" href="https://dsreliete.github.io/elirodrigues/">
                        <p> Todos os direitos reservados. Website desenvolvido por: <img src="/assets/images/logoEli.png" alt="web developer logo" className="mx-2" height="20" width="20"/>
                            Eliete da Silva Rodrigues</p>
                    </a>
                    <div className="col-1 scroll-container ">
                        <ScrowArrowToTop />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

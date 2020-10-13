import React from 'react';
import { HashLink as Link } from "react-router-hash-link";


import ScrowArrowToTop from './ScrollArrowToTop';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col-3">
                        <ul className="list-unstyled">
                            <li ><Link className="footer-link" smooth to='/#home'>Home</Link></li>
                            <li ><Link className="footer-link" smooth to='/#directory'>Directory</Link></li>
                            <li ><Link className="footer-link" smooth to='/#contact-us'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-3 text-center">
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                    </div>
                    <div className="col-3 text-center">
                        <a role="button" className="btn btn-link footer-link" href="tel:+12065551234"><i className="fa fa-phone" /> 1-206-555-1234</a><br />
                        <a role="button" className="btn btn-link footer-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> campsites@nucamp.co</a>
                    </div>
                    <div className="col-3 align-items-center">
                        <ScrowArrowToTop />
                        <p className="text-light ml-4 text-center">Voltar ao topo</p>
                    </div>
                    <div className="col text-center">
                        <a className="dev-link" href="https://dsreliete.github.io/elirodrigues/">
                            <h6 className="mt-4" >Website developed by Eliete da Silva Rodrigues</h6>
                            <img className="mr-2" src="/assets/images/logoEli.png" alt="web developer logo" height="30" width="30"/>
                            Some Rights Deserve</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

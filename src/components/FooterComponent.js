import React, { useState } from 'react';

import { Modal, ModalBody } from 'reactstrap';

import ScrowArrowToTop from './ScrollArrowToTop';
import Map from './MapComponent';


function Footer(props) {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const showMap = () => {
        setModalIsOpen(!modalIsOpen);
    }

    const toggleModal = () => {
        setModalIsOpen(!modalIsOpen);
    }

    return (
        <footer className="footer">
            <div className="container pt-5">
                <div className="row text-center">
                    <div className="col-sm-12 col-md-4">
                        <div className="footer-link-label pt-5">
                            <h2>TELEFONE</h2>
                            <a className="btn btn-link footer-link" href="https://wa.me/5511998624973"><i className="fa fa-whatsapp fa-2x mr-3" />+55 (11) 99862-4973</a>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 pt-5">
                        <div className="footer-link-label">
                            <h3>EMAIL</h3>
                            <a className="btn btn-link footer-link" href="mailto:martininstalacoes@bol.com.br"><i className="fa fa-envelope-o fa-2x mr-3" />martininstalacoes@bol.com.br</a>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 py-5">
                        <div className="footer-link-label" onClick={showMap}>
                            <h3>ENDEREÇO</h3>
                            <p className="btn footer-link"><i className="fa fa-map-marker fa-2x mr-3" />Rua Abranches de Moura, 175<br></br>Vila Moraes, São Paulo - SP<br></br>04251-877</p>
                        </div>
                    </div>
                </div>
                <div className="row text-center">
                    <a className="dev-link col-sm-12 col-md-11" href="https://dsreliete.github.io/elirodrigues/">
                        <p> Todos os direitos reservados. Website desenvolvido por: <img src="/assets/images/logoEli.png" alt="web developer logo" className="mx-2" height="20" width="20"/>
                            Eliete da Silva Rodrigues</p>
                    </a>
                    <div className="col-sm-12 col-md-1 scroll-container">
                        <ScrowArrowToTop />
                    </div>
                </div>
            </div>
            <Modal isOpen={modalIsOpen} toggle={toggleModal} className="col-sm-12 col-md-6">
                <ModalBody>
                    <Map/>
                </ModalBody>
            </Modal>
        </footer>
    )
}

export default Footer;

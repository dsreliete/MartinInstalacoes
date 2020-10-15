import React, { Component }  from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavHashLink} from "react-router-hash-link";


class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: true,
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }
    

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    closeNav() {
        if (this.state.isNavOpen !== true) {
            this.toggleNav();
        }
    }
    
    render() {
        return (
            <React.Fragment>
                <Navbar light sticky="top" expand="md" className="mx-0">
                    <NavbarBrand className="ml-3" href="/#home">
                            <img src="/assets/images/logoTransparente.png" height="100" width="176" alt="Martin Instalaçoes Logo" />
                        </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={!this.state.isNavOpen} navbar className="justify-content-end mr-3">
                        <Nav navbar>
                            <NavItem>
                                <NavHashLink onClick={this.closeNav} smooth className="nav-link mr-3" to="/#home">
                                    <i className="fa fa-home fa-lg i-menu mr-1" /> Home
                                </NavHashLink>
                            </NavItem>
                            <NavItem>
                                <NavHashLink onClick={this.closeNav} smooth className="nav-link mr-3" to="/#quemsomos">
                                    <i className="fa fa-comment fa-lg i-menu mr-1" /> Quem Somos
                                </NavHashLink>
                            </NavItem>
                            <NavItem>
                                <NavHashLink onClick={this.closeNav} smooth className="nav-link mr-3" to="/#portfolio">
                                    <i className="fa fa-folder-open fa-lg i-menu mr-1" /> Portfólio
                                </NavHashLink>
                            </NavItem>
                            <NavItem>
                                <NavHashLink onClick={this.closeNav} smooth className="nav-link mr-3" to="/#clientes">
                                    <i className="fa fa fa-handshake-o fa-lg i-menu mr-1" /> Clientes
                                </NavHashLink>
                            </NavItem>
                            <NavItem>
                                <NavHashLink onClick={this.closeNav} smooth className="nav-link" to="/#contato">
                                    <i className="fa fa-address-card fa-lg i-menu mr-1" /> Contato
                                </NavHashLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;
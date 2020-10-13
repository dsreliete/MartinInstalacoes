import React, { Component }  from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavHashLink} from "react-router-hash-link";


class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
        };

        this.toggleNav = this.toggleNav.bind(this);
    }
    

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    

    render() {
        return (
            <React.Fragment>
                <Navbar color="light" light sticky="top" expand="md" className="mx-0">
                    <NavbarBrand className="ml-3" href="/#home">
                            <img src="/assets/images/logoTransparente.png" height="100" width="176" alt="Martin Instalaçoes Logo" />
                        </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar className="justify-content-end mr-3">
                        <Nav navbar>
                            <NavItem>
                                <NavHashLink onClick={this.toggleNav} smooth className="nav-link mr-3" to="/#home">
                                    <i className="fa fa-home fa-lg i-menu mr-1" /> Home
                                </NavHashLink>
                            </NavItem>
                            <NavItem>
                                <NavHashLink onClick={this.toggleNav} smooth className="nav-link mr-3" to="/#directory">
                                    <i className="fa fa-list fa-lg i-menu mr-1" /> Directory
                                </NavHashLink>
                            </NavItem>
                            <NavItem>
                                <NavHashLink onClick={this.toggleNav} smooth className="nav-link" to="/#contact-us">
                                    <i className="fa fa-address-card fa-lg i-menu mr-1" /> Contact Us
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
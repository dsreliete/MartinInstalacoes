import React, { Component }  from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

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
                    <NavbarBrand className="ml-3" href="/">
                            <img src="/assets/images/logoTransparente.png" height="100" width="176" alt="Martin Instalaçoes Logo" />
                        </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar className="justify-content-end mr-3">
                        <Nav navbar>
                            <NavItem>
                                    <NavLink className="nav-link mr-3" to="/home">
                                        <i className="fa fa-home fa-lg i-menu mr-1" /> Home
                                    </NavLink>
                                </NavItem>
                            <NavItem>
                                    <NavLink className="nav-link mr-3" to="/directory">
                                        <i className="fa fa-list fa-lg i-menu mr-1" /> Directory
                                    </NavLink>
                                </NavItem>
                            <NavItem>
                                    <NavLink className="nav-link mr-3" to="/aboutus">
                                        <i className="fa fa-info fa-lg i-menu mr-1" /> About
                                    </NavLink>
                                </NavItem>
                            <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <i className="fa fa-address-card fa-lg i-menu mr-1" /> Contact Us
                                    </NavLink>
                                </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>blabla</h1>
                                <h2>Wiskas sache</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default Header;
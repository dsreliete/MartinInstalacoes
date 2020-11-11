import React, { useState }  from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavHashLink} from "react-router-hash-link";
import { useMedia } from 'react-media';

const Header = (props) => {

    const [isNavOpen, setIsNavOpen] = useState(true);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    }

    const closeNav = () => {
        if(isNavOpen !== true){
            setIsNavOpen(!isNavOpen);
        }
    }

    const GLOBAL_MEDIA_QUERIES = {
        small: "(max-width: 599px)",
        medium: "(min-width: 600px) and (max-width: 1199px)",
        large: "(min-width: 1200px)"
    };
    const matches = useMedia({ queries: GLOBAL_MEDIA_QUERIES });
    const offsetNumber = matches.small ? -320 : -120;

    const scrollWidthOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = offsetNumber;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    return (
        <React.Fragment>
            <Navbar light sticky="top" expand="md" className="mx-0">
                <NavHashLink smooth to="/#home" scroll={scrollWidthOffset}>
                    <NavbarBrand className="ml-3" href="/#home" onClick={closeNav}>
                        <img src="/assets/images/logoTransparente.png" height="100" width="176" alt="Martin Instalaçoes Logo" />
                    </NavbarBrand>
                </NavHashLink>
                <NavbarToggler onClick={toggleNav} />
                <Collapse isOpen={!isNavOpen} navbar className="justify-content-end mr-3">
                    <Nav navbar>
                        <NavItem>
                            <NavHashLink onClick={closeNav} smooth className="nav-link mr-3" to="/#home" scroll={scrollWidthOffset}>
                                <i className="fa fa-home fa-lg i-menu mr-1" /> Home
                            </NavHashLink>
                        </NavItem>
                        <NavItem>
                            <NavHashLink onClick={closeNav} smooth className="nav-link mr-3" to="/#quemsomos" scroll={scrollWidthOffset}>
                                <i className="fa fa-comment fa-lg i-menu mr-1" /> Quem Somos
                            </NavHashLink>
                        </NavItem>
                        <NavItem>
                            <NavHashLink onClick={closeNav} smooth className="nav-link mr-3" to="/#portfolio" scroll={scrollWidthOffset}>
                                <i className="fa fa-picture-o fa-lg i-menu mr-1" /> Portfólio
                            </NavHashLink>
                        </NavItem>
                        <NavItem>
                            <NavHashLink onClick={closeNav} smooth className="nav-link mr-3" to="/#clientes" scroll={scrollWidthOffset}>
                                <i className="fa fa fa-users fa-lg i-menu mr-1" /> Clientes
                            </NavHashLink>
                        </NavItem>
                        <NavItem>
                            <NavHashLink onClick={closeNav} smooth className="nav-link" to="/#contato" scroll={scrollWidthOffset}>
                                <i className="fa fa-address-card fa-lg i-menu mr-1" /> Contato
                            </NavHashLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </React.Fragment>
    );
}




export default Header;
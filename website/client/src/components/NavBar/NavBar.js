import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { 
    Container,   
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

class NavBar extends Component {

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <Container>
                <Navbar color="faded" light className="nav">
                    <NavbarBrand className="mr-auto">Menu</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/MakingTheGame">Making the Game</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/HowToPlay">How To Play</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/MediaGallery">Media Gallery</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Contact">Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Container>
        )
    }
}
export default NavBar;
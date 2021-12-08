import React, { Component } from 'react'
import { Navbar } from 'reactstrap'
import { NavbarBrand } from 'reactstrap'
import { NavbarToggler } from 'reactstrap'
import { Collapse } from 'reactstrap'
import { Nav } from 'reactstrap'
import { NavItem } from 'reactstrap'
import { NavLink } from 'reactstrap'
import CartSummary from './CartSummary'
import { Link } from 'react-router-dom'
export default class nav extends Component {
    render() {
        return (
            <div>
                <Navbar
                    color="secondary"
                    container
                    dark
                    expand="md"
                    fixed=""
                    full
                    light
                >
                    <NavbarBrand href="/">
                        Southwind App
                    </NavbarBrand>
                    <NavbarToggler onClick={function noRefCheck() { }} />
                    <Collapse navbar>
                        <Nav
                            className="me-auto"
                            navbar
                        >
                            <NavItem>
                            <NavLink>
                            <Link className="da" to="form1">
                                    FormDemo1
                                </Link>
                            </NavLink>
                            <NavLink>
                            <Link className="da" to="form2">
                                    FormDemo2
                                </Link>
                            </NavLink>
                             
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">
                                    GitHub
                                </NavLink>
                            </NavItem>
                       <CartSummary removeFromCart={this.props.removeFromCart} cart={this.props.cart}/>  
                        </Nav>
                       
                    </Collapse>
                </Navbar>
            </div>

        )
    }
}

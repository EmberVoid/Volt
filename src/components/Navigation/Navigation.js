import React from 'react';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
import "./Navigation.css"

const Navigation = ({onRouteChange}) => {
    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a onClick={() => onRouteChange('Info')} style={{cursor: 'pointer'}}>Logo</a>
                </Navbar.Brand>
                <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={1} onClick={() => onRouteChange('Info')}>
                        Servicios
                    </NavItem>
                    <NavItem eventKey={2}
                             onClick={() => onRouteChange('Contact')}
                             style={{cursor: 'pointer'}}>
                        Contacto
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default Navigation;
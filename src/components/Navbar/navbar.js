import React from "react";
import { Nav, NavItem, NavLink, InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";

export default function Navbar() {
  return (
    <React.Fragment>
      <Nav className="navbar navbar-expand-lg navbar-light shadow-sm">
        <NavItem>
          <NavLink href="#"><i className="fas fa-sliders-h"></i></NavLink>
        </NavItem>
        <NavItem className='search'>
            <InputGroup>
                <Input placeholder='Search'/>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText><i class="fas fa-search"></i></InputGroupText>
                </InputGroupAddon>
            </InputGroup>
        </NavItem>
        <div className="nav-button ml-auto pt-1">
            <Nav className="navbar-right" navbar>
                <NavItem className='menu-names pr-4'>
                    <i className="fas fa-user icon"></i>
                    <p>Accounts</p>
                </NavItem>
                <NavItem className='menu-names pr-4'>
                    <i className="far fa-paste icon"></i>
                    <p>Orders</p>
                </NavItem>
                <NavItem className='menu-names pr-4'>
                    <i class="fas fa-shopping-cart icon"></i>
                    <p>Cart</p>
                </NavItem>
            </Nav>
        </div>
      </Nav>
    </React.Fragment>
  );
}

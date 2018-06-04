import React from 'react';
import PropTypes from 'prop-types';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { currentUser } = window;

    let topRight = null;

    if(currentUser === null) {
      topRight = (
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavLink tag={Link} to="/login">Login</NavLink>
          </Nav>
        </Collapse>
      );

    } else {
      let fn = null;

      topRight = (
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto " navbar>
            <NavItem className="p-2 text-white">
              {currentUser.firstName ? currentUser.firstName : currentUser.email} {fn}
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink data-method="delete" href="/logout">Logout</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      );
    }

    return (
      <Navbar className="box-shadow border-bottom" color="white" light expand="md">
        <NavbarBrand tag={Link} to="/">
          Logo
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        {topRight}
      </Navbar>
    );
  }
}

Header.propTypes = {
  showHeader: PropTypes.bool
};

export default Header;

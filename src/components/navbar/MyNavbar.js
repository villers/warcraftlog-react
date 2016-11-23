import React, { Component } from 'react';
import {Navbar, Button} from 'react-bootstrap'
import './MyNavbar.css';

class MyNavbar extends Component {
  render() {
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">Warcraft Logs</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Collapse>
                <Navbar.Form pullRight>
                    <Button type="submit">Sign In</Button>
                </Navbar.Form>
            </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default MyNavbar;

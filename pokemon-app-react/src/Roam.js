import React, { Component } from 'react';
import './App.css'
import {Navbar, NavbarBrand, NavItem, NavLink, Col, Row, Container, Input, TabContent, TabPane, Nav, Button,FormGroup} from 'reactstrap';


export default class Roam extends Component {
    constructor(props) {
      super(props);
    this.state = {
    };
  }

  componentDidMount() {
   
    }
  
    render() {
      
      return (
  
        <div className='main-game'>  
         <Container className="menu main-game-panel">
             </Container> 
             <Container className="menu main-game-panel" >
             BOTTOM
             </Container> 
        </div>  
      );
    }
  }
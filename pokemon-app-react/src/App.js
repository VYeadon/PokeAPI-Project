import React, { Component } from 'react';
import './App.css'
import {Navbar, NavbarBrand, NavItem, NavLink, Col, Row, Container, Input, TabContent, TabPane, Nav, Button,FormGroup} from 'reactstrap';
import Choose from './Choose';
import Battle from './Battle';
import Buy from './BuyMenu';
import Roam from './Roam';
import Shop from './Shop';




class App extends Component {
  constructor(props) {
    super(props);
    this.chosenClick=this.chosenClick.bind(this);
  this.state={
    chosen:false
  };}
  

 chosenClick(){
    this.setState({chosen:true})
   }
   

  render() {
    const chosen=this.state.chosen;
    if(!chosen){
    return (
      <div className="App">
      <Choose close={this.chosenClick}/>
      </div>

    );}
      return (
        <div className="App">
        <Roam/>
        </div>
  
      );
  }
}

export default App;

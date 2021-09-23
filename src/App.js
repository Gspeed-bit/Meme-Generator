
import './App.css';
import MemeComponent from "./Component/MemeComponent"
import Header from "./Component/Header"
import React, { Component } from 'react'
import logo from './Component/logo.png'

export default class App extends Component {
  render() {
    return (
      <div>

        <Header logo={logo}/>
        <MemeComponent 
       
        />
      </div>
    )
  }
}



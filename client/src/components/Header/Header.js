import React, { Component } from 'react';
import CustomNavbar from "../CustomNavbar";
import { Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';


export default class Header extends Component {

render(){
    return(

     <header>
        <CustomNavbar />
        <Jumbotron />
     </header>

);

}}
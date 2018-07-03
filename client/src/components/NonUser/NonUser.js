import React, { Component } from 'react';
// import API from '../utils/API';
import Header from "../Header";
import Photo from "../Photo";
import Footer from "../Footer";
import { Link } from 'react-router-dom';
import 'react-bootstrap';
import './NonUser.css';



class NonUser extends Component {
    render(){
        return(
    // {/* <h1> Non User </h1> */}
    <div className="flex-wrapper">
    <Header />
    <main className="container">
    <Photo />
    </main>
    <Footer />
    </div>
        );
    }
}
export default NonUser;

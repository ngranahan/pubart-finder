import React, { Component } from 'react';
import API from '../utils/API';
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Photo from "../components/Photo";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import 'react-bootstrap';
import './Homepage.css';

class Homepage extends Component {
    state = {
        artwork: []
      };
    
      componentDidMount() {
        this.loadArt();
      }
    
      loadArt = () => {
          console.log("loading artwork");
        API.getArt()
          .then(res => {
            this.setState({ artwork: res.data })
            console.log(this.state.artwork[0].title)
          })
          .catch(err => console.log(err));
      };
 
    render() {
        // return (<div></div>)
       return (
       <div>
                <Navbar />
                <SearchBar />

                <Photo />

                <Footer />

        </div>
    );
    }
}

export default Homepage;
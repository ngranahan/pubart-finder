import React, { Component } from 'react';
import API from '../utils/API';
import Header from "../components/Header";
import ShareNav from "../components/ShareNav";
import SearchBar from "../components/SearchBar";
import Photo from "../components/Photo";
import ReactFooter from "../components/ReactFooter";
import { Link } from 'react-router-dom';
import 'react-bootstrap';
import './Homepage.css';

class Homepage extends Component {

    render() {
        return (
            <div>

                <div className="flex-wrapper">
                    <header>
                    <Header />
                        <div className="homepage-hero relative">
                            <div className="homepage-tagline absolute">
                                <h1 className="absolute"><b>DISCOVER</b><br/>FREE PUBLIC<br/> <b>ART</b> IN THE CITY<br/>OF BROTHERLY<br/><b>LOVE</b></h1>
                            </div>
                            <i className="fas fa-chevron-down absolute"></i>
                        </div>
                        
                    </header>
                    

                    <main className="container">
                        <div className="text-center">
                            <h1 className="text-center">Browse Art</h1>
                        </div>
                        

                        <Photo />
                    </main>


                    <ReactFooter />
                </div>

            </div>
        );
    }
}
export default Homepage;
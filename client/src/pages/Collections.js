// THIS IS ALL JUST COPIED FROM THE HOMEPAGE. NEED TO CUSTOMIZE FOR MY COLLECTION.
import React, { Component } from 'react';
import API from '../utils/API';
// import Header from "../components/Header";
// import ShareNav from "../components/ShareNav";
// import SearchBar from "../components/SearchBar";
// import Photo from "../components/Photo";
// import ReactFooter from "../components/ReactFooter";
import { Link } from 'react-router-dom';
import 'react-bootstrap';


class Collections extends Component {

    state = {
     saved:true
    };

    componentDidMount() {
        this.getArt();
    }

        getArt = () => {

            API.callAPI()
            .then(res => {
                return res;
            })
            .catch(err => console.log(err));
            
        }

    render() {
        return (
            <div>
                <h1> collections PAGE </h1>
                <h1> {this.getArt} </h1>



               
            </div>
        );
    }
}
export default Collections;
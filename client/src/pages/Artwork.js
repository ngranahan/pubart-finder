import React, { Component } from 'react';
import API from '../utils/API';
import Header from "../components/Header";
import Footer from "../components/ReactFooter";
import Marker from "../components/Marker";
import 'react-bootstrap';
import './Homepage.css';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Artwork extends Component {
    static defaultProps = {
        center: {
            lat: 39.969550,
            lng: -75.184500
        },
        zoom: 12
    };

    state = {
        artwork: [],
        center: {},
        zoom: 16,
        saved: false
    };

    componentDidMount() {
        this.loadSpecificArtwork();
    }

    loadSpecificArtwork = () => {
        API.getSpecificArt(this.props.match.params.id)
            .then(res => {
                this.setState({ artwork: res.data, center: { lat: parseFloat(res.data.lat), lng: parseFloat(res.data.lng) } })
            })
            .catch(err => console.log(err));
    };


    saveToCollections = () => {
        console.log('artwork page user id: ' + window.hackyUser)
        API.addCollections(this.props.match.params.id, window.hackyUser)
            .then(res => {

                // console.log("RESPONSE FROM BACK END TO MAKE STATE: ", res)
                this.setState({ saved: true })
                // console.log(this.state.artwork[0].title)
            })
            .catch(err => console.log(err));
    }

    getDirections = () => {
        console.log("get directions called");

        var url = "https://www.google.com/maps/dir/?api=1";
        var tempOrigin = "&origin=39.941512,-75.199209";
        var latDes = this.state.artwork.lat;
        var lngDes = this.state.artwork.lng;
        var destination = "&destination=" + latDes + "," + lngDes;
        var newUrl = url + tempOrigin + destination;
        var win = window.open(newUrl, '_blank');
        win.focus();

        // https://www.google.com/maps/dir/?api=1&origin=34.1030032,-118.41046840000001&destination=34.059808,-118.368152

        // Geocoder - not necessary for directions but would be necessary for users to search for art by address if search bar was enabled
        // var geocoder = new maps.Geocoder();
        // geocoder.geocode({ "address": "1400 John F Kennedy Blvd, Philadelphia, PA" }, function (results, status) {
        //     if (status === "OK") {
        //         console.log(results[0].geometry.location.lat());
        //         console.log(results[0].geometry.location.lng());
        //     }
        // })

    }


    render() {
        return (
            <div>

                <div className="flex-wrapper">
                    <Header title={this.state.artwork.title} />
                    <main className="container">
                        <div className="artwork-page-container">
                            <h1>{this.state.artwork.title}</h1>
                            <div className="">
                                <div className="art-container relative">
                                    <FontAwesomeIcon icon="heart" className="like-icon absolute" onClick={this.saveToCollections} />
                                    <img src={this.state.artwork.imageurl} />
                                    {/* Add  to collections button */}
                                    {/* <button className= "btn btn-primary" onClick={this.saveToCollections} href = "/collections" > Save to my collections </button> */}
                                </div>

                            </div>
                            <div className="">
                                <h1>Artwork Location</h1>
                                <div style={{ height: '400px', width: '100%' }}>

                                    <GoogleMapReact
                                        bootstrapURLKeys={{ key: 'AIzaSyAIsVz5-LxFA6Ujpkl8bKUzeZV4Ctnu1us' }}
                                        defaultCenter={this.props.center}
                                        center={this.state.center}
                                        defaultZoom={this.props.zoom}
                                        zoom={this.state.zoom}
                                    >
                                        {/* Marker component will be loaded here */}
                                        <Marker
                                            lat={this.state.center.lat}
                                            lng={this.state.center.lng}
                                        />
                                    </GoogleMapReact>
                                </div>
                                <h4>Location: {this.state.artwork.location}</h4>
                                <button className="btn btn-large" onClick={this.getDirections}>Get Directions</button>
                            </div>
                        </div>
                    </main>
                    <Footer />
                </div>

            </div>
        );
    }
}
export default Artwork;
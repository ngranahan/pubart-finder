import React, { Component } from 'react';
import API from '../utils/API';
import Header from "../components/Header";
import Footer from "../components/ReactFooter";
import 'react-bootstrap';
import './Homepage.css';
import GoogleMapReact from 'google-map-react';

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
        zoom: 16    
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

    render() {
        return (
            <div>

                <div>
                    <Header />
                    <main className="container">
                        <h1>{this.state.artwork.title}</h1>
                        <div className="">
                                <div className="">
                                    <img src={this.state.artwork.imageurl}/>
                                </div>
                                
                        </div>
                        <div className="">
                            <h1>Artwork Location</h1>
                            <div style={{ height: '400px', width: '90%' }}>
                                <GoogleMapReact
                                    bootstrapURLKeys={{ key: 'AIzaSyAIsVz5-LxFA6Ujpkl8bKUzeZV4Ctnu1us' }}
                                    defaultCenter={this.props.center}
                                    center={this.state.center}
                                    defaultZoom={this.props.zoom}
                                    zoom={this.state.zoom}
                                    >
                                    {/* Marker component will be loaded here */}
                                </GoogleMapReact>
                            </div>
                            <button className="btn btn-default btn-large">Get Directions</button>
                        </div> 
                    </main>
                    <Footer />
                </div>

            </div>
        );
    }
}
export default Artwork;
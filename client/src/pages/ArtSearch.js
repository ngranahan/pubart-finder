import React, { Component } from 'react';
import API from '../utils/API';
import Header from "../components/Header";
import Footer from "../components/ReactFooter";
import Marker from "../components/Marker";
import SearchBar from "../components/SearchBar";
import 'react-bootstrap';
import './Homepage.css';
import GoogleMapReact from 'google-map-react';

class Artwork extends Component {
    static defaultProps = {
        center: {
          lat: 39.969550,
          lng: -75.184500
        },
        zoom: 14
      };

    state = {
        artwork: [],
        center: {},
        zoom: 16,
        markerData: {},
        markerInfo: 'hide'    
    };

    componentDidMount() {
        this.getArtwork();
    }

    getArtwork = () => {
        API.getArt()
            .then(res => {
                this.setState({ artwork: res.data })
            })
            .catch(err => console.log(err));
    };

    markerClick = (e, data) => {
        console.log(e.target.id);
        API.getSpecificArt(e.target.id)
            .then(res => {
                this.setState({ markerData: res.data })
                this.setState({ markerInfo: 'show' })
                console.log(res.data)
                
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>

                <div className="flex-wrapper">
                    <Header title={this.state.artwork.title}/>
                    <main className="container">
                    <div className="search-page-container">
                        <h1>Search the Art Map</h1>
                        <div className="">
                            {/* <SearchBar /> */}
                                
                        </div>
                        <div className="">
                            <div className="map-container" style={{ height: '400px', width: '100%' }}>
                                <GoogleMapReact 
                                    bootstrapURLKeys={{ key: 'AIzaSyAIsVz5-LxFA6Ujpkl8bKUzeZV4Ctnu1us' }}
                                    defaultCenter={this.props.center}
                                    defaultZoom={this.props.zoom}
                                    // center={this.state.center}
                                    // zoom={this.state.zoom}
                                    >
                                
                                    {/* Load all of the artwork on the map - we should wait to load the markers until the user clicks search */}
                                    {this.state.artwork.map(artwork => (
                                        <div className="map-marker" onClick={((e, data) => this.markerClick(e, data))}
                                        id={artwork._id} 
                                        lat={artwork.lat}
                                        lng={artwork.lng}
                                        ></div>
                                    ))}
                                </GoogleMapReact>
                                {this.state.markerInfo === 'show' ? (
                                    <div className={this.state.markerInfo} className="info-box">
                                    {console.log(this.state.markerData.location)}
                                        <h4><a href={"art/" + this.state.markerData._id}>{this.state.markerData.title}</a></h4>
                                        <p><em>By {this.state.markerData.artist}</em></p>
                                        <p><em>Location: {this.state.markerData.location}</em></p>
                                </div>
                                ) : (
                                    <div></div>
                                )}
                                
                            </div>
                            <button className="btn btn-default btn-large">Get Directions</button>
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
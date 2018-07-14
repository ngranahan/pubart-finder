import React, { Component } from 'react';
import API from '../utils/API';
import Header from "../components/Header";
import Footer from "../components/ReactFooter";
import Marker from "../components/Marker";
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
        user:null,
        artwork: [],
        center: {},
        zoom: 16,
        saved:false    
    };
    
    componentDidMount() {
        this.getUser();
       this.loadSpecificArtwork();
       this.saveToCollections();
    }
    
    getUser = () => {
        // api call
        API.getUser()
            .then(res => {
                this.setState(res.data);
            })
            .catch(err => console.log(err));
    }
    
    logoutUser = event => {
        event.preventDefault();
        API.logoutUser().then(res => {
            console.log(res.data);
            if (res.data === true) {
                this.setState({ user: null });
            }
        })
            .catch(err => console.log(err));
    }
    


    loadSpecificArtwork = () => {
        API.getSpecificArt(this.props.match.params.id)
            .then(res => {
                this.setState({ artwork: res.data, center: { lat: parseFloat(res.data.lat), lng: parseFloat(res.data.lng) } })
            })
            .catch(err => console.log(err));
    };
    
    saveToCollections=()=>{
        API.addCollections(this.props.match.params.id)
        .then(res => {
            
        // console.log("RESPONSE FROM BACK END TO MAKE STATE: ", res)
          this.setState({ saved: true })
          // console.log(this.state.artwork[0].title)
        })
        .catch(err => console.log(err));
          }



          findId=()=>{
            API.findUserId(this.props.match.params.id)
            console.log(this.props.match.params.id)
            .then(res => {
                
            console.log("UserId ", res);
          
              // console.log(this.state.artwork[0].title)
            })
            .catch(err => console.log(err));
              }


    render() {
        return (
            <div>

                <div>
                    <Header title={this.state.artwork.title}/>
                    <main className="container">
                        <h1>{this.state.artwork.title}</h1>
                        <div className="">
                                <div className="">
                                    <img src={this.state.artwork.imageurl}/>
                                    {/* Add  to collections button */}
                                    <button class= "btn btn-primary" onClick={this.saveToCollections} onClick={this.findId} href = "/collections" > Save to my collections </button>
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
                                    <Marker 
                                    lat={this.state.center.lat}
                                    lng={this.state.center.lng}
                                    />
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
import React, { Component } from 'react';
import API from '../utils/API';
import Header from "../components/Header";
import Footer from "../components/ReactFooter";
import 'react-bootstrap';
import './Homepage.css';

class Artwork extends Component {

    state = {
        artwork: []
    };

    componentDidMount() {
        this.loadSpecificArtwork();
    }

    loadSpecificArtwork = () => {
        API.getSpecificArt(this.props.match.params.id)
            .then(res => {
                this.setState({ artwork: res.data })
                console.log(res.data)
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
                        <div className="photo-panel">
                                <div className="photo-content relative">
                                    <img src={this.state.artwork.imageurl}/>
                                    <h4 className="absolute art-title">{this.state.artwork.title}</h4>
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


import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ReactFooter.css';
import { Col, Row } from 'react-bootstrap';

class ReactFooter extends Component {
    render(){
        return(

            <div className= "footer" color="blue-grey" className="page-footer font-small lighten-5 pt-0">
                <div style={{backgroundColor: '#21d192'}}>
                    <div className= "container">
                        <Row className="py-4 d-flex align-items-center">
                            <Col //md="6" lg="5" 
                            className="text-center text-md-left mb-4 mb-md-0">
                                <h6 className="mb-0 white-text">Get connected with us on social networks!</h6>
                            </Col>
                            <Col //md="6" lg="7" 
                            className="text-center text-md-right">
         <div className="footer-copyright text-center py-3">
                    <div className="contaioner-fluid">
                        &copy; {(new Date().getFullYear())} Copyright: <a href="https://www.MDBootstrap.com"> PubArt Philly </a>
                    </div>
                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
        

                  
         
                <div className="footer-copyright text-center py-3">
                    <div className="contaioner-fluid">
                        &copy; {(new Date().getFullYear())} Copyright: <a href="https://www.MDBootstrap.com"> PubArt Philly </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReactFooter;
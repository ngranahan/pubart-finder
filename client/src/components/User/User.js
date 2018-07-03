import React, { Component } from 'react';
// import API from '../utils/API';
// import Navbar from "../Navbar";
// import SearchBar from "../SearchBar";
import Photo from "../Photo";
import Footer from "../Footer";
import { Link } from 'react-router-dom';
import  { Navbar, Nav, NavItem , MenuItem, NavDropdown } from 'react-bootstrap';
import './User.css';



class User extends Component {
    render(){
        return(
       <div>
           <Navbar default collapseOnSelect>
             <Navbar.Header>
               <Navbar.Brand>
                  <Link to="/">Welcome to PubArt Philly {this.state.user.username} </Link>
               </Navbar.Brand>
            <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
               <Nav pullRight>
                   <NavItem eventKey={1} componentClass={Link} href="/" to="/">
             Home
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
              Art Near Me
            </NavItem>

     <NavDropdown eventKey={3} title="Account" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1} componentClass={Link} href="/collection" to="/collection">My Collection</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.2}componentClass={Link} href="/logout" to="/logout"  className="btn btn-default" onClick={this.logoutUser}> Log out </MenuItem>
    </NavDropdown>
</Nav>
    </Navbar.Collapse>
        </Navbar>

    <main className="container"> */}
     <Photo />
    </main>
    <Footer />                 
        
        
          {/* <h1>Welcome {this.state.user.username} </h1>
                        {/* <Navbar /> */} 
                        {/* <main className="container"> */}
                            {/* <Photo /> */}
                        {/* </main> */}
                        {/* <Footer /> */}
                        {/* <p>You are currently logged in as { this.state.user.username }</p> */}
                        {/* <a className="btn btn-default" onClick={this.logoutUser}>Logout</a> */} */}


        </div>
        );
    }
}



export default User;

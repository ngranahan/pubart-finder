// import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Homepage from './pages/Homepage';
import GetArt from './pages/GetArt';
import Login from './pages/Login';
import Register from './pages/Register';
import NoMatch from './pages/NoMatch';
import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react' 
import MapContainer from './pages/googleMapContainer'

// import './App.css';



class App extends Component {

  state: {
    loggedIn:false;
         };

   componentDidMount() {
          this.getUser();
      }

      getUser = () => {
        // api call
        API.getUser()
            .then(res => {
                this.setState( res.data );
            })
            .catch(err => console.log(err));
    }

    logoutUser = event => {
        event.preventDefault();
        API.logoutUser().then(res => {
            console.log(res.data);
            if (res.data == true) {
                this.setState({ user: null });
            }
        })
        .catch(err => console.log(err));
    }


    render() {
      return (
  <Router>
    <div>
   
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/callapi" component={GetArt} />
        {/* <Route path="/:user" component={User}/> */}

        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
      );
    }
    }

export default App;





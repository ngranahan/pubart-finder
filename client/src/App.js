import React, { Component } from 'react';
import API from './utils/API';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import NoMatch from './pages/NoMatch';
import UserAccount from './pages/UserAccount';



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
        <Route exact path="/" component={Homepage} user={this.state.loggedIn} />

        <Route exact path="/user" component={UserAccount} />
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





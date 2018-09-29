import React from 'react';
import ReactDOM from 'react-dom';
import { navigate, Link, Router } from '@reach/router';
import Dashboard from './components/Dashboard.jsx';
import Alert from './components/Alert.jsx';
import Home from './Home.jsx';

class App extends React.Component {
    constructor(props) {
        super(props)
    
    this.queryTest = this.queryTest.bind(this);
    }

    queryTest() {
      var data = 'test passed!' 
      
      //top line (17) defines the type of argument your function will take in. the query field passes the argument into the function
      var query = `query Hello($data: String!) {
          hello(data: $data)
        }`;

      fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { data }
      })
      })
      .then(r => r.json())
      .then(data => console.log('data returned:', data));
    }

    render() {
        return (
            <div className="header">
                <Link to="/">
                <h1 className="title">Local Alert Network </h1>
                </Link>
                <Router>
                <Home exact path="/" />
                <Dashboard path="/dashboard" />
                <Alert path="/alert" />
                </Router>
            </div> 
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
import React from 'react';
import './App.css';
import spacex from './spacex.png';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {ApolloProvider} from 'react-apollo';
import Launches from './components/Launches'
import Launch from './components/Launch'


const client = new ApolloClient({
  uri:'/graphql'
})

function App() {
  return (  
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
        <img src={spacex} alt="SpaceX" style={{width: '50%', display: 'block', margin:'auto'}} />
          
        <Route exact path="/" component={Launches} />
        <Route exact path="/launch/:flight_number" component={Launch} />
        
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

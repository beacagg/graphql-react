import React from 'react';
import './App.css';
import spacex from './spacex.png';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import Launches from './components/Launches'

const client = new ApolloClient({
  uri:'http://localhost:5000/graphql'
})

function App() {
  return (  
    <ApolloProvider client={client}>
    <div className="container">
     <img src={spacex} alt="SpaceX" style={{width: '50%', display: 'block', margin:'auto'}} />
      <Launches />
    </div>
    </ApolloProvider>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
	uri: "postgres://Jerry@localhost:5432/storage"
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

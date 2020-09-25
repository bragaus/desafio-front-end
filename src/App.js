import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './Store';

import './styles.css'

// Páginas
import Home from './Pages/Home';
import Detalhes from './Pages/Detalhes';

const client = new ApolloClient({
	uri: 'http://localhost:5000'
});

export default () => {
	return (

		<ApolloProvider client={client}>
			<Provider store={store}>
				<Router>
					<Route exact path="/" component={Home} />
					<Route exact path="/detalhes/:id" component={Detalhes} />
				</Router>
			</Provider>
		</ApolloProvider>

	);
}
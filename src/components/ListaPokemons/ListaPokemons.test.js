import React from 'react';
import ApolloClient from 'apollo-boost';
import { Query } from 'react-apollo';
import { LISTAR_TODOS_POKEMONS } from '../../graphql/listarTodosPokemons';

import { render } from '@testing-library/react';

import ListaPokemons from '../../components/ListaPokemons';

import { Provider } from "react-redux";
import { ApolloProvider } from 'react-apollo';
import store from '../../Store';

describe('ListaPokemons', () => {

    it('Deve renderizar a lista de pokemons', () => {   

        const client = new ApolloClient({
            uri: 'http://localhost:5000'
        });

        render(
            <ApolloProvider client={client}>
                <Provider  store={store}>
                    <Query query={LISTAR_TODOS_POKEMONS}>
                    {({ data: { pokemons } = {} }) => {
                        return <ListaPokemons dados={pokemons} />
                    }}
                    </Query>
                </Provider>
            </ApolloProvider>
        )

    })

});
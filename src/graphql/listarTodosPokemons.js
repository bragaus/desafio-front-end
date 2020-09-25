import gql from 'graphql-tag';

export const LISTAR_TODOS_POKEMONS = gql`
    query {
        pokemons(first: 1000) {
            id
            image
            name
            types
        }
    }
`
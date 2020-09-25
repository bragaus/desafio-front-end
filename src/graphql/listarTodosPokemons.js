import gql from 'graphql-tag';

export const LISTAR_TODOS_POKEMONS = gql`
    query {
        pokemons {
            id
            image
            name
            types
        }
    }
`
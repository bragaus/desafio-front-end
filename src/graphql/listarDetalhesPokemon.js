import gql from 'graphql-tag';

export const LISTAR_DETALHES_POKEMON = gql`
    query pokemonQuery($id: String) {
        pokemon(id: $id) {
            id
            image
            name
            types
            attacks {
                special {
                    name
                    type
                    damage
                }
            }
            attacks {
                fast {
                    name
                    type
                    damage
                }
            }    
        }
    }
`  
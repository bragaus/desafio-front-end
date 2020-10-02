import { lidarComFiltro } from './filtro';

import { 
    carregarPokemonDetalhado, 
    modificarDadosPokemon, 
    carregarPokemon 
} from './pokemons';

describe('actions', () => {

    it('Deve receber os dados de filtro', () => {

        const data = {
            filtro: 'Mew',
            filtrar: true
        }

        const acaoEsperada = {
            type: 'LIDAR_COM_FILTRO',
            data
        }

        expect(lidarComFiltro(data)).toEqual(acaoEsperada)
    });

    it('Deve receber os dados de uma lista de pokemons', () => {
        const data = [
            { 
                id:"UG9rZW1vbjowMDE=", 
                image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
                name: "Bulbasaur",
                types: ["Grass", "Poison"],
            },
            { 
                id:"UG9rZW1vbjoxNTE=", 
                image: "https://img.pokemondb.net/artwork/mew.jpg",
                name: "Mew",
                types: ["Psychic"],
            }
        ]

        const acaoEsperada = {
            type: 'CARREGAR_POKEMON',
            data
        }

        expect(carregarPokemon(data)).toEqual(acaoEsperada);
    });

    it('Deve carregar os dados detalhados de um pokemon', () => {

        const data = {
            attacks: {
                fast: [
                    {name: "Pound", type: "Normal", damage: 7, __typename: "Attack"},
                    {name: "Pound", type: "Normal", damage: 7, __typename: "Attack"}
                ],
                special: [
                    {damage: 65, name: "Dragon Pulse", type: "Dragon", __typename: "Attack"},
                    {damage: 65, name: "Dragon Pulse", type: "Dragon", __typename: "Attack"},
                    {damage: 65, name: "Dragon Pulse", type: "Dragon", __typename: "Attack"},
                    {damage: 65, name: "Dragon Pulse", type: "Dragon", __typename: "Attack"},
                    {damage: 65, name: "Dragon Pulse", type: "Dragon", __typename: "Attack"}
                ]
            },
            id:"UG9rZW1vbjoxNTE=", 
            image: "https://img.pokemondb.net/artwork/mew.jpg",
            name: "Mew",
            types: ["Psychic"],
        }

        const acaoEsperada = {
            type: 'CARREGAR_POKEMON_DETALHADO',
            data
        }

        expect(carregarPokemonDetalhado(data)).toEqual(acaoEsperada);       

    });

    it('Deve trocar o nome e o tipo do pokemon', () => {

        const data = {
            nome: 'Matheus',
            tipo: 'Programador'
        }

        const acaoEsperada = {
            type: 'MODIFICAR_POKEMON',
            data       
        }

        expect(modificarDadosPokemon(data)).toEqual(acaoEsperada);

    })

});
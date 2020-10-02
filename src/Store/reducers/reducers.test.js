import pokemon from './pokemon';
import filtro from './filtro';

describe('reducers', () => {

    it('Deve retornar um estado inicial', () => {

        expect(pokemon({}, '')).toEqual({});

    });

    it('Deve lidar com a modificação de pokemon', () => {

        const dadosPokemonModificado = {
            nome: 'Mew',
            tipo: 'Programador'
        }

        const ModificarPokemon = {
            type: 'MODIFICAR_POKEMON',
            data: dadosPokemonModificado
        }

        expect(pokemon({}, ModificarPokemon)).toEqual({dadosPokemonModificado});

    });

    it('Deve carregar um pokemon detalhado', () => {

        const dadosPokemonDetalhado = {
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

        const carregarPokemonDetalhado = {
            type: 'CARREGAR_POKEMON_DETALHADO',
            data: dadosPokemonDetalhado
        }

        expect(pokemon({}, carregarPokemonDetalhado)).toEqual({dadosPokemonDetalhado});          

    });

    it('Deve lidar com o filtro de pokemon', () => {

        const pokemonFiltrado = {
            filtrar: true,            
            filtro: 'Mew'
        }

        const filtrarPokemon = {
            type: 'LIDAR_COM_FILTRO',
            data: pokemonFiltrado
        }

        expect(filtro({}, filtrarPokemon)).toEqual({pokemonFiltrado})

    });

})
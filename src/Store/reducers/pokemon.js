const INITIAL_STATE = {
    dadosPokemonModificado: {
        nome: '',
        tipo: ''
    },
    dadosPokemonDetalhado: []
}

export default (state = INITIAL_STATE, { type, data }) => {

    switch (type) {

        case 'CARREGAR_POKEMON_DETALHADO':
            return {
                ...state,
                dadosPokemonDetalhado: data
            };

        case 'MODIFICAR_POKEMON':
            return {
                ...state,
                dadosPokemonModificado: data
            };

        default:

    }

    return state;
}
const INITIAL_STATE = {
    dadosPokemonModificado: {
        nome: '',
        tipo: ''
    },
    dadosPokemonDetalhado: []
}

export default function pokemon(state = INITIAL_STATE, action) {

    switch (action.type) {

        case 'CARREGAR_POKEMON_DETALHADO':
            return {
                ...state,
                dadosPokemonDetalhado: action.data
            };
            break;

        case 'MODIFICAR_POKEMON':
            return {
                ...state,
                dadosPokemonModificado: action.data
            };
            break;
         
    }

    return state;
}
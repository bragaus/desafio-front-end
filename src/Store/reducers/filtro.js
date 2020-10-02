const INITIAL_STATE = {
    pokemonFiltrado: {
        filtro: '',
        filtrar: false
    }
}

export default (state = INITIAL_STATE, { type, data}) => {

    if (type === 'LIDAR_COM_FILTRO') {

        return {
            ...state,
            pokemonFiltrado: data
        };        

    }

    return state;
}
const INITIAL_STATE = {}

export default function filtro(state = INITIAL_STATE, action) {

    if (action.type === 'LIDAR_COM_FILTRO') {

        return {
            ...state,
            filtro: action.filtro,
            filtrar: action.filtrar
        };        

    }

    return state;
}
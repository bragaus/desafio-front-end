export function carregarPokemonDetalhado(data) {
    return {
        type: 'CARREGAR_POKEMON_DETALHADO',
        data
    };
}

export function modificarDadosPokemon(data) {
    return {
        type: 'MODIFICAR_POKEMON',
        data
    };
}

export function carregarPokemon(data) {
    return {
        type: 'CARREGAR_POKEMON',
        data
    };
}


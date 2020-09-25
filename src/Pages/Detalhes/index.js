import React, { useState } from 'react';

// GraphQL
import { Query } from 'react-apollo';
import { LISTAR_DETALHES_POKEMON } from '../../graphql/listarDetalhesPokemon';

// Redux
import { connect } from 'react-redux';
import { carregarPokemonDetalhado } from '../../Store/actions/pokemons';

// Components
import Pokemon from '../../components/Pokemon';
import Formulario from '../../components/Formulario';

import history from '../../history';

import './styles.css';

const PokemonDetalhado = ({ match: { params: { id } }, dispatch }) => {

	// Estado para controlar a visibilidade do formulario
    const [editar, setEditar] = useState(false);

    return (
        <div className="pokemonDetalhado-container">

            <div className="grupo--btn">
                <button onClick={() => history.goBack()}>Voltar</button>
                <button onClick={() => setEditar(!editar)}>Editar</button>
            </div>

            {editar && <Formulario />}            

            <Query query={LISTAR_DETALHES_POKEMON} variables={{id}}>
                {({ loading, error, data }) => {

                    if (loading) return <h4>Loading...</h4>;
                    if (error) console.log(error);

                    const { pokemon } = data;

                    dispatch(carregarPokemonDetalhado(data))

                    return <Pokemon pokemon={pokemon}/>
                }}
            </Query>

        </div>
    );

}

export default connect()(PokemonDetalhado);
import React, { Fragment } from 'react';
import { connect } from 'react-redux';

// GraphQl
import { Query } from 'react-apollo';
import { LISTAR_TODOS_POKEMONS } from '../../graphql/listarTodosPokemons';

// Componente
import Pokemon from '../Pokemon';

import './styles.css';

const ListaPokemons = ({ filtro, filtrar }) => {

    return (

        <div className="listaPokemons--container">
            <Query query={LISTAR_TODOS_POKEMONS}>

                {({ loading, error, data: { pokemons } = {} }) => {

                    if (loading) return <h4>Loading...</h4>;
                    if (error) console.log(error);
                    
                    if (filtrar) {
                        pokemons = pokemons.filter(pokemon => (pokemon.name.toLowerCase().trim() === filtro.toLowerCase().trim()))
                    }

                    return (

                        <Fragment>

                            {pokemons.map((pokemon, index) => (

                                <Pokemon
                                    key={index} 
                                    pokemon={pokemon} 
                                />

                            ))}

                        </Fragment>

                    );

                }}

            </Query>
        </div>

    );
    
}

export default connect((
    { filtro: { pokemonFiltrado: { filtro, filtrar } = {} } }) => ({filtro, filtrar})
)(ListaPokemons);
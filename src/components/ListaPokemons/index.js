import React, { Fragment } from 'react';
import { connect } from 'react-redux';

// GraphQl
import { Query } from 'react-apollo';
import { LISTAR_TODOS_POKEMONS } from '../../graphql/listarTodosPokemons';

// Componente
import Pokemon from '../Pokemon';

import './styles.css';

const listaPokemons = ({ dados: { filtro, filtrar } }) => {

    return (

        <div className="listaPokemons--container">
            <Query query={LISTAR_TODOS_POKEMONS}>
                {({ loading, error, data }) => {

                    if (loading) return <h4>Loading...</h4>;
                    if (error) console.log(error);
                    
                    const { pokemons } = data;

                    return (

                        <Fragment>

                            {/* Se não foi filtrado um pokemon 
                            é carregado a lista de pokemons completa
                            na home page */}
                            {!filtrar ? (
                                pokemons.map((pokemon, index) => (

                                    <Pokemon
                                        key={index} 
                                        pokemon={pokemon} 
                                    />

                                ))
                            ) : (

                                // se foi filtrado é verificado qual pokemon foi escolhido
                                pokemons.map((pokemon, index) => {
                                    
                                    if (pokemon.name.toLowerCase().trim() === filtro.toLowerCase().trim()) {
                                        return <Pokemon key={index} pokemon={pokemon} />                                        
                                    }
                                    
                                })
                            )}

                        </Fragment>

                    );

                }}
            </Query>
        </div>

    );
    
}

export default connect(state => ({ dados: state.filtro }))(listaPokemons);
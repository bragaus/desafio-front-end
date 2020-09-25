import React, { useState } from 'react';

// Redux
import { connect } from 'react-redux';
import { modificarDadosPokemon } from '../../Store/actions/pokemons';

import './styles.css';

const Formulario = ({ pokemon, dispatch }) => {

    // Estados que recebem os dados digitados nos inputs
    const [name, setName] = useState('');
    const [tipos, setTipos] = useState('');    

    return (
    
        <div className="formulario--container">

            <form
                className="formulario"
                onSubmit={(e) => {
                    e.preventDefault()
                    dispatch(modificarDadosPokemon({ id: pokemon.id, name, tipos }))
                }}
            >
                <div className="grupo--input">
                    <input
                        data-testid="pokemon-name"
                        type="text" 
                        placeholder='Entre com o nome' 
                        id="nome"
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        data-testid="pokemon-tipo"
                        type="text" 
                        placeholder='Entre com o tipo'
                        id="tipo"
                        onChange={(e) => setTipos(e.target.value)}
                    />
                </div>

                <button type="submit">salvar</button>
            </form>

        </div>
    );
}

export default connect(state => ({ pokemon: state.pokemon.dadosPokemonDetalhado.pokemon }))(Formulario);


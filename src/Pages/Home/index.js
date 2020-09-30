import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { lidarComFiltro } from '../../Store/actions/filtro';

import ListaPokemons from '../../components/ListaPokemons';

import './styles.css';

const Home = ({ dispatch }) => {

    const [filtro, setFiltro] = useState('');
    const [filtrar, setFiltrar] = useState(false);
    const [mensagem, setMensagem] = useState('');

    useEffect(() => {
        dispatch(lidarComFiltro(filtro, filtrar));
    }, [filtrar])

    function verificarFiltro() {

        if (filtro.trim() && filtrar) {
            setFiltro('');
            document.getElementById("filtro").value = '';
        }

        if (filtro.trim()) {
            setFiltrar(!filtrar)
            setMensagem('');
        } else {
            setMensagem('Entre com um pokemon para filtrar');
        }

    }

    return (

        <div className="container--home">
            
            <div className="filtro">
                    <input
                        id="filtro" 
                        type="text"
                        placeholder={mensagem ? mensagem : "Buscar pokemons"}
                        onChange={({ target: { value } }) => setFiltro(value)}
                    />
                <button
                    type="submit" 
                    onClick={verificarFiltro}
                >
                    {!filtrar ? 'Buscar' : 'Limpar'}
                </button>

            </div>

            <ListaPokemons />

        </div>

    );

}

export default connect()(Home);
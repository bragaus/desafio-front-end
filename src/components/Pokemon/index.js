import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Componente
import ListaAtaques from '../ListaAtaques';

import './styles.css';

const Pokemon = ({ 
    pokemon: { id, image, name, types, attacks }, 
    dadosPokemonModificado: { id: idModificado, name: nomeModificado, tipos: tipoModificado } 
}) => {

    // Formatando os tipos para separar em virgula (tipo1, tipo2, tipo3)
    const tipos = (types.map((tipo) => tipo)).join(', ')

    return (

        <div className="pokemon--container">

            <figure key={id}>
                
                {/* se não tem attacks é porque está na home page */}
                { !attacks ? (
                    <Link to={`/detalhes/${id}`}>
                        <img src={image} alt={name} />
                    </Link>       
                ) : (
                    <img src={image} alt={name} />
                )}

                <figcaption>
                    
                    {/* Controlando qual pokemon foi modificado na lista de pokemons */}
                    {id === idModificado ? (<>
                        <h1>{nomeModificado || name} </h1>
                        <h3>{tipoModificado || tipos}</h3>     
                    </>) : (<>
                        <h1>{name}</h1>
                        <h3>{tipos}</h3>                       
                    </>)}


                </figcaption>
            </figure>

            {/* se estiver na pagina de detalhes do pokemon */}
            {attacks && <ListaAtaques attacks={attacks}/>}
        </div>

    );

}

export default connect((
    { pokemon: { dadosPokemonModificado  } }) => ({ dadosPokemonModificado })
)(Pokemon);
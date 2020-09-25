import React from 'react';

import './styles.css';

export default ({ attacks }) => {

    return (

        <div className="listaAtaques--container">

            <h2 className="ataques">Ataques</h2>

            <table>
                <caption><h4>Rapidos</h4></caption>
                <thead>
                    <tr>
                        <th> NOME </th>
                        <th> TIPO </th>
                        <th> DANO </th>
                    </tr>
                </thead>
                <tbody>
                {attacks.fast.map((e) => (

                    <tr key={e.name}>
                        <td> {e.name} </td>
                        <td> {e.type} </td>
                        <td> {e.damage} </td>
                    </tr>                        

                ))}
                </tbody>
            </table>

            <table>
                <caption><h4>Especiais</h4></caption>
                <thead>
                    <tr>
                        <th> NOME </th>
                        <th> TIPO </th>
                        <th> DANO </th>
                    </tr>
                </thead>
                <tbody>
                {attacks.special.map((e) => (

                    <tr key={e.name}>
                        <td> {e.name} </td>
                        <td> {e.type} </td>
                        <td> {e.damage} </td>
                    </tr>

                ))}
                </tbody>
            </table>
        </div>
    );
}


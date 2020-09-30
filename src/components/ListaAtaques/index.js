import React from 'react';

import './styles.css';

export default ({ attacks: { fast, special } }) => {

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
                {fast.map(({ name, type, damage }) => (

                    <tr key={name}>
                        <td> {name} </td>
                        <td> {type} </td>
                        <td> {damage} </td>
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
                {special.map(({ name, type, damage }) => (

                    <tr key={name}>
                        <td> {name} </td>
                        <td> {type} </td>
                        <td> {damage} </td>
                    </tr>

                ))}
                </tbody>
            </table>
        </div>
    );
}


import React from 'react';

import { fireEvent, render, waitFor } from '@testing-library/react';

import Formulario from './index';
import { Provider } from "react-redux";
import store from '../../Store';

describe('Teste para o component Formulario', () => {
    it('Entrar com nome do pokemon', async () => {

        const { getByTestId } = render(
            <Provider store={store}>
                <Formulario />
            </Provider>
        )

        const fieldNode = await waitFor(
            () => getByTestId('pokemon-name')
        )

        const valor = 'Charmander'
        fireEvent.change(
            fieldNode,
            { target: { value: valor } }
        )

        expect(fieldNode.value).toEqual(valor);

    });

    it('Entrar com os tipos do pokemon', async () => {

        const { getByTestId } = render(
            <Provider store={store}>
                <Formulario />
            </Provider>
        )

        const fieldNode = await waitFor(
            () => getByTestId('pokemon-tipo')
        )

        const valor = 'Fire'
        fireEvent.change(
            fieldNode,
            { target: { value: valor } }
        )

        expect(fieldNode.value).toEqual(valor);

    });



});
import React from 'react';
import { render } from '@testing-library/react';
import Pokemon from './index';
import store from '../../Store';
import { Provider } from "react-redux";

describe('actions graphql', () => {

    it('Deve renderizar o pokemon recebido', () => {

        render(
            <Provider  store={store}>
                <Pokemon pokemon={{ id: '', image: '', name: '', types: [''], attacks: {fast: [''], special: ['']} }}/>
            </Provider>
        );

    });

});
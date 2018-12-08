import '@babel/polyfill';
import React from 'react';
import { Provider } from 'mobx-react';
import Store from './stores';
import MainContainer from './containers';
import {render} from 'react-dom';

require('./styles/index.scss');

render(
    <Provider Store={Store}>
        <MainContainer/>
    </Provider>
    ,document.getElementById('app')
);
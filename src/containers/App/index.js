/*
 * Created by Roland Szecsenyi <roland.sze@gmail.com>
 * This file is part of the INSCALE technical challenge.
 */

import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {routes} from 'routes';
import 'App.scss';
import HeaderComponent from 'components/Header';
import FooterComponent from 'components/Footer';

/**
 * @description
 * Application container.
 *
 * Contain skeleton of the application.
 * React Router's Browser Router is wired-in here.
 *
 * @returns {*}
 * @constructor
 */
const App = () => {
    return (
        <BrowserRouter>
            {/* Header */}
            <HeaderComponent/>

            {/* Routes */}
            {routes}

            {/* Footer */}
            <FooterComponent/>
        </BrowserRouter>
    );
};

export default App;

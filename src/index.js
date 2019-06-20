/*
 * Created by Roland Szecsenyi <roland.sze@gmail.com>
 * This file is part of the INSCALE technical challenge.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {I18nextProvider} from 'react-i18next';
import i18n from 'i18n';
import reduxStore from 'store';
import App from 'containers/App';
import * as serviceWorker from 'serviceWorker';

/**
 * @description
 * Render React's DOM tree.
 *
 * The application container is wrapped with
 * Redux and React I18 Next.
 */
ReactDOM.render(
    <Provider store={reduxStore}>
        <I18nextProvider i18n={i18n}>
            <App/>
        </I18nextProvider>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();

/*
 * Created by Roland Szecsenyi <roland.sze@gmail.com>
 * This file is part of the INSCALE technical challenge.
 */

import React from 'react';
import {withTranslation} from 'react-i18next';

/**
 * @description
 * Index container.
 *
 * Contain the index page.
 * Wrapped with React I18 Next for translations.
 *
 * @param {object} props Properties
 * @returns {*}
 * @constructor
 */
const IndexContainer = (props) => {
    const {t} = props;

    return (
        <div className='content index-container'>
            <div className="spring spring--medium">
                <h1>{t('hiThere')}</h1>

                <p>
                    {t('introduction')}
                </p>
            </div>
        </div>
    );
};

export default withTranslation()(IndexContainer);

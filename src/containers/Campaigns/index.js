/*
 * Created by Roland Szecsenyi <roland.sze@gmail.com>
 * This file is part of the INSCALE technical challenge.
 */

import React from 'react';
import {withTranslation} from 'react-i18next';
import CampaignsComponent from 'components/Campaigns';

/**
 * @description
 * Campaigns container.
 *
 * Contain the campaigns page.
 * Wrapped with React I18 Next for translations.
 *
 * @param {object} props Properties
 * @returns {*}
 * @constructor
 */
const CampaignsContainer = (props) => {
    const {t} = props;

    return (
        <div className='content campaigns-container'>
            <div className="spring spring--medium">
                <h1>{t('campaigns')}</h1>

                <CampaignsComponent/>
            </div>
        </div>
    );
};

export default withTranslation()(CampaignsContainer);

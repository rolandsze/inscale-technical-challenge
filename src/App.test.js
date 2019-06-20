/*
 * Created by Roland Szecsenyi <roland.sze@gmail.com>
 * This file is part of the INSCALE technical challenge.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {I18nextProvider} from 'react-i18next';
import i18n from 'i18n';
import reduxStore from 'store';
import {Provider} from 'react-redux';
import {isCampaignArrayValid} from 'validators/campaign';
import {isDateValid} from 'validators/date';
import HeaderComponent from 'components/Header';
import FooterComponent from 'components/Footer';
import MessageComponent from 'components/Message';
import SpinnerComponent from 'components/Spinner';
import CampaignsComponent from 'components/Campaigns';
import CampaignsFilterableTableComponent from 'components/CampaignsFilterableTable';
import IndexContainer from 'containers/Index';
import CampaignsContainer from 'containers/Campaigns';

/**
 * @description
 * Simple component smoke test.
 */
const smokeTest = (children) => {
    const div = document.createElement('div');
    ReactDOM.render(children, div);
    ReactDOM.unmountComponentAtNode(div);
};

/**
 * @description
 * Component smoke tests
 */
describe('Components', () => {
    // Header
    it('Header renders', () => {
        smokeTest(
            <I18nextProvider i18n={i18n}>
                <BrowserRouter>
                    <HeaderComponent/>
                </BrowserRouter>
            </I18nextProvider>
        );
    });

    // Footer
    it('Footer renders', () => {
        smokeTest(
            <I18nextProvider i18n={i18n}>
                <FooterComponent/>
            </I18nextProvider>
        );
    });

    // Message
    it('Message renders', () => {
        smokeTest(<MessageComponent text='Lorem ipsum dolor sit amet' type='info'/>);
    });

    // Spinner
    it('Spinner renders', () => {
        smokeTest(<SpinnerComponent/>);
    });

    // Campaigns
    it('Campaigns renders', () => {
        smokeTest(
            <Provider store={reduxStore}>
                <I18nextProvider i18n={i18n}>
                    <CampaignsComponent/>
                </I18nextProvider>
            </Provider>
        );
    });

    // CampaignsFilterableTable
    it('CampaignsFilterableTable renders', () => {
        const campaigns = [{
            'id': 1,
            'name': 'alma',
            'startDate': '9/10/2018',
            'endDate': '3/9/2019',
            'budget': 8837743
        }];

        const div = document.createElement('div');

        smokeTest(
            <Provider store={reduxStore}>
                <I18nextProvider i18n={i18n}>
                    <CampaignsFilterableTableComponent campaigns={campaigns}/>
                </I18nextProvider>
            </Provider>
        );
        ReactDOM.unmountComponentAtNode(div);
    });
});

/**
 * @description
 * Container smoke tests
 */
describe('Containers', () => {
    // Index
    it('Index renders', () => {
        smokeTest(
            <I18nextProvider i18n={i18n}>
                <IndexContainer/>
            </I18nextProvider>
        );
    });

    // Campaigns
    it('Campaigns renders', () => {
        smokeTest(
            <Provider store={reduxStore}>
                <I18nextProvider i18n={i18n}>
                    <CampaignsContainer/>
                </I18nextProvider>
            </Provider>
        );
    });
});

/**
 * @description
 * Validation tests
 */
describe('Validation', () => {
    // Array of campaigns
    describe('Array of campaigns', () => {
        // Valid data
        it('Valid array of campaigns against the expected object shape', () => {
            const validArrayOfCampaigns = [{
                'id': 1,
                'name': 'alma',
                'startDate': '9/10/2018',
                'endDate': '3/9/2019',
                'budget': 8837743
            }];

            expect(isCampaignArrayValid(validArrayOfCampaigns)).toEqual(true);
        });

        // Invalid data
        it('Invalid array of campaigns against the expected object shape', () => {
            const invalidArrayOfCampaigns = [{
                'id': 1,
                'name': 'alma',
                'startDate': '9-10-2018',
                'endDate': '3/9/2019',
                'budget': -8837743
            }];

            expect(isCampaignArrayValid(invalidArrayOfCampaigns)).toEqual(false);
        });
    });

    describe('Date', () => {
        // Valid data
        it('Valid date against the expected format', () => {
            const validDate = '5/12/2019';

            expect(isDateValid(validDate)).toEqual(true);
        });

        // Invalid data
        it('Invalid date against the expected format', () => {
            const invalidDate = '12-24-2019';

            expect(isDateValid(invalidDate)).toEqual(false);
        });
    });
});

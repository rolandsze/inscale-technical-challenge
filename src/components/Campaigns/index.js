/*
 * Created by Roland Szecsenyi <roland.sze@gmail.com>
 * This file is part of the INSCALE technical challenge.
 */

import React, {Component} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withTranslation} from 'react-i18next';
import {campaignAddAction} from 'actions/campaign/add';
import MessageComponent from 'components/Message';
import {expectedInputDateFormat} from 'config/dateFormat';
import SpinnerComponent from 'components/Spinner';
import CampaignsFilterableTableComponent from 'components/CampaignsFilterableTable';

/**
 * @description
 * Campaigns component.
 *
 * Control the state of the campaigns.
 * Wrapped with React I18 Next for translations and Redux Connect to the store.
 */
class CampaignsComponent extends Component {
    /**
     * @description
     * Constructor.
     *
     * Expose AddCampaigns function.
     *
     * @param props
     */
    constructor(props) {
        super(props);

        window.AddCampaigns = this.addCampaigns.bind(this);
    }

    /**
     * @description
     * Component will unmount.
     *
     * Unset exposed AddCampaigns function.
     */
    componentWillUnmount() {
        window.AddCampaigns = undefined;
    }

    /**
     * @description
     * Render depending on the state of the campaigns.
     *
     * The campaignsAddState determines what's being rendered.
     *
     * @returns {*}
     */
    render() {
        return (
            <div className='campaigns-component'>
                {this.renderNoDataAddedYetMessage()}
                {this.renderInvalidFormatMessage()}
                {this.renderSpinner()}
                {this.renderCampaignsFilterableTableComponent()}
            </div>
        );
    }

    /**
     * @description
     * Render an info message if there's no campaigns data.
     *
     * @returns {*}
     */
    renderNoDataAddedYetMessage() {
        const {t, campaignsAddState} = this.props;

        if ((campaignsAddState.campaigns.length === 0 && !campaignsAddState.pending && !campaignsAddState.invalidFormat)) {
            const text = t('campaign.noDataAddedYet', {
                expectedFormat: t('campaign.expectedFormat', {expectedInputDateFormat: expectedInputDateFormat})
            });

            return <MessageComponent text={text} type='info'/>;
        }
    }

    /**
     * @description
     * Render an error message if the added data does not meet the expected format.
     *
     * @returns {*}
     */
    renderInvalidFormatMessage() {
        const {t, campaignsAddState} = this.props;

        if (!campaignsAddState.pending && campaignsAddState.invalidFormat) {
            const text = t('campaign.invalidFormat', {
                expectedFormat: t('campaign.expectedFormat', {expectedInputDateFormat: expectedInputDateFormat})
            });

            return <MessageComponent text={text} type='error'/>;
        }
    }

    /**
     * @description
     * Render a spinner if data is being added and processed.
     *
     * @returns {*}
     */
    renderSpinner() {
        const {pending} = this.props.campaignsAddState;

        if (pending) {
            return <SpinnerComponent/>;
        }
    }

    /**
     * @description
     * Render the CampaignsFilterableTableComponent with valid array of campaigns.
     *
     * @returns {*}
     */
    renderCampaignsFilterableTableComponent() {
        const {campaigns} = this.props.campaignsAddState;

        if (campaigns.length > 0) {
            return <CampaignsFilterableTableComponent campaigns={campaigns}/>;
        }
    }

    /**
     * @description
     * Add campaigns function.
     *
     * Exposed and callable from the browser's console.
     * Dispatch campaignAddAction.
     *
     * @param {array} campaigns Array of campaigns
     */
    addCampaigns(campaigns) {
        this.props.campaignAddAction(campaigns);
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        campaignAddAction: (campaigns) => dispatch(campaignAddAction(campaigns))
    };
};

const mapStateToProps = state => {
    return {campaignsAddState: state.campaignAddReducer};
};

export default compose(
    withTranslation(),
    connect(mapStateToProps, mapDispatchToProps)
)(CampaignsComponent);

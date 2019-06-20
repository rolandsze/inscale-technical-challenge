/*
 * Created by Roland Szecsenyi <roland.sze@gmail.com>
 * This file is part of the INSCALE technical challenge.
 */

import React, {Component} from 'react';
import {withTranslation} from 'react-i18next';
import PropTypes from 'prop-types';
import moment from 'moment';
import DatePicker from 'react-date-picker';
import numeral from 'numeral';
import {expectedInputDateFormat, displayDateFormat, expectedFilterDateFormat} from 'config/dateFormat';

/**
 * @description
 * Campaigns filterable table component.
 *
 * Display the filter with start date, end date and name options.
 * Display the table with campaigns.
 */
class CampaignsFilterableTableComponent extends Component {
    constructor(props) {
        super(props);

        // Current date in moment.js object
        this.currentDateMomentObject = new moment(new Date());

        // Internal state of the filter
        this.state = {
            startDate: null,
            endDate: null,
            byName: ''
        };
    }

    /**
     * @description
     * Render filter and campaigns table.
     *
     * @returns {*}
     */
    render() {
        const {campaigns} = this.props;

        // Passed in campaigns, untouched
        this.untouchedCampaigns = campaigns;

        // Processed and filtered campaigns
        this.processedAndFilteredCampaigns = this.getProcessedAndFilteredCampaigns(campaigns);

        return (
            <div className='campaigns-filterable-table-component table'>
                {/* Filter */}
                {this.renderFilter()}
                {/* Counter and table */}
                {this.renderCounterAndTable()}
            </div>
        );
    }

    /**
     * @description
     * Render filter.
     *
     * Render the filter if there are processed and filtered campaigns or
     * the filter is active. Else do not display it.
     *
     * @returns {* | null}
     */
    renderFilter() {
        const {t} = this.props;

        if (this.processedAndFilteredCampaigns.length > 0 || this.isFilterActive()) {
            return (
                <div className='campaigns-filterable-table-component__filter'>
                    <div className='campaigns-filterable-table-component__filter__date-pickers'>
                        <DatePicker
                            value={this.state.startDate}
                            onChange={date => this.setState({startDate: date})}
                            format={expectedFilterDateFormat}
                        />
                        <DatePicker
                            value={this.state.endDate}
                            onChange={date => this.setState({endDate: date})}
                            minDate={this.state.startDate}
                            format={expectedFilterDateFormat}
                        />
                    </div>

                    <div className='campaigns-filterable-table-component__filter__by-name'>
                        <input type='text' name='byName' placeholder={t('campaign.searchByName')}
                               value={this.state.byName}
                               onChange={event => this.setState({byName: event.target.value})}/>
                    </div>
                </div>
            );
        }
    }

    /**
     * @description
     * Render counter and table.
     *
     * Render the counter, and conditionally the table
     * if the counter for the processed and filtered campaigns is more than zero.
     *
     * @returns {*}
     */
    renderCounterAndTable() {
        const {t} = this.props;
        // Counter of processed and filtered campaigns
        const processedAndFilteredCampaignsCounter = this.processedAndFilteredCampaigns.length;

        return (
            <React.Fragment>
                <div className='campaigns-filterable-table-component__counter'>
                    {t('campaign.counter', {
                        counter: processedAndFilteredCampaignsCounter,
                        total: this.untouchedCampaigns.length
                    })}
                </div>
                <div className='campaigns-filterable-table-component__table table__body'>
                    {(processedAndFilteredCampaignsCounter > 0 &&
                        <div className='campaigns-filterable-table-component__table__header table__head'>
                            <div className="table__cell table__cell--5">{t('campaign.name')}</div>
                            <div className="table__cell table__cell--5">{t('campaign.startDate')}</div>
                            <div className="table__cell table__cell--5">{t('campaign.endDate')}</div>
                            <div className="table__cell table__cell--5">{t('campaign.status')}</div>
                            <div className="table__cell table__cell--5">{t('campaign.budget')}</div>
                        </div>)}

                    {/* Table rows */}
                    {this.renderTableRows()}
                </div>
            </React.Fragment>
        );
    }

    /**
     * @description
     * Render table rows.
     *
     * Render the rows with the campaigns inside the table.
     *
     * @returns {*}
     */
    renderTableRows() {
        const {t} = this.props;

        const tableRows = this.processedAndFilteredCampaigns.map((campaign, index) => {
            const badgeStatusClass = (campaign.isActive) ? 'badge--active' : 'badge--inactive';

            return (
                <div className="table__row" key={index}>
                    <div className="table__cell table__cell--5">
                        {campaign.name}
                    </div>
                    <div className="table__cell table__cell--5">
                        {campaign.startDateMomentObject.format(displayDateFormat)}
                    </div>
                    <div className="table__cell table__cell--5">
                        {campaign.endDateMomentObject.format(displayDateFormat)}
                    </div>
                    <div className="table__cell table__cell--5">
                        <span className={`badge ${badgeStatusClass}`}>
                            {(campaign.isActive) ? t('campaign.active') : t('campaign.inactive')}
                        </span>
                    </div>
                    <div className="table__cell table__cell--5">
                        {campaign.budgetFormatted}
                    </div>
                </div>
            );
        });

        return (
            <div className='campaigns-filterable-table-component__table__rows'>
                {tableRows}
            </div>
        );
    }

    /**
     * @description
     * Get processed and filtered campaigns.
     *
     * The original array of campaigns is not mutated.
     * Create a new array of campaigns with new key-value pairs inside
     * the campaign object.
     *
     * Campaigns that has end date before the start date are taken out.
     * These campaigns do not have to be displayed.
     *
     * If the filter is active, the array is further filtered.
     *
     * @param {array} campaigns Array of campaigns
     * @returns {*}
     */
    getProcessedAndFilteredCampaigns(campaigns) {
        const {t} = this.props;


        return campaigns
            .map((campaign) => {
                const startDateMomentObject = new moment(campaign.startDate, expectedInputDateFormat);
                const endDateMomentObject = new moment(campaign.endDate, expectedInputDateFormat);

                return {
                    ...campaign,
                    startDateMomentObject,
                    endDateMomentObject,
                    budgetFormatted: numeral(campaign.budget).format(t('campaign.budgetDisplayFormat')),
                    isActive: this.currentDateMomentObject.isBetween(startDateMomentObject, endDateMomentObject),
                };
            })
            .filter(campaign => {
                if (campaign.endDateMomentObject.isBefore(campaign.startDateMomentObject)) {
                    return false;
                } else if (this.isFilterActive()) {
                    const {startDate, endDate, byName} = this.state;

                    if (startDate !== null && endDate === null) {
                        // Start date only
                        return new moment(new Date(startDate)).isSameOrBefore(campaign.startDateMomentObject);
                    } else if (startDate === null && endDate !== null) {
                        // End date only
                        return new moment(new Date(endDate)).isSameOrAfter(campaign.endDateMomentObject);
                    } else if (startDate !== null && endDate !== null) {
                        // Both, with overlap approach
                        return (
                            new moment(new Date(startDate)).isSameOrBefore(campaign.endDateMomentObject) &&
                            new moment(new Date(endDate)).isSameOrAfter(campaign.startDateMomentObject)
                        );
                    }

                    // By name
                    if (byName !== '') {
                        return campaign.name.toLowerCase().includes(byName.trim().toLowerCase());
                    }

                    return true;
                } else {
                    return true;
                }
            });
    }

    /**
     * @description
     * Return boolean of the filter status.
     *
     * If any filter option is set, it returns true.
     * If none of the filter option is set, it returns false.
     *
     * @returns {boolean}
     */
    isFilterActive() {
        const {startDate, endDate, byName} = this.state;

        return (startDate !== null || endDate !== null || byName !== '');
    }
}

/**
 * Typechecking
 */
CampaignsFilterableTableComponent.propTypes = {
    campaigns: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
        budget: PropTypes.number.isRequired
    })).isRequired
};

export default withTranslation()(CampaignsFilterableTableComponent);

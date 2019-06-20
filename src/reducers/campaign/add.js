/*
 * Created by Roland Szecsenyi <roland.sze@gmail.com>
 * This file is part of the INSCALE technical challenge.
 */

import {
    CAMPAIGN_ADD_PENDING,
    CAMPAIGN_ADD_SUCCESS,
    CAMPAIGN_ADD_INVALID_FORMAT
} from 'config/constants';

/**
 * @description
 * Add new campaign reducer.
 *
 * Change the state in response to the add new campaign action.
 *
 * The state shape is the following:
 *
 * Pending: The action is pending. True or false.
 * Success: The given array of campaigns is valid. True or false.
 * Invalid format: The given array of campaigns is invalid. True or false.
 * Campaigns: Array of campaigns. Empty array or given valid array of campaigns.
 */

const initialState = {
    pending: false,
    success: false,
    invalidFormat: false,
    campaigns: []
};

export const campaignAddReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case CAMPAIGN_ADD_PENDING:
            return {
                ...state,
                pending: true,
                success: false,
                invalidFormat: false
            };
        case CAMPAIGN_ADD_SUCCESS:
            return {
                ...state,
                pending: false,
                success: true,
                invalidFormat: false,
                campaigns: [...action.campaigns, ...state.campaigns]
            };
        case CAMPAIGN_ADD_INVALID_FORMAT:
            return {
                ...state,
                pending: false,
                success: false,
                invalidFormat: true
            };
        default:
            return state;
    }
};

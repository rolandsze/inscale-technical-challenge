/*
 * Created by Roland Szecsenyi <roland.sze@gmail.com>
 * This file is part of the INSCALE technical challenge.
 */

import {
    CAMPAIGN_ADD_PENDING,
    CAMPAIGN_ADD_SUCCESS,
    CAMPAIGN_ADD_INVALID_FORMAT
} from 'config/constants';
import {isCampaignArrayValid} from 'validators/campaign';

/**
 * @description
 * Add new campaign action
 *
 * Set a new array of campaigns.
 * Dispatch a pending action, then validate the given array of campaigns.
 * If it's valid, a success action with the campaigns array is dispatched.
 * If it's invalid, an invalid format action will be dispatched.
 *
 * @param {array} campaigns Array of campaigns
 */
export const campaignAddAction = (campaigns) => (dispatch) => {
    dispatch({type: CAMPAIGN_ADD_PENDING});

    // Timeout is set for purpose.
    // So the pending state is visible for 1 second.
    setTimeout(() => {
        if (isCampaignArrayValid(campaigns)) {
            dispatch({type: CAMPAIGN_ADD_SUCCESS, campaigns});
        } else {
            dispatch({type: CAMPAIGN_ADD_INVALID_FORMAT});
        }
    }, 1000);
};

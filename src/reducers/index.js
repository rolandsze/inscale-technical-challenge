/*
 * Created by Roland Szecsenyi <roland.sze@gmail.com>
 * This file is part of the INSCALE technical challenge.
 */

import {combineReducers} from 'redux';
import {campaignAddReducer} from 'reducers/campaign/add';

/**
 * Combine reducers
 */
export default combineReducers({
    campaignAddReducer
});

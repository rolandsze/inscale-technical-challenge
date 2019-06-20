/*
 * Created by Roland Szecsenyi <roland.sze@gmail.com>
 * This file is part of the INSCALE technical challenge.
 */

import {isDateValid} from 'validators/date';

/**
 * @description
 * Validate an array of campaigns against
 * the expected campaign object shape.
 *
 * Shape of the campaign object:
 * id: Number
 * name: String
 * startDate: String that match the expected input date format
 * endDate: String that match the expected input date format
 * budget: Positive number
 *
 * @example
 * Give an array of campaigns and the result is boolean.
 *
 * Valid example:
 * isCampaignArrayValid([
 *      "id": 1,
 *      "name": "Campaign 1",
 *      "startDate": "01/11/2019",
 *      "endDate": "07/11/2019",
 *      "budget": 1000
 * ])
 *
 * Invalid example:
 * isCampaignArrayValid([
 *      "id": "campaign_1",
 *      "name": 12345,
 *      "startDate": "01-11-2019",
 *      "endDate": "07-11-2019",
 *      "budget": -1000 // Negative!
 * ])
 *
 * @param {array} campaignArray Campaigns array
 * @returns {boolean}
 */
export const isCampaignArrayValid = (campaignArray) => {
    // Is it an array with elements?
    if (Array.isArray(campaignArray) && campaignArray.length > 0) {
        // Loop through the elements of the array
        for (let i = 0; i < campaignArray.length; i++) {
            // Current campaign element
            let currentArrayElement = campaignArray[i];

            // Is it an object? Does it have the desired properties?
            if (typeof currentArrayElement !== 'object' ||
                typeof currentArrayElement['id'] !== 'number' ||
                typeof currentArrayElement['name'] !== 'string' ||
                !isDateValid(currentArrayElement['startDate']) ||
                !isDateValid(currentArrayElement['endDate']) ||
                isNaN(currentArrayElement['budget']) ||
                currentArrayElement['budget'] < 0
            ) {
                return false;
            }
        }
    } else {
        return false;
    }

    return true;
};

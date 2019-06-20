/*
 * Created by Roland Szecsenyi <roland.sze@gmail.com>
 * This file is part of the INSCALE technical challenge.
 */

import {expectedInputDateFormat} from 'config/dateFormat';
import moment from 'moment';

/**
 * @description
 * Validate a string of date against the
 * expected input date format.
 * Moment.js is used. See: https://momentjs.com/
 *
 * @example
 * In this project, the expected input date format is
 * found in the configuration file. See config/dataFormat.
 * Give a string of date and the result is boolean.
 *
 * Valid example:
 * isDateValid('01/11/2019')
 *
 * Invalid example:
 * isDateValid('01-11-2019')
 *
 * @param {string} date Date
 * @returns {boolean}
 */
export const isDateValid = (date) => {
    const momentObject = new moment(date, expectedInputDateFormat);

    return momentObject.isValid();
};

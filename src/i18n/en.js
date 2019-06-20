/*
 * Created by Roland Szecsenyi <roland.sze@gmail.com>
 * This file is part of the INSCALE technical challenge.
 */

// English translation
export default {
    languageCodes: {
        en: 'En',
        zh: 'Zh',
        ms: 'Ms'
    },
    index: 'Index',
    campaigns: 'Campaigns',
    backToIndex: 'Back to index',
    hiThere: 'Hi there!',
    footer: {
        createdBy: 'Created by Roland Szecsenyi for INSCALE.',
        gitHub: 'GitHub',
        linkedIn: 'LinkedIn'
    },
    introduction: 'Thank you for checking out my implementation of the ' +
        'technical challenge by INSCALE. At the top, you can navigate to the campaigns page ' +
        'where you can add the campaigns via the browser console. Happy reviewing! Roland',
    campaign: {
        counter: 'Showing {{counter}} of {{total}} campaign(s)',
        name: 'Name',
        startDate: 'Start Date',
        endDate: 'End Date',
        status: 'Status',
        active: 'Active',
        inactive: 'Inactive',
        budget: 'Budget',
        budgetDisplayFormat: '0.00a $',
        searchByName: 'Search by name',
        noDataAddedYet: 'There is no data added yet. Please open your browser\'s console and add by calling ' +
            'the <b>window.AddCampaigns</b> function. The input data must meet the expected format.<br/> {{expectedFormat}}',
        expectedFormat: 'The expected format is an array of campaigns. Each campaign must be an object ' +
            'with the following properties:<br/> ' +
            '"id": Number,<br/>' +
            '"name": String,<br/>' +
            '"startDate": String that match the expected input date format {{expectedInputDateFormat}},<br/>' +
            '"endDate": String that match the expected input date format {{expectedInputDateFormat}},<br/>' +
            '"budget": Positive number',
        invalidFormat: 'Uh oh, the data you tried to add does not meet the expected format.<br/> {{expectedFormat}}',
    }
};

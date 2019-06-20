# INSCALE technical challenge
A simple React application that shows a list of campaigns. The campaigns can be filtered by start date, end date and name.

Online demo: [Click](https://challenge.lionr.digital/)

## Getting started
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Installing
Download or clone this repository:

```sh
git clone https://github.com/rolandsze/inscale-technical-challenge.git
```

Install the node packages with npm:

```sh
npm install
```

Run the local development environment:
```sh
npm start
```

That's it!

## Usage
```sh
npm start
```
Runs the app in the development mode.

```sh
npm test
```
Launches the test runner in the interactive watch mode.

```sh
npm run build
```
Builds the app for production to the `build` folder.

## Test data
### Valid
Add total of 10 campaigns. 1 campaign is hidden because the end date is before the start date.
```javascript
window.AddCampaigns([
    {"id":1,"name":"Divavu","startDate":"9/12/2017","endDate":"3/9/2018","budget":88377},
    {"id":2,"name":"Jaxspan","startDate":"11/11/2017","endDate":"2/12/2018","budget":608715},
    {"id":3,"name":"Miboo","startDate":"11/1/2017","endDate":"6/12/2017","budget":239507533},
    {"id":4,"name":"Trilith","startDate":"8/5/2017","endDate":"11/10/2017","budget":179838},
    {"id":5,"name":"Layo","startDate":"11/08/2017","endDate":"3/10/2018","budget":837850},
    {"id":6,"name":"Photojam","startDate":"7/5/2019","endDate":"6/11/2019","budget":858131},
    {"id":7,"name":"Blogtag","startDate":"6/2/2017","endDate":"1/5/2018","budget":10000},
    {"id":8,"name":"Rhyzio","startDate":"10/11/2017","endDate":"1/12/2018","budget":272552},
    {"id":9,"name":"Zoomcast","startDate":"9/6/2017","endDate":"11/10/2017","budget":301919},
    {"id":10,"name":"Realbridge","startDate":"3/5/2018","endDate":"10/2/2017","budget":5000}
]);
```

### Invalid
The below test data is a negative budget.
```javascript
window.AddCampaigns([
    {"id": 1,"name": "alma","startDate": "9/10/2018","endDate": "3/9/2019","budget": -8837743}
]);
```

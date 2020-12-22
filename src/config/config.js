export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    // API_URL: 'http://jfr.zapple.co/',
    API_URL: 'http://localhost:8888/',
    // API_URL: process.env.REACT_APP_API_URL,
    API_PREFIX: 'oapi/',
    AUTH_PREFIX: 'auth/',
    CLIENT_ID: '',
    CLIENT_SECRET: '',
    GRANT_TYPE: 'password',
    SCOPE: '*',
    s3: {
        BUCKET: ''
    },
    apiGateway: {
        REGION: '',
        URL: ''
    },
    MONTHSLIST: [
        {number: '01', name: 'January', index: 1},
        {number: '02', name: 'February', index: 2},
        {number: '03', name: 'March', index: 3},
        {number: '04', name: 'April', index: 4},
        {number: '05', name: 'May', index: 5},
        {number: '06', name: 'June', index: 6},
        {number: '07', name: 'July', index: 7},
        {number: '08', name: 'August', index: 8},
        {number: '09', name: 'September', index: 9},
        {number: '10', name: 'October', index: 10},
        {number: '11', name: 'November', index: 11},
        {number: '12', name: 'December', index: 12}
    ],
    DAYLIST: [
        {number: 1, name: "Monday"},
        {number: 2, name: "Tuesday"},
        {number: 3, name: "Wednesday"},
        {number: 4, name: "Thurday"},
        {number: 5, name: "Friday"},
        {number: 6, name: "Saturday"},
        {number: 7, name: "Sunday"}
    ],
    ADMINS: [

    ]
};

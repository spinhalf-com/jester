import _ from 'lodash';
import config from '../config/config';
import headers from "../config/headers";
import axios from 'axios';
import moment from "moment";
// import moment from 'moment';

export const Functions = {

    uuidGenerated () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    },
    makeQueryString(params, separator = "?") {
        // console.log('params', params)
        Object.keys(params).map(
            key => {
                if(_.isEmpty(params[key])) {
                    delete params[key]
                }
                return null;
            }
        )
        return _.isEmpty(params) ? "": separator + Object.keys(params).map(key => key + '=' + params[key]).join('&');
    },
    getMetadataIndices() {
        return [
            'domains'
        ]
    },
    setMetaData() {
        let getUrl = config.API_URL + config.API_PREFIX + 'metadata';
         axios.get(getUrl, this.makeHeaders()).then(
            result => {
                _.forEach(this.getMetadataIndices(), (index) => {
                    if(result.data.hasOwnProperty('data') && result.data.data.hasOwnProperty(index)) {
                        localStorage.setItem(index, JSON.stringify(result.data.data[index]));
                    }
                })
                console.log('metadata refreshed')
            },
            error => {
                console.log(error);
            }
        );
    },
    getMetaData() {
        let metaData = {}
        _.forEach(this.getMetadataIndices(), (index) => {
            metaData[index] = JSON.parse(localStorage.getItem(index))
        })
        return metaData;
    },
    isIterable(obj) {
        // checks for null and undefined
        if (obj == null) {
            return false;
        }
        return typeof obj[Symbol.iterator] === 'function';
    },
    makeHeaders() {
        let headerValues = {
            headers:
                {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
        }
        return headerValues;
    },
    checkAuthenticated() {
        if(!localStorage.getItem('token')) {
            window.location.href = '/#/login'
        }

        let headers = this.makeHeaders();
        console.log('checkAuthenticated', headers)
        console.log('localStorage', window.localStorage.getItem('token'))

        let getUrl = config.API_URL + 'admin/check';
        axios.get(getUrl, headers).then(
            result => {
                console.log(result.data)
            },
            error => {
                console.log('Authentication Error: ',error);
                window.location.href = '/#/login'
            }
        );
    },
    logout() {
        console.log('log out event fired')
        localStorage.removeItem('token');
        localStorage.removeItem('token_expiry');
        localStorage.removeItem('token_email');
        window.location.href = '#/login'
    },
    getDateString(date = null) {
        let dateObj = date ? moment(date): moment();
        return dateObj.format("YYYY-MM-DD");
    },
    getDefaultDateRange() {
        var date = moment();
        var last = moment(date.getTime() - (7 * 24 * 60 * 60 * 1000));

        var startDate = last.format("YYYY-MM-DD");
        var endDate = date.format("YYYY-MM-DD");

        return {
            startDate : startDate,
            endDate: endDate
        };
    }
};

import config from "../../config/config";
import axios from "axios";
import {domainsConstants} from "../constants/domains";
import headers from "../../config/headers";
import {errorHandler} from "../../functions/errorHandler";

export const domains = {
    getDomainData
};

function getDomainData() {
    // console.log('actions.domain');
    return (dispatch, getState) => {
        //console.log('current state:', getState());
        dispatch(request());
        let getUrl = config.API_URL + config.API_PREFIX + 'domains';

        axios.get(getUrl, headers()).then(
            result => {
                // console.log(result.data)
                return dispatch(success(result.data));
            },
            error => {
                console.log(error);
                if (!errorHandler(error)) {
                    return dispatch(failure(error));
                }
            }
        );
    };

    function request() {
        return {
            type: domainsConstants.GET_DOMAIN
        }
    }

    function success(data) {
        return {
            type: domainsConstants.GET_DOMAIN_SUCCESS, data
        }
    }

    // function updateItem(data) {
    //     return {
    //         type: domainsConstants.GET_DOMAIN_UPDATE_ITEM, data
    //     }
    // }

    function failure(error) {
        return {
            type: domainsConstants.GET_DOMAIN_FAILURE, error
        }
    }
}

export function addDomainsData(data) {
    return (dispatch) => {
        let postUrl = config.API_URL + config.API_PREFIX + 'domains';
        axios.post(postUrl, data, headers()).then(
            (result) => {
                // console.log(result.data)
                dispatch(getDomainData())
            },
            (error) => {
                console.log(error);
                errorHandler(error)
            }
        );
    };
}

export function deleteDomainsData(domainId) {
    return (dispatch) => {
        let deleteUrl = config.API_URL + config.API_PREFIX + 'domains/' + domainId;
        axios.delete(deleteUrl, headers()).then(
            (result) => {
                // console.log(result.data)
                dispatch(getDomainData())
            },
            (error) => {
                console.log(error);
                errorHandler(error)
            }
        );
    };
}



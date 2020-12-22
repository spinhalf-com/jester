import { domainsConstants } from "../constants/domains";

const initialState = [];

export default function location(state = initialState, action) {
    switch (action.type) {
        case domainsConstants.GET_DOMAIN:
            //console.log(state)
            return state;
        case domainsConstants.GET_DOMAIN_SUCCESS:
            return action.data.data;
        case domainsConstants.GET_DOMAIN_UPDATE_ITEM:
            let newState = [...state];
            newState.map(item => {
                if(item[0] === action.data[0]) {
                    item = action.data
                }
                return item;
            });
            return newState;
        case domainsConstants.GET_DOMAIN_FAILURE:
            return action.error;
        default:
            return state;
    }
}

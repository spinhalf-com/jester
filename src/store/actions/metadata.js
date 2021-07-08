import { metadataConstants } from '../constants/metadata';
import { Functions } from '../../functions/functions';
import config from '../../config/config';
import headers from '../../config/headers';
import axios from 'axios';
import _ from 'lodash';

export const metadata = {
  getMetaData,
};

function getMetaData(queryArgs = null) {
  return (dispatch, getState) => {
    let getUrl = config.API_URL + config.API_PREFIX + 'metadata';
    axios.get(getUrl, headers()).then(
      (result) => {
        dispatch(success(result.data));
        console.log('state metadata refreshed');
        // console.log(result.data)
      },
      (error) => {
        console.log(error);
      }
    );
  };
}

//! Need to extract to be able to test it
export  const success = (data) => {
  return {
    type: metadataConstants.GET_METADATA_SUCCESS,
    data,
  };
};

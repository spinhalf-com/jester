import { metadataConstants } from '../constants/metadata';

const initialState = [];

export default function location(state = initialState, action) {
  switch (action.type) {
    case metadataConstants.GET_METADATA:
      return action.data;
    case metadataConstants.GET_METADATA_SUCCESS:
      return action.data;
    case metadataConstants.GET_METADATA_FAILURE:
      return action.error;
    default:
      return state;
  }
}

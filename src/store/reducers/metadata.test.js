import metadataReducer from './metadata';
import { metadataConstants } from '../constants/metadata';

const initialState = [];

test('reducer should return the initial state', () => {
  expect(metadataReducer(undefined, {})).toEqual(initialState);
});

const MTEA = {
  __META_ID: '1ffe31da-1991-49cd-97a9-306d2002462c',
};
test('reducer should handle GET_METADATA', () => {
  expect(
    metadataReducer(initialState, {
      type: metadataConstants.GET_METADATA,
      data: MTEA,
    })
  ).toEqual(MTEA);
});

const succesData = {
  successMessage: 'SECCES',
};

test('reducer should handle GET_METADATA_SUCCESS', () => {
  expect(
    metadataReducer(initialState, {
      type: metadataConstants.GET_METADATA_SUCCESS,
      data: succesData,
    })
  ).toEqual(succesData);
});


test('reducer should handle GET_METADATA_FAILURE', () => {
  expect(
    metadataReducer(initialState, {
      type: metadataConstants.GET_METADATA_SUCCESS,
      data: succesData,
    })
  ).toEqual(succesData);
});

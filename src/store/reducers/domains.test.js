import locationReducer from './domains';
import { domainsConstants } from '../constants/domains';

const initialState = [];

test('reducer should return the initial state', () => {
  expect(locationReducer(undefined, {})).toEqual(initialState);
});

test('reducer should handle GET_DOMAIN', () => {
  expect(
    locationReducer(initialState, {
      type: domainsConstants.GET_DOMAIN,
    })
  ).toEqual(initialState);
});

const domainSuccess = {
  data: {
    test: 'https:test.com',
  },
};

test('reducer should handle GET_DOMAIN_SUCCESS', () => {
  expect(
    locationReducer(initialState, {
      type: domainsConstants.GET_DOMAIN_SUCCESS,
      data: domainSuccess,
    })
  ).toEqual(domainSuccess.data);
});

const updatedDomain = ['https:test.com'];

test('reducer should handle GET_DOMAIN_UPDATE_ITEM [domain key with new]', () => {
  expect(
    locationReducer(['https:test.test.com'], {
      type: domainsConstants.GET_DOMAIN_UPDATE_ITEM,
      data: updatedDomain,
    })
  ).toEqual(['https:test.test.com']);
});

test('reducer should handle GET_DOMAIN_UPDATE_ITEM [same domain key]', () => {
  expect(
    locationReducer(['https:test.com'], {
      type: domainsConstants.GET_DOMAIN_UPDATE_ITEM,
      data: updatedDomain,
    })
  ).toEqual(['https:test.com']);
});

test('reducer should handle GET_DOMAIN_FAILURE', () => {
  expect(
    locationReducer(['https:test.com'], {
      type: domainsConstants.GET_DOMAIN_FAILURE,
      error: {
        message: 'Something went wrong',
      },
    })
  ).toEqual({
    message: 'Something went wrong',
  });
});

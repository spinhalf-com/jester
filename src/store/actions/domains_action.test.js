import thunk from 'redux-thunk';
import axios from 'axios';
import {
  addDomainsData,
  deleteDomainsData,
  domains,
  failure,
  request,
  success,
  getDomainData,
} from './domains';
import configureMockStore from 'redux-mock-store';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('axios');

//? Async Action Creators

const state = {
  domains: ['https:test.com'],
};

const successResponse = {
  data: 'test',
};

const errorResponse = {
  message: 'test',
};

const successPostResponse = {
  data: 'SUCCESS',
};

test('getDomainData action should get Domains, and call success action on succes response', async () => {
  axios.get.mockResolvedValue(successResponse);
  const store = mockStore(state);
  await store.dispatch(getDomainData());
  const actions = store.getActions();
  expect(actions[0]).toEqual(request());
  expect(actions[1].data).toEqual(successResponse.data);
});

test('getDomainData action should get Domains, and failure axois respnse should call failure action', async () => {
  axios.get.mockRejectedValue(errorResponse);
  const store = mockStore(state);
  await store.dispatch(getDomainData());
  const actions = store.getActions();
  expect(actions[0]).toEqual(request());
  expect(actions[1].data).toEqual(errorResponse.data);
});

test('addDomainsData should run GET_DOMAIN action on success', async () => {
  axios.post.mockResolvedValue(successPostResponse);
  const store = mockStore(state);
  await store.dispatch(addDomainsData());
  const actions = store.getActions();
  expect(actions[0]).toEqual(request());
});

test('addDomainsData should run errorHandler on error', async () => {
  axios.post.mockRejectedValue(errorResponse);
  const store = mockStore(state);
  await store.dispatch(addDomainsData());
  const actions = store.getActions();
  expect(actions).toEqual([]);
});

test('deleteDomainsData should run GET_DOMAIN action on success', async () => {
  axios.delete.mockResolvedValue({ test: 'test' });
  const store = mockStore(state);
  await store.dispatch(deleteDomainsData());
  const actions = store.getActions();
  expect(actions[0]).toEqual(request());
});

test('deleteDomainsData should run errorHandler on error', async () => {
  axios.delete.mockRejectedValue(errorResponse);
  const store = mockStore(state);
  await store.dispatch(deleteDomainsData());
  const actions = store.getActions();
  expect(actions).toEqual([]);
});

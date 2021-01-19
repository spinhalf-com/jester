import thunk from 'redux-thunk';
import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import { metadata, success } from './metadata';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('axios');

const state = {
  domains: ['https:test.com'],
};

const successResponse = {
  data: 'test',
};

const errorResponse = {
    message: 'test',
  };

test('getMetaData action should get Domains, and dispatch success', async () => {
  axios.get.mockResolvedValue(successResponse);
  const store = mockStore(state);
  await store.dispatch(metadata.getMetaData());
  const actions = store.getActions();
  expect(actions[0].type).toEqual(success(successResponse).type);
});



test('getMetaData action should get Domains, and dispatch success', async () => {
    axios.get.mockRejectedValue(errorResponse);
    const store = mockStore(state);
    await store.dispatch(metadata.getMetaData());
    const actions = store.getActions();
    expect(actions[0]).toEqual(undefined);
  });
  
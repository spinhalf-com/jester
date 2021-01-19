import { CInput, CModal } from '@coreui/react';
import axios from 'axios';
import React from 'react';
import { act } from '@testing-library/react';
import { DomainForm } from './DomainForm.jsx';
import setupMountWrapper from '../../test/helpers/setupMountWrapper';
import findByTestAttr from '../../test/utils/findByTestAttr';

//! A good parcice on testing ---> you should not test implementation detail || Test the UI ---> the thing that is visible to the user

//! You don't want to break your test when you refactor your code -_-
jest.mock('axios');

test('component renders without error', () => {
  const wrapper = setupMountWrapper(DomainForm);
  expect(wrapper).toHaveLength(1);
});

const defaultState = {
  name: '',
};

const defaultSaveState = {
  visible: false,
  color: 'success',
  info: [],
};

afterEach(() => {
  jest.restoreAllMocks();
});

test('CInput input component response correctly on change event and update that state', () => {
  const setFormState = jest.fn();
  jest
    .spyOn(React, 'useState')
    .mockReturnValueOnce([defaultState, setFormState]);
  const wrapper = setupMountWrapper(DomainForm);

  wrapper
    .find(CInput)
    .find('input')
    .simulate('change', { target: { value: 'test@test.test', name: 'name' } });

  expect(setFormState).toHaveBeenCalledWith({ name: 'test@test.test' });
});

test('CInput input component response correctly on change event and update that state', () => {
  const setFormState = jest.fn();
  jest
    .spyOn(React, 'useState')
    .mockReturnValueOnce([defaultState, setFormState]);
  const wrapper = setupMountWrapper(DomainForm);

  wrapper
    .find(CInput)
    .find('input')
    .simulate('change', { target: { value: 'test@test.test', name: 'name' } });

  expect(setFormState).toHaveBeenCalledWith({ name: 'test@test.test' });
});

// act(() => {
//     submitButton.at(0).simulate('click');
//   });

test('CModal should show up on valid from submit event | on succes Axios call should show SUCCESS Modal', async () => {
  const wrapper = setupMountWrapper(DomainForm);
  const Modal = wrapper.find(CModal);

  act(() => {
    axios.post.mockResolvedValue();
    wrapper
      .find(CInput)
      .find('input')
      .simulate('change', {
        target: { value: 'test@test.test', name: 'name' },
      });

    const submitButton = findByTestAttr(wrapper, 'Submit');
    submitButton.at(0).simulate('click');
  });

  expect(Modal.props().color).toEqual('success');
});

test('CModal should show up on valid from submit event | on failure Axios call should show DANGER Modal', async () => {
  const wrapper = setupMountWrapper(DomainForm);
  const Modal = wrapper.find(CModal);
  act(() => {
    axios.post.mockResolvedValue();
    wrapper
      .find(CInput)
      .find('input')
      .simulate('change', {
        target: { value: 'test@test.test', name: 'name' },
      });

    const submitButton = findByTestAttr(wrapper, 'Submit');
    submitButton.at(0).simulate('click');
  });

  expect(Modal.props().color).toEqual('success');
});

test('CModal should show up on Error from submit event | if  form value is not valid, like an empty string', async () => {
  const wrapper = setupMountWrapper(DomainForm);
  const Modal = wrapper.find(CModal);
  act(() => {
    axios.post.mockResolvedValue();
    const submitButton = findByTestAttr(wrapper, 'Submit');
    submitButton.at(0).simulate('click');
  });
  expect(Modal.props().color).toEqual('success');
});

test('Cancel button shoud rest the input field', async () => {
  const setFormState = jest.fn();
  jest
    .spyOn(React, 'useState')
    .mockReturnValueOnce([defaultState, setFormState]);

  const wrapper = setupMountWrapper(DomainForm);
  const CancelButton = findByTestAttr(wrapper, 'Cancel');
  CancelButton.at(0).simulate('click');
  expect(setFormState).toHaveBeenCalledWith({ name: '' });
});

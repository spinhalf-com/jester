import React from 'react';
import { CButton, CModal } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { act } from '@testing-library/react';
import { mount } from 'enzyme';
import setupMountWrapper from '../../test/helpers/setupMountWrapper';
import findByTestAttr from '../../test/utils/findByTestAttr';
import { DomainList } from './DomainList.jsx';

const props = {
  domainData: [{ id: '1' }],
  getDomainData: jest.fn(),
  deleteDomainData: jest.fn(),
};

afterEach(() => {
  jest.restoreAllMocks();
});

test('DomainList should renders without error', () => {
  const wrapper = setupMountWrapper(DomainList, props);
  expect(wrapper).toHaveLength(1);
});

//! ====>  PLEASE update your React-project And uncomment these tests
// test('CIcon should deleteRecord in response on click event || and open a Modal', () => {
//   const setDanger = jest.fn();
//   jest
//     .spyOn(React, 'useState')
//     .mockReturnValueOnce([false, setDanger])
//     .mockReturnValueOnce([setDanger, jest.fn()]);
//   const wrapper = setupMountWrapper(DomainList, props);

//   const Modal = wrapper.find(CModal);
//   const trashIcon = findByTestAttr(wrapper, 'icon-trash');
//   act(() => {
//     console.log(trashIcon.at(0).debug());
//     trashIcon.at(0).simulate('click');
//     console.log(Modal.debug());
//   });
//   expect(setDanger).toHaveBeenCalledWith(props.domainData[0].id);
//   expect(Modal.props().show).toEqual(true);
// });

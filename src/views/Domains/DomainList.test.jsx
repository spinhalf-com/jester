import React from 'react'

import { shallow, mount } from 'enzyme';
import { DomainList } from './DomainList'
import { CButton } from '@coreui/react';

describe('<DomainList />', () => {
    const defaultProps = {
        domainData: null,
        getDomainData: jest.fn(),
        deleteDomainData: jest.fn()
    }

    //https://enzymejs.github.io/enzyme/
    //https://jestjs.io/docs/en/tutorial-react

    beforeEach( () => {
        jest.clearAllMocks()
    })

    const renderComponent = (props = {}) => {
        return mount(<DomainList {...defaultProps} {...props} />);
      };

      it('should render without crashing and have expected component with defaultProps', () => {
        const renderedItem = renderComponent();
        // expect(defaultProps.getDomainData()).to

      } );

      it('should have right component structure with default Props', () => {
        const renderedItem = renderComponent();
        // console.log(renderedItem.debug())
        expect(renderedItem.find('.form-control')).toHaveLength(3);
      })

      it('should render correctly with 1 item', () => {
        const mockDomainData = [{xyz: 1}];
        const renderedItem = renderComponent({domainData: mockDomainData});
        // console.log(renderedItem.debug())
        expect(defaultProps.getDomainData).toHaveBeenCalledTimes(1);
        // expect(renderedItem.find('.')).toHaveLength(1);

        // expect(defaultProps.deleteDomainData).toHaveBeenCalledWith({id:xyz});
      })

})

import React, { useState, useEffect } from 'react';
import {
  CCard,
  CCardHeader,
  CCardBody,
  CBadge,
  CButton,
  CDataTable,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from '@coreui/react';
import { domains, deleteDomainsData } from '../../store/actions/domains';
import { connect } from 'react-redux';
import CIcon from '@coreui/icons-react';

export const DomainList = (props) => {
  const [danger, setDanger] = useState(false);
  const [domainId, setDomainId] = useState([]);

  //! test this
  useEffect(() => {
    props.getDomainData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //! test this
  const deleteRecord = (domainId) => {
    console.log('[deleteRecord]');
    setDomainId(domainId);
    setDanger(!danger);
    console.log(!danger);
  };

  //! test this
  const executeDelete = (domainId) => {
    props.deleteDomainData(domainId);
    setDanger(!danger);
  };

  // const [details, setDetails] = useState([])
  // const [items, setItems] = useState(usersData)

  const fields = [
    { key: 'name', label: 'Name', _style: { width: '20%' } },
    {
      key: 'show_details',
      label: 'Actions',
      _style: { width: '1%' },
      sorter: false,
      filter: false,
    },
  ];

  const getBadge = (status) => {
    switch (status) {
      case 'Active':
        return 'success';
      case 'Inactive':
        return 'secondary';
      case 'Pending':
        return 'warning';
      case 'Banned':
        return 'danger';
      default:
        return 'primary';
    }
  };

  const log = () => {
    // console.log(props.domainData)
  };

  return (
    <CCard>
      <CCardHeader onMouseOver={log()}>List of Domains </CCardHeader>

      <CCardBody>
        <CDataTable
          items={props.domainData ? props.domainData : []}
          fields={fields}
          columnFilter
          tableFilter
          footer
          itemsPerPageSelect
          itemsPerPage={10}
          hover
          sorter
          pagination
          // loading
          // onRowClick={(item,index,col,e) => console.log(item,index,col,e)}
          // onPageChange={(val) => console.log('new page:', val)}
          // onPagesChange={(val) => console.log('new pages:', val)}
          // onPaginationChange={(val) => console.log('new pagination:', val)}
          // onFilteredItemsChange={(val) => console.log('new filtered items:', val)}
          // onSorterValueChange={(val) => console.log('new sorter value:', val)}
          // onTableFilterChange={(val) => console.log('new table filter:', val)}
          // onColumnFilterChange={(val) => console.log('new column filter:', val)}
          scopedSlots={{
            status: (item) => (
              <td>
                <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
              </td>
            ),
            show_details: (item) => {
              return (
                <td className='py-2'>
                  {/*<CIcon*/}
                  {/*    style={{color: 'darkgray', cursor: "pointer"}}*/}
                  {/*    name="cil-pencil"*/}
                  {/*    height={20}*/}
                  {/*    onClick={() => { editRecord(item.id) }}*/}
                  {/*/>*/}
                  <CIcon
                   data-test='icon-trash'
                    style={{ color: 'darkgray', cursor: 'pointer' }}
                    name='icon-trash'
                    height={20}
                    onClick={() => {
                      deleteRecord(item.id);
                    }}
                  />
                </td>
              );
            },
            // 'details':
            //     item => {
            //         return (
            //             <CCollapse show={details.includes(item.id)}>
            //                 <CCardBody>
            //                     <h4>
            //                         {item.username}
            //                     </h4>
            //                     <p className="text-muted">User since: {item.registered}</p>
            //                     <CButton size="sm" color="info">
            //                         User Settings
            //                     </CButton>
            //                     <CButton size="sm" color="danger" className="ml-1">
            //                         Delete
            //                     </CButton>
            //                 </CCardBody>
            //             </CCollapse>
            //         )
            //     }
          }}
        />
      </CCardBody>
      <CModal show={danger} onClose={() => setDanger(!danger)} color='danger'>
        <CModalHeader closeButton>
          <CModalTitle>Modal title</CModalTitle>
        </CModalHeader>
        <CModalBody>Are you sure?</CModalBody>
        <CModalFooter>
          <CButton
            data-test='Delete'
            color='danger'
            onClick={() => executeDelete(domainId)}
          >
            Delete
          </CButton>{' '}
          <CButton
            data-test='Cancel'
            color='secondary'
            onClick={() => setDanger(!danger)}
          >
            Cancel
          </CButton>
        </CModalFooter>
      </CModal>
    </CCard>
  );
};

function mapStateToProps(state) {
  return {
    domainData: state.domains,
    domainMetadata: state.campaigns,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getDomainData: () => {
      dispatch(domains.getDomainData());
    },
    deleteDomainData: (domainId) => {
      dispatch(deleteDomainsData(domainId));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(DomainList);

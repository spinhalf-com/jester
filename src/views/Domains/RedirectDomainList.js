import React, { useState, useEffect } from 'react'
import {
    CCard, CCardHeader, CCardBody, CBadge, CButton, CDataTable, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter
} from '@coreui/react'
import { redirects, deleteRedirectsData } from "../../store/actions/redirects";
import { connect } from "react-redux";
import CIcon from "@coreui/icons-react";
import config from "../../config/config";
import axios from "axios";
import headers from "../../config/headers";

const RedirectDomainsList = (props) => {

    const [danger, setDanger] = useState(false)
    const [redirectId, setRedirectId] = useState([])

    useEffect(() => {
        props.getRedirectData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const deleteRecord = (redirectId) => {
        setRedirectId(redirectId);
        setDanger(!danger)
    }

    const editRecord = (id) => {
        let editUrl = './#/redirects/edit/' + id;
        window.open(editUrl, "_blank");
    }

    const executeDelete = (redirectId) => {
        props.deleteRedirectData(redirectId)
        setDanger(!danger)
    }

    // const [details, setDetails] = useState([])
    // const [items, setItems] = useState(usersData)

    const fields = [
        { key: 'name',  label: 'Name', _style: { width: '40%'} },
        { key: 'url',  label: 'Url', _style: { width: '40%'} },
        {
            key: 'show_details',
            label: 'Actions',
            _style: { width: '1%' },
            sorter: false,
            filter: false
        }
    ]

    const getBadge = (status) => {
        switch (status) {
            case 'Active': return 'success'
            case 'Inactive': return 'secondary'
            case 'Pending': return 'warning'
            case 'Banned': return 'danger'
            default: return 'primary'
        }
    }

    const log = () => {
        // console.log(props.redirectData)
    }

    return (
        <CCard>
            <CCardHeader onMouseOver={log()}>
                List of Redirects{' '}
            </CCardHeader>

            <CCardBody>

                <CDataTable
                    items={props.redirectData ? props.redirectData: []}
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
                    scopedSlots = {{
                        'status':
                            (item)=>(
                                <td>
                                    <CBadge color={getBadge(item.status)}>
                                        {item.status}
                                    </CBadge>
                                </td>
                            ),
                        'show_details':
                            item => {
                                return (
                                    <td className="py-2">
                                        <CIcon
                                            style={{color: 'darkgray', cursor: "pointer"}}
                                            name="cil-pencil"
                                            height={20}
                                            onClick={() => { editRecord(item.id) }}
                                        />
                                        <CIcon
                                            style={{color: 'darkgray', cursor: "pointer"}}
                                            name="cil-trash"
                                            height={20}
                                            onClick={() => { deleteRecord(item.id) }}
                                        />
                                    </td>
                                )
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
            <CModal
                show={danger}
                onClose={() => setDanger(!danger)}
                color="danger"
            >
                <CModalHeader closeButton>
                    <CModalTitle>Modal title</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    Are you sure?
                </CModalBody>
                <CModalFooter>
                    <CButton color="danger" onClick={() => executeDelete(redirectId)}>Delete</CButton>{' '}
                    <CButton color="secondary" onClick={() => setDanger(!danger)}>Cancel</CButton>
                </CModalFooter>
            </CModal>
        </CCard>

    )
}

function mapStateToProps(state) {
    return {
        redirectData: state.redirects,
        redirectMetadata: state.campaigns
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getRedirectData: () => {
            dispatch(redirects.getRedirectData());
        },
        getRedirectsMetadata: () => {
            dispatch(redirects.getCampaignMetaData());
        },
        deleteRedirectData: (redirectId) => {
            dispatch(deleteRedirectsData(redirectId));
        }
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RedirectDomainsList);

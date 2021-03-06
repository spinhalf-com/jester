import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import { redirects, addRedirectsData } from "../../store/actions/redirects";
import { campaigns } from "../../store/actions/campaigns";
import { connect } from "react-redux";
import _ from "lodash";
import config from "../../config/config";
import axios from "axios";
import headers from "../../config/headers";
import {
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CForm,
    CFormGroup,
    CFormText,
    CInput,
    CLabel,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
    CRow
} from "@coreui/react";

const RedirectDomainForm = (props) => {

    const params = useParams();

    const defaultState = {
        name:"",
        url:""
    }

    const defaultSaveState = {
        visible: false,
        color: "success",
        info: []
    }

    const [formState, setFormState] = React.useState(defaultState);
    const [saveState, setSaveState] = React.useState(defaultSaveState);

    useEffect(() => {
        props.getRedirectData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        if(params.id) {
            getRedirectDomain(params.id);
        }
    },[])

    const handleInput = (event) => {
        // console.log(event.target.name)
        setFormState({...formState, [event.target.name] : event.target.value});
    }

    const isValid = () => {
        let validity  = { status: true, info: [] };

        if(_.isEmpty(formState.name)) {
            validity.status = false;
            validity.info.push("Name cannot be empty.")
        }

        return validity;
    }

    const savedStatusSetter = (data = null) => {
        if(!data) {
            setSaveState(defaultSaveState);
        } else {
            setSaveState(data);
        }
    }

    const sanitisePost = (postObj) => {
        _.forEach(postObj, (value, name) => {
            if(value === "") {
                postObj[name] = null;
            }
            if(name === 'ipRange') {
                postObj[name] = JSON.parse(value)
            }
        })
        return postObj;
    }

    const getRedirectDomain = (id) => {
        let getUrl = config.API_URL + config.API_PREFIX + 'redirect/' + id;
        axios.get(getUrl, headers()).then(
            (result) => {
                console.log(result.data)
                setFormState({...formState, ...result.data.data})
            },
            (error) => {
                // savedStatusSetter({
                //     visible: true,
                //     color: "danger",
                //     info: error.response.message
                // })
                console.log(error);
            }
        );
    }

    const formSubmit = () => {
        let validity = isValid(formState);
        if(validity.status) {

            let url = config.API_URL + config.API_PREFIX + 'redirect';
            let method = 'post';

            if(params.id) {
                url = config.API_URL + config.API_PREFIX + 'redirect/' + params.id;
                method = 'put';
            }

            axios[method](url, sanitisePost(formState), headers()).then(
                (result) => {
                    savedStatusSetter({
                        visible: true,
                        color: "success",
                        info: "Record Saved"
                    })
                },
                (error) => {
                    savedStatusSetter({
                        visible: true,
                        color: "danger",
                        info: error.response.message
                    })
                    console.log(error);
                }
            );
        } else {
            savedStatusSetter({
                visible: true,
                color: "warning",
                info: validity.info.length > 0 ? validity.info.map(function (item) { return item }).join("\n") : null,
            })
        }
        console.log(saveState)
    }

    const formClear = () => {
        setFormState(defaultState)
    }

    const gotoList = () => {
        window.location.href = "#/redirects";
    }

    const log = () => {
        console.log(formState)
    }

    return (

        <CRow>
            <CCol xs="12" md="12">
                <CCard>
                    <CCardHeader onMouseOver={() => log()}>
                        Enter Redirect Domains
                    </CCardHeader>
                    <CCardBody>
                        <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="domainName">Redirect Domain Name</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    <CInput
                                        id="name"
                                        name="name"
                                        placeholder=""
                                        className="input-element"
                                        value={formState.name}
                                        type="text"
                                        onChange={(event) => handleInput(event)}
                                    />
                                    <CFormText>Enter unique pixel record name</CFormText>
                                </CCol>
                            </CFormGroup>

                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="domainName">Redirect Domain URL</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    <CInput
                                        id="url"
                                        name="url"
                                        placeholder=""
                                        className="input-element"
                                        value={formState.url}
                                        type="text"
                                        onChange={(event) => handleInput(event)}
                                    />
                                    <CFormText>Enter unique pixel record name</CFormText>
                                </CCol>
                            </CFormGroup>

                        </CForm>

                        <CModal
                            show={saveState.visible}
                            onClose={() => savedStatusSetter()}
                            color={saveState.color}
                        >
                            <CModalHeader closeButton>
                                <CModalTitle>Modal title</CModalTitle>
                            </CModalHeader>
                            <CModalBody>
                                {saveState.info}
                            </CModalBody>
                            <CModalFooter>
                                <CButton color={saveState.color} onClick={() => savedStatusSetter()}>Ok</CButton>{' '}
                                <CButton color={saveState.color} onClick={() => gotoList()}>Go To List</CButton>{' '}
                            </CModalFooter>
                        </CModal>

                    </CCardBody>
                    <CCardFooter>
                        <CButton style={{float: "right", marginLeft: "10px"}} type="submit" size="sm" color="primary"  onClick={() => formSubmit()}><i className="fa fa-dot-circle-o"></i> Submit</CButton>
                        <CButton style={{float: "right", marginLeft: "10px"}} type="reset" size="sm" color="warning" onClick={() => formClear()}><i className="fa fa-ban"></i> Cancel</CButton>
                    </CCardFooter>
                </CCard>
            </CCol>
        </CRow>

    );
}

function mapStateToProps(state) {
    return {
        clientMetaData: state.campaigns
        // campaignMetaData: state.campaignMetaData
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getRedirectData: () => {
            dispatch(redirects.getRedirectData());
        },
        getDomainMetaData: () => {
            dispatch(campaigns.getCampaignMetaData());
        },
        addRedirectsData: (data) => {
            dispatch(addRedirectsData(data));
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RedirectDomainForm);

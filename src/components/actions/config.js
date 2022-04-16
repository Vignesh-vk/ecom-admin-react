import axios from "axios";
// import URL from "../common/api";
import webToken from "../../common/authHeaders";

const LIST_CONFIGURATION           ='LIST_CONFIGURATION';
const ADD_CONFIGURATION            ='ADD_CONFIGURATION';
const DELETE_CONFIGURATION         ='DELETE_CONFIGURATION';
const DELETES_CONFIGURATION         ='DELETES_CONFIGURATION';
const EDIT_CONFIGURATION           ='EDIT_CONFIGURATION';
const VIEW_CONFIGURATION           ='VIEW_CONFIGURATION';
const UPDATE_CONFIGURATION_DATA    ='UPDATE_CONFIGURATION_DATA';



export function AC_LIST_CONFIGURATION(){
    return function(dispatch){
        return axios.get("http://localhost:8000/api/v1/config/addUpdateConfig",webToken)
        .then(({data}) => {
            dispatch({type:LIST_CONFIGURATION,payload:data})
        });
    };
}
export function AC_ADD_CONFIGURATION(configurationData){
    return function(dispatch){
        return axios.post("http://localhost:8000/api/v1/config/addUpdateConfig",configurationData,webToken)
        .then(({data}) => {
           
            dispatch({type:ADD_CONFIGURATION,payload:data})
        });
    };
}
export function AC_EDIT_CONFIGURATION(configurationData){
    return function(dispatch){
        return axios.post("http://localhost:8000/api/v1/config/addUpdateConfig",configurationData,webToken)
        .then(({data}) => {
           
            dispatch({type:EDIT_CONFIGURATION,payload:data})
        });
    };
}
export function AC_DELETE_CONFIGURATION(configurationDeleteData){
    return function(dispatch){
        return axios.post("http://localhost:8000/api/v1/config/addUpdateConfig",configurationDeleteData,webToken)
        .then(({data}) => {
           
            dispatch({type:DELETE_CONFIGURATION,payload:data})
        });
    };
}
export function AC_DELETES_CONFIGURATION(configurationDeletesData){
    return function(dispatch){
        return axios.post("http://localhost:8000/api/v1/config/addUpdateConfig",configurationDeletesData,webToken)
        .then(({data}) => {
           
            dispatch({type:DELETES_CONFIGURATION,payload:data})
        });
    };
}
export function AC_VIEW_CONFIGURATION(formdata){
    return function(dispatch){
        return axios.post("http://localhost:8000/api/v1/config/addUpdateConfig",formdata,webToken)
        .then(({data}) => {
            dispatch({type:VIEW_CONFIGURATION,payload:data})
        });
    };
}
export function AC_HANDLE_INPUT_CHANGE(name,value){
    return function(dispatch){
        // return axios.post("http://localhost:8000/api/v1/faqs/viewFaq")
        // .then(({data}) => {
       
            dispatch({type: UPDATE_CONFIGURATION_DATA, name : name , value : value });
        // });
    };
}
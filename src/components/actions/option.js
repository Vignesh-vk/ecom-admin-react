import axios from "axios";
import config from "../../common/authHeaders";
const ADD_OPTION   = "ADD_OPTION";
const LIST_OPTIONS  = "LIST_OPTIONS";
const EDIT_OPTION   = "EDIT_OPTION";
const DELETE_OPTION = "DELETE_OPTION";
const VIEW_OPTION   = "VIEW_OPTION";
const UPDATE_OPTION_DATA   = "UPDATE_OPTION_DATA";


export function AC_ADD_OPTION(formData) {
    return function (dispatch) {
        axios.post("http://localhost:8000/api/v1/newsletters/addUpdatenewsletter", formData,config)
            .then(({ data }) => {
                dispatch({ type: ADD_OPTION, payload: data });
                console.log("=-=-=action-=-",data);
            });
    }
}
export function AC_LIST_OPTIONS() {
    return function (dispatch) {
        axios.get("http://localhost:8000/api/v1/newsletters/addUpdatenewsletter",config)
            .then(({ data }) => {
                dispatch({ type: LIST_OPTIONS, payload: data });
                console.log("=-=-=action-=-",data);
            }); 
            
    }
}
export function AC_EDIT_OPTION(formData) {
    return function (dispatch) {
        axios.post("http://localhost:8000/api/v1/options/addUpdateOption", formData,config)
            .then(({ data }) => {
                dispatch({ type:EDIT_OPTION, payload: data });
            });
    }
}
export function AC_DELETE_OPTION(formData) {
    return function (dispatch) {
        axios.post("http://localhost:8000/api/v1/newsletters/addUpdatenewsletter", formData,config)
            .then(({ data }) => {
                dispatch({ type: DELETE_OPTION, payload: data });
            });
    }
}
export function AC_VIEW_OPTION(formData) {
    return function (dispatch) {
        axios.post("http://localhost:8000/api/v1/newsletters/addUpdatenewsletter", formData,config)
            .then(({ data }) => {
                dispatch({ type: VIEW_OPTION, payload: data });
            });
    }
}
export function AC_HANDLE_INPUT_CHANGE_OPT(name,value) {
    console.log("-==-name=-=",name);
    console.log("-==-value=-=",value);
    return function (dispatch) {
        dispatch({ type: UPDATE_OPTION_DATA, name:name, value:value });
        
    }
}

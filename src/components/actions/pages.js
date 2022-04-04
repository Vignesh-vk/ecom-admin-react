import axios from "axios";
import config from "../../common/authHeaders";
const LIST_PAGE = 'LIST_PAGE';
const ADD_PAGE = 'ADD_PAGE';
const DELETE_PAGE = 'DELETE_PAGE';
const VIEW_PAGE='VIEW_PAGE'
const UPDATE_PAGE='UPDATE_PAGE'
export function AC_ADD_PAGE(userData) {
    console.log('======Add page======', userData)
    return function (dispatch) {
        return axios.post("http://localhost:8000/api/v1/pages/addUpdatePage", userData,config)
            .then(({ data }) => {
                dispatch({ type: ADD_PAGE, payload: data })
            });
    };
}
export function AC_LIST_PAGE() {
    return function (dispatch) {
        return axios.get("http://localhost:8000/api/v1/pages/listPages",config)
            .then(({ data }) => {
                console.log('=====List page====', data)
                dispatch({ type: LIST_PAGE, payload: data })
            });

    }
}
export function AC_DELETE_PAGE(formdata){
    console.log('===-=-=action -=-=-',formdata)
    return function(dispatch){
        return axios.post("http://localhost:8000/api/v1/pages/deletePage",formdata,config)
        .then(({data}) => {
           
            dispatch({type:DELETE_PAGE,payload:data})
        });
    };
}
export function AC_VIEW_PAGE(formdata){
    console.log('===-=-=action -=-=-',formdata)
    return function(dispatch){
        return axios.post("http://localhost:8000/api/v1/pages/viewPage",formdata,config)
        .then(({data}) => {
            dispatch({type:VIEW_PAGE,payload:data})
        });
    };
}
export function AC_HANDLE_INPUT_CHANGE(name,value){
    return function(dispatch){
            dispatch({type:UPDATE_PAGE, name:name, value:value})
    };
}
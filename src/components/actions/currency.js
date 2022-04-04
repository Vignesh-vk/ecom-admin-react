import axios from "axios";
import config from "../../common/authHeaders";
const LIST_CURRENCY = 'LIST_CURRENCY';
const ADD_CURRENCY = 'ADD_CURRENCY';
const DELETE_CURRENCY='DELETE_CURRENCY';
const VIEW_CURRENCY='VIEW_CURRENCY'
const UPDATE_CURRENCY='UPDATE_CURRENCY'
export function AC_ADD_CURRENCY(userData) {
    console.log('======Add CURRENCY=========', userData)
    return function (dispatch) {
        return axios.post("http://localhost:8000/api/v1/currency/addUpdateCurrency", userData,config)
            .then(({ data }) => {
                dispatch({ type: ADD_CURRENCY, payload: data })
            });
    };
}

export function AC_LIST_CURRENCY() {
    return function (dispatch) {
        return axios.get("http://localhost:8000/api/v1/currency/listCurrencies",config)
            .then(({ data }) => {
                console.log('=======List CURRENCY========',data)
                dispatch({ type: LIST_CURRENCY, payload: data })
            });
    }
}
export function AC_DELETE_CURRENCY(formdata){
    console.log('===-=-=action -=-=-',formdata)
    return function(dispatch){
        return axios.post("http://localhost:8000/api/v1/currency/deleteCurrency",formdata,config)
        .then(({data}) => {
           
            dispatch({type:DELETE_CURRENCY,payload:data})
        });
    };
}
export function AC_VIEW_CURRENCY(formdata){
    console.log('===-=-=action -=-=-',formdata)
    return function(dispatch){
        return axios.post("http://localhost:8000/api/v1/currency/viewCurrency",formdata,config)
        .then(({data}) => {
            dispatch({type:VIEW_CURRENCY,payload:data})
        });
    };
}
export function AC_HANDLE_INPUT_CHANGE(name,value){
    return function(dispatch){
            dispatch({type:UPDATE_CURRENCY, name:name, value:value})
    };
}
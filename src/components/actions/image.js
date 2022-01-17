import axios from "axios";
const ADD_IMAGE = 'ADD_IMAGE';
const LIST_IMAGE='LIST_IMAGE'
// const ADD_FAQ = 'ADD_FAQ';
// const DELETE_FAQ='DELETE_FAQ'
// const VIEW_FAQ='VIEW_FAQ'
// const UPDATE_FAQ='UPDATE_FAQ'
export function AC_ADD_IMAGE(userData) {
    console.log('======Add Faq=========', userData)
    return function (dispatch) {
        return axios.post("http://localhost:8000/api/v1/image/uploadImage", userData)
            .then(({ data }) => {
                dispatch({ type: ADD_IMAGE, payload: data })
            });
    };
}
export function AC_LIST_IMAGE(userData) {
    console.log('======Add Faq=========', userData)
    return function (dispatch) {
        return axios.get("http://localhost:8000/api/v1/image/listImage", userData)
            .then(({ data }) => {
                dispatch({ type: LIST_IMAGE, payload: data })
            });
    };
}
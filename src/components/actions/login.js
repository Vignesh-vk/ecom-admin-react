import axios from "axios";
const CHECK_LOGIN="CHECK_LOGIN"
export function AC_LOGIN(formData) {
    return function (dispatch) {
       return axios.post("http://localhost:8000/api/v1/login/isLogin", formData)
            .then(({ data}) => {
                if(data.status==1){
                    localStorage.setItem("token",data.token)
                    window.location="/"
                    dispatch({type:CHECK_LOGIN, payload:data});
                }else{
                    dispatch({type:CHECK_LOGIN, payload:data});
                }
            });
    }
}
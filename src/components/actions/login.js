import axios from "axios";
// import URL from "../../common/api";
export function AC_LOGIN(formData) {
    return function (dispatch) {
       return axios.post("http://localhost:8000/api/v1/login/isLogin", formData)
            .then(({ data }) => {
                if(data.status==1){
                    localStorage.setItem("token",data.token)
                    window.location="/"
                }
            });
    }
}
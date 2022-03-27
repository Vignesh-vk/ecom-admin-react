const intialState = {
    loginInfo : []
}
function loginReducer(state = intialState, action) {
    console.log("-=-reducer=-=-",action)
    switch (action.type) {
        case 'AC_LOGIN':
            return {
                ...state,
                loginInfo: action.payload
            }
            break;
        default:
            return state;
            break;
    }
}
export default loginReducer;
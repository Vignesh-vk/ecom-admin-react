const initialState = {
    configList: [],
    configAdd: [],
    configDelete:[],
    configInfo:{
      name:'',
      slug:'',
      description:'',
      status:''
    }
  }
  function CONFIGURATION_Reducer(state = initialState, action) {
    console.log("-=-=-=Reducer=-=-=", action)
    switch (action.type) {
      case 'LIST_CONFIGURATION':
        return {
          ...state,
          configList: action.payload.data
        };
      case 'ADD_CONFIGURATION':
        return {
          ...state,
          configAdd: action.payload
        };
      case 'DELETE_CONFIGURATION':
        return {
          ...state,
          configDelete: action.payload
  
        };
        break;
        case 'VIEW_CONFIGURATION':
          return {
            ...state,
            configInfo: action.payload
          };
        case 'EDIT_CONFIGURATION':
          return {
            ...state,
            editConfig: action.payload
          }
          break;
        case 'UPDATE_CONFIGURATION':
          return Object.assign({},state,{
            configInfo : {
              ...state.configInfo,
              [action.name] : action.value
            }
          })
      default: return state;
    }
  }
  export default CONFIGURATION_Reducer;
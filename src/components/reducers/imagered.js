const initialState = {
    imageList: [],
    imageAdd: [],
    // countryDelete:[],
    // countryInfo:{
    //   name:'',
    //   code:'',
    //   status:''
    // }
  }
  function IMAGE_Reducer(state = initialState, action) {
    console.log("-=-=-=Reducer=-=-=", action)
    switch (action.type) {
      case 'ADD_IMAGE':
        return {
          ...state,
          imageAdd: action.payload
        };
        case 'LIST_IMAGE':
        return {
          ...state,
          imageList: action.payload
        };
      default: return state;
    }
  }
  export default IMAGE_Reducer;
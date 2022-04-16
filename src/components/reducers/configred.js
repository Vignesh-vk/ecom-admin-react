const initialState={
  configurationList : [],
  configurationAdd : [],
  configurationEdit:[],
  configurationDelete:[],
  configurationDeletes:[],
  configurationInfo:{
      name : '',
      slug : '',
      description : '',
      status:'',
      id : ''
  }
}
function Configuration_Reducer(state=initialState,action){
  switch(action.type){
      case 'LIST_CONFIGURATION':
          return{
              ...state,
              configurationList:action.payload.data
              
          };
          break;
          case 'EDIT_CONFIGURATION':
              return{
                  ...state,
                  configurationEdit:action.payload
                  
              };
          case 'ADD_CONFIGURATION':
              return{
                  ...state,
                  configurationAdd:action.payload
                  
              };
              break;
          case 'DELETE_CONFIGURATION':
                  return{
                      ...state,
                      configurationDelete:action.payload
                      
                  };
                  break;
          case 'DELETES_CONFIGURATION':
          return{
              ...state,
              configurationDeletes:action.payload
              
          };
          break;
          case 'VIEW_CONFIGURATION':
              
              return{
                  
                  ...state,
                  configurationInfo:action.payload
              };

              
          case 'UPDATE_CONFIGURATION_DATA':
                      return Object.assign({},state, {
                          configurationInfo : {
                              ...state.configurationInfo,
                              [action.name] : action.value
                          }
                      })        
      
                  default:return state;
                  break;          
          
  }
}
export default  Configuration_Reducer
const intialState = {
    addOption    : [],
    listOptions  : [],
    editOption   : [],
    deleteOption : [],
    optionInfo : {
        conid : '',
        name      : '',
        slug        : '',
        description : '',
        status: '',
        id          : ''
    }
}
function optionsReducer(state = intialState, action) {
    console.log("-=-reducer=-=-",action)
    switch (action.type) {
        case 'ADD_OPTION':
            return {
                ...state,
                addOption: action.payload
            }
            break;
        case 'LIST_OPTIONS':
            return {
                ...state,
                listOptions: action.payload.data
            }
            break;
        case 'EDIT_OPTION':
            return {
                ...state,
                editOption: action.payload
            }
            break;
        case 'DELETE_OPTION':
            return {
                ...state,
                deleteOption: action.payload
            }
            break;
        case 'VIEW_OPTION':
            return {
                ...state,
                optionInfo: action.payload
            }
            break;
            case 'UPDATE_OPTION_DATA':
            return Object.assign({},state,{
                optionInfo : {
                    ...state.optionInfo,
                    [action.name] : action.value
                }
            })
        default:
            return state;
            break;
    }
}
export default optionsReducer;


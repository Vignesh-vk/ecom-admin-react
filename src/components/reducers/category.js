const intialState = {
    addImage: [],
    listImages: [],
    deleteImage: [],
    imageInfo: {
        category: '',
        filename: '',
        status: '',
        id: ''
    },
    editImage: {
        category: '',
        filename: '',
        status: '',
        id: ''
    }
}
function imagesReducer(state = intialState, action) {
    console.log("-=-reducer=-=-", action)
    switch (action.type) {
        case 'ADD_IMAGE':
            return {
                ...state,
                addImage: action.payload
            }
            break;
        case 'LIST_IMAGES':
            return {
                ...state,
                listImages: action.payload.data
            }
            break;
        case 'EDIT_IMAGE':
            return {
                ...state,
                editImage: action.payload.data
            }
            break;
        case 'DELETE_IMAGES':
            return {
                ...state,
                deleteImage: action.payload
            }
            break;
        case 'VIEW_IMAGE':
            return {
                ...state,
                imageInfo: action.payload.data
            }
            break;
        default:
            return state;
            break;
    }
}
export default imagesReducer;


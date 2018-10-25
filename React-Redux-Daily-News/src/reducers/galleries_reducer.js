export default function (state = {}, action) {
    switch (action.type) {
        case 'GET_GALLERY':
            return ({ ...state, showGallery: action.payload })
        case 'SELECTED_GALLERY':
            return ({ ...state, selected: action.payload })
        case 'CLEARSELECTED_GALLERY':
            return ({ ...state, selected: action.payload })
        case "HANDLE_LIKES_GALLERY":
            return ({ ...state, selected: [action.payload] })
        default:
            return state;
    }
}
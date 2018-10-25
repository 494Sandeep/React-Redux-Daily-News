export default function (state = {}, action) {
    switch (action.type) {
        case 'GET_LATEST':
            return ({ ...state, latest: action.payload })
        case 'GET_OTHER':
            return ({ ...state, other: action.payload })
        case 'SELECTED_NEWS':
            return ({ ...state, selected: action.payload })
        case 'CLEARSELECTED_NEWS':
            return ({ ...state, selected: action.payload })
        case "HANDLE_LIKES_ARTICLES":
            return ({ ...state, selected: [action.payload] })
        default:
            return state;
    }
}
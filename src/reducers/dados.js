import { GET_ALL_DATA, SAVE_DATA } from '../actions/dados'
import Slide from '../components/Slide';

function dados (state = {}, action) {
    switch (action.type) {
        case GET_ALL_DATA :
        return {
            ...state,
            ...action.data,
        }
        case SAVE_DATA :
        return {
            ...state,
            [action.slide.id]: { id: action.slide.id, value: action.value }
        }
        default :
            return state
    }
}
 export default dados
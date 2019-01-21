import { GET_ALL_DATA, } from '../actions/dados'

function dados (state = {}, action) {
    switch (action.type) {
        case GET_ALL_DATA :
        return {
            ...state,
            ...action.data,
        }
        default :
            return state
    }
}
 export default dados
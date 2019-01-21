import { saveData, getAllData, getData } from '../utils/api'

export const GET_ALL_DATA = 'GET_ALL_DATA'
export const SAVE_DATA = 'SAVE_DATA'
export const GET_DATA = 'GET_DATA'

// GET ALL DECKS
export function handlerGetAllDados() {
    return dispatch => {
        return getAllData()
            .then((data) => {
                dispatch(getAllDataAction(data))
            })
            .catch(erro => console.log(erro))
    }
}

function getAllDataAction(data) {
    return { 
        type: GET_ALL_DATA,
        data
    }
}
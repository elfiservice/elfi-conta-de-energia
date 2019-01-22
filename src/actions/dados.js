import { saveData, getAllData, } from '../utils/api'

export const GET_ALL_DATA = 'GET_ALL_DATA'
export const SAVE_DATA = 'SAVE_DATA'
export const GET_DATA = 'GET_DATA'

// GET ALL Data
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

//SAVE DATA
export function handlerSaveData(slide, value) {
    return dispatch => {
        return saveData(slide, value)
            .then(() => {
                dispatch(setData(slide, value))
            })
            .catch(erro => console.log(erro))
    }
}

function setData(slide, value) {
    return { 
        type: SAVE_DATA,
        slide,
        value
    }
}
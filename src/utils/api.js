import { AsyncStorage } from 'react-native'

const CONTA_DE_ENERGIA_STORAGE_KEY = 'ContaDeEnergia:key'

export function saveData(slide, value) {

    return AsyncStorage.getItem(CONTA_DE_ENERGIA_STORAGE_KEY)
    .then((results) => {
        const datas = JSON.parse(results)
        
        const data = !datas ? null : datas[slide.id]
        console.log(slide.id, value, data);
        if(!data) {
            const newData = {
                id: slide.id,
                value
            }
            return AsyncStorage.mergeItem(CONTA_DE_ENERGIA_STORAGE_KEY, JSON.stringify({
                [slide.id]: newData
            }))
        } else {
            data.value = value
            return AsyncStorage.mergeItem(CONTA_DE_ENERGIA_STORAGE_KEY, JSON.stringify({
                [slide.id]: data
            }))
        }

    })


}

export function getData(slide) {
    return AsyncStorage.getItem(CONTA_DE_ENERGIA_STORAGE_KEY)
    .then((results) => {
        const data = JSON.parse(results)
        if(!data) {
            return false
        }
        return data[slide.id]
    })
}

export function getAllData() {
    return AsyncStorage.getItem(CONTA_DE_ENERGIA_STORAGE_KEY)
    .then((results) => {
        const data = JSON.parse(results)
        if(!data) {
            return false
        }
        return data
    })
}

export function clearStorage() {
    AsyncStorage.clear()
}
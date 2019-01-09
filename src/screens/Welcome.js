import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Slides from '../components/Slides'

const SLIDE_DATA = [
    { text: 'Dia Fechamento Conta' },
    { text: 'Leitura Anterior da sua Conta Energia'},
    { text: 'Valor da Tarifa de Energia atual'},
]

class Welcome extends Component {
    render() {
        return (
            <Slides data={SLIDE_DATA} />
        )
    }
}

export default Welcome
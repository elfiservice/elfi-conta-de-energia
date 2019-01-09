import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { blue, white, red } from '../utils/colors'

import Slides from '../components/Slides'

const SLIDE_DATA = [
    { text: 'Dia Fechamento Conta', color: blue },
    { text: 'Leitura Anterior da sua Conta Energia', color: red},
    { text: 'Valor da Tarifa de Energia atual', color: blue},
]

class Welcome extends Component {
    render() {
        return (
            <Slides data={SLIDE_DATA} />
        )
    }
}

export default Welcome
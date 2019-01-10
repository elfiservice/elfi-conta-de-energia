import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { blue, white, red } from '../utils/colors'

import Slides from '../components/Slides'

const SLIDE_DATA = [
    { id: 1, text: 'Dia Fechamento da Fatura', color: blue },
    // { id: 2, text: 'Leitura Anterior da ultima Conta Energia', color: red},
    // { id: 3, text: 'Valor da Tarifa da ultima conta de Energia', color: blue},
]

class Welcome extends Component {
    onSlidesComplete = () => {
        this.props.navigation.navigate('main')
    }
    render() {
        return (
            <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
        )
    }
}

export default Welcome
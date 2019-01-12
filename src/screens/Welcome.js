import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { blue, white, red } from '../utils/colors'

import Slides from '../components/Slides'

const SLIDE_DATA = [
    { id: 1, key: 'Dia', text: 'Dia Fechamento da Fatura', color: blue, info: 'Na sua última conta de energia, na seção Datas - Data de Apresentação' },
    { id: 2, key: 'Leitura Anterior',  text: 'Leitura Anterior da última Conta de Energia', color: red, info: 'Na sua última conta de energia, na seção Informações Sobre o Faturamento do Consumo - Leit. Anterior' },
    { id: 3, key: 'Valor da Tarifa',  text: 'Valor da Tarifa da última Conta de Energia', color: blue, info: 'Na sua última conta de energia, na seção Informações Sobre o Faturamento do Consumo - Tarifa (R$/kWh)' },
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
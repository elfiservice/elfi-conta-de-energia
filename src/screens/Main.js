import React, { Component } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, ScrollView } from 'react-native'
import DadosDaConta from '../components/DadosDaConta'
import CalcularEnergia from '../components/CalcularEnergia'
import MostrarResultado from '../components/MostrarResultado'
import { numberToReal } from '../utils/helpers';
import { connect } from 'react-redux'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = { dados: undefined, resultado: '' }
    }
    _calculate = (leituraAtual) => {
        if(this.props.dados) {
            const { dados } = this.props
            const leituraAnterior = dados['2'].value
            const tarifa = dados['3'].value
            const diffDasLeituras = leituraAtual - leituraAnterior
            const resultado = diffDasLeituras * tarifa
            this.setState({ resultado: numberToReal(resultado) })
        }
    }
    render() {
        return (
            <ScrollView style={styles.container}  >
                <DadosDaConta data={this.props.dados} />
                <CalcularEnergia calculate={this._calculate} />
                <MostrarResultado resultado={this.state.resultado} />
           </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60,
        paddingRight: 20,
        paddingLeft: 20,
    },
});

function mapStateToProps ({ dados }) {
    return {
        dados
    }
}

export default connect(mapStateToProps)(Main)
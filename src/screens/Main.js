import React, { Component } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, ScrollView } from 'react-native'
import DadosDaConta from '../components/DadosDaConta'
import CalcularEnergia from '../components/CalcularEnergia'
import MostrarResultado from '../components/MostrarResultado'
import { getAllData } from '../utils/api' 
import { numberToReal } from '../utils/helpers';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = { dados: undefined, resultado: '' }
    }
    componentDidMount() {
        //toDo: pegar dados do STATE ( usar REDUX ) conectar componente
        getAllData()
            .then( data => {
                this.setState({ dados: data })
            })
    }
    _calculate = (leituraAtual) => {
        if(this.state.dados) {
            const { dados } = this.state
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
                <DadosDaConta data={this.state.dados} />
                <CalcularEnergia calculate={this._calculate} />
                <MostrarResultado resultado={this.state.resultado} />
           </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        paddingRight: 20,
        paddingLeft: 20,
    },
});

export default Main
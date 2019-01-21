import React, { Component } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, ScrollView } from 'react-native'
import DadosDaConta from '../components/DadosDaConta'
import CalcularEnergia from '../components/CalcularEnergia'
import MostrarResultado from '../components/MostrarResultado'
import { getAllData } from '../utils/api' 

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = { dados: undefined, resultado: '' }
    }
    componentDidMount() {
        //toDo: atualizar os DADOS quando os dados forem atualizados pelo Usuario ( usar REDUX )
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
            const resultado = (diffDasLeituras * tarifa).toFixed(2)
            //const resultado = Math.round(diffDasLeituras * tarifa)
            this.setState({ resultado })
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
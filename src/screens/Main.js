import React, { Component } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'
import DadosDaConta from '../components/DadosDaConta'
import CalcularEnergia from '../components/CalcularEnergia'
import { getAllData } from '../utils/api'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = { dados: undefined }
    }
    componentDidMount() {
        //todo: fazer o Get do localstorage dos dados ( passar esses dados para DadosDaConta compt )
        getAllData()
            .then( data => {
                // console.log(data);
                this.setState({ dados: data })
            })
    }
    _calculate = (leituraAtual) => {
        //todo: fazer a conta final do calculo do valor da conta de energia ( passar essa funcao para CalcularEnergia compt )
        // const { dados } = this.state
        if(this.state.dados) {
            const { dados } = this.state
            const leituraAnterior = dados['2'].value
            const tarifa = dados['3'].value
            const diffDasLeituras = leituraAtual - leituraAnterior
            const resultado = diffDasLeituras * tarifa
            console.log(resultado);
        }
        
        
    }
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled >
                <DadosDaConta data={this.state.dados} />
                <CalcularEnergia calculate={this._calculate} />

           </KeyboardAvoidingView>
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
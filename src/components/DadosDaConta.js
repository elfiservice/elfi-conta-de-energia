import React, { Component } from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { blue, red } from '../utils/colors'

const { height, width } = Dimensions.get('window')

class DadosDaConta extends Component {
    render() {
        return (
            <View style={styles.dadosContainer}>
                <View style={[styles.dadosContent, styles.border]}>
                    <Text style={styles.dadoTitulo}>Dia fehcamento da Conta</Text>
                    <Text style={styles.dado}>00</Text>
                </View>
                <View style={[styles.dadosContent, styles.border]}>
                    <Text style={styles.dadoTitulo}>Leitura Anterior</Text>
                    <Text style={styles.dado}>000000</Text>
                </View>
                <View style={[styles.dadosContent, styles.lastDadosContent]}>
                    <Text style={styles.dadoTitulo}>Tarifa Atual</Text>
                    <Text style={styles.dado}>0,000</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    dadosContainer: {
        flex: 2,
        flexDirection: 'row',
        maxHeight: 150,
    },
    dadosContent: {
        justifyContent: 'center',
        alignItems: 'center',
        width: (width - 25) / 3,
        paddingRight: 5,
        paddingLeft: 5,
    },
    border: {
        borderRightWidth: 1,
        borderColor: blue,  
    },
    lastDadosContent: {
        paddingRight: 0,
    },
    dado: {
       fontWeight: "700",
       fontSize: 20,
       color: red,
    },
    dadoTitulo: {
        // paddingBottom: 20
        minHeight: 80,
        color: blue,
        fontSize: 16,
    },
});

export default DadosDaConta
import React, { Component } from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')

class Main extends Component {
    render() {
        return (
            // todo: fazer essa tela
           <View style={styles.container}>
               <View style={styles.dadosContainer}>
                    <View style={[styles.dadosContent, styles.border]}>
                        <Text style={styles.dadoTitulo}>Dia fehcamento da Conta</Text>
                        <Text style={styles.dado}>00</Text>
                    </View>
                    <View style={[styles.dadosContent, styles.border]}>
                        <Text style={styles.dadoTitulo}>Leitura Anterior</Text>
                        <Text>000000</Text>
                    </View>
                    <View style={[styles.dadosContent, styles.lastDadosContent]}>
                        <Text style={styles.dadoTitulo}>Tarifa Atual</Text>
                        <Text>0,000</Text>
                    </View>
               </View>
               <View style={styles.calcularContainer}>

               </View>

           </View>
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
    dadosContainer: {
        flex: 2,
        flexDirection: 'row'
    },
    dadosContent: {
        // justifyContent: 'center',
        alignItems: 'center',
        width: (width - 25) / 3,
        paddingRight: 5,
        paddingLeft: 5,
    },
    border: {
        borderRightWidth: 1,
    },
    lastDadosContent: {
        paddingRight: 0,
    },
    calcularContainer: {
        flex: 3,
    },
    dado: {
       
    },
    dadoTitulo: {
        paddingBottom: 20
    }
});

export default Main
import React, { Component } from 'react'
import { StyleSheet, Text, View, Alert } from 'react-native'
import { blue } from '../utils/colors';

class MostrarResultado extends Component {
    _showResult(resultado) {
        Alert.alert(`O valor da sua conta de energia neste momento é de aproximadamente R$ ${resultado}`)
        return resultado
    }
    render() {
        const { resultado } = this.props
        return (
           <View style={styles.container}>
               <Text style={styles.content}> R$ {resultado !== '' ? this._showResult(resultado) : '________'} </Text>
           </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        padding: 20,
        fontSize: 30,
        width: 250,
        textAlign: 'center',
        color: blue,
    },
});


export default MostrarResultado
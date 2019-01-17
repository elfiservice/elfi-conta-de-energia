import React, { Component } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'
import DadosDaConta from '../components/DadosDaConta'
import CalcularEnergia from '../components/CalcularEnergia'

class Main extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled >
                <DadosDaConta />
                <CalcularEnergia />

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
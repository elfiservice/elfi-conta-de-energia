import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Keyboard, Alert } from 'react-native'
import { gray, white, green } from '../utils/colors';
import { Button } from 'react-native-elements'

class CalcularEnergia extends Component {
    constructor(props) {
        super(props)
        this.state = { dado: '' }
    }
    _calculate = () => {
        //todo> chamar funcao no Main Compt passando o dado da Leitura do medidor
        Alert.alert('Calculando,...')
        this.props.calculate(this.state.dado)
    }
    render() {
        return (
            <View style={styles.form}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(dado) => this.setState({dado})}
                    value={this.state.dado}
                    placeholder={`Leitura do medidor aqui`}
                    placeholderTextColor='#ccc'
                    keyboardType={'number-pad'}
                />
                <Button
                    title="Calcular"
                    icon={{name: 'done'}}
                    raised
                    buttonStyle={styles.doneBtn}
                    onPress={this._calculate}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    doneBtn: {
        backgroundColor: green,
        marginTop: 20,
    },
    form: {
        flex: 3,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: gray,
        padding: 20,
        backgroundColor: white,
        fontSize: 20,
        width: 200,
        textAlign: 'center'
    },
});

export default CalcularEnergia
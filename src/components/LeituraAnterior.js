import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { green, white, red, gray } from '../utils/colors'
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

class LeituraAnterior extends Component {
    constructor(props) {
        super(props)
        this.state = { leitura: '' }
    }
    _save = () => {
        alert('salvando leitura ...')
    }
    render() {
        return (
           <View style={styles.container}>
               <View style={styles.header} >
                    <Text style={styles.slideText}> {this.props.slide.text} </Text>       
               </View>
               <View style={styles.form}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(leitura) => this.setState({leitura})}
                        value={this.state.leitura}
                        placeholder='Entre com a leitura'
                        placeholderTextColor='#ccc'
                        keyboardType='number-pad'
                    />
                    <Button
                        title="Salvar"
                        icon={{name: 'done'}}
                        raised
                        buttonStyle={styles.doneBtn}
                        onPress={this._save}
                    />
               </View>
           </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        
    },
    header: {
        paddingLeft: 30,
        paddingRight: 30
    },
    doneBtn: {
        backgroundColor: green,
        marginTop: 20,
    },
    slideText: {
        fontSize: 30,
        color: white,
        textAlign: 'center'
    },
    form: {
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

export default LeituraAnterior
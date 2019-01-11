import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableHighlight } from 'react-native'
import { green, white, red, gray } from '../utils/colors'
import { Button } from 'react-native-elements'
import { FontAwesome } from '@expo/vector-icons'
import ModalInfo from './ModalInfo'

class LeituraAnterior extends Component {
    constructor(props) {
        super(props)
        this.state = { leitura: '', modalVisible: false }
    }
    _save = () => {
        alert('salvando leitura ...')
    }
    _setModalVisible = (visible) => {
        this.setState({modalVisible: visible});
    }
    render() {
        const { slide } = this.props
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled >
               <View style={styles.header} >
                    <Text style={styles.slideText}> {slide.text} </Text>       
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
               <ModalInfo 
                    slide={slide} 
                    modalVisible={this.state.modalVisible} 
                    setModalVisible={this._setModalVisible} 
                />
                <TouchableHighlight
                    style={styles.infoBtn}
                    onPress={() => { this._setModalVisible(true) }}
                >
                    <FontAwesome name='question-circle' size={50} color={white} />
                </TouchableHighlight>
           </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        paddingLeft: 30,
        paddingRight: 30
    },
    doneBtn: {
        backgroundColor: green,
        marginTop: 20,
    },
    infoBtn: {
        marginTop: 40,
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
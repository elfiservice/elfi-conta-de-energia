import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableHighlight, Alert } from 'react-native'
import { green, white, red, gray } from '../utils/colors'
import { Button } from 'react-native-elements'
import { FontAwesome } from '@expo/vector-icons'
import ModalInfo from './ModalInfo'
import { saveData, getData } from '../utils/api'
import { connect } from 'react-redux'

class Slide extends Component {
    constructor(props) {
        super(props)
        this.state = { dado: '', modalVisible: false }
    }
    componentDidMount() {
        this.setState({ dado: this.props.dado.value })
    }
    _save = () => {
        //todo: criar Action para salvar dado
        saveData(this.props.slide, this.state.dado)
            .then(() => {
                Alert.alert(`Salvo o valor ${this.state.dado} com sucesso!`)
            })
            .catch(err => {
                Alert.alert(`Ops! Ocorreu um erro ao tentar salvar, favor tentar novamente! grato`)
            })
    }
    
    _setModalVisible = (visible) => {
        this.setState({modalVisible: visible});
    }
  
    render() {
        const { slide } = this.props
        console.log(this.props.dado);
        
        return (
           <KeyboardAvoidingView style={styles.container} behavior="padding" enabled >
               <View style={styles.header} >
                    <Text style={styles.slideText}> {slide.text} </Text>       
               </View>
               <View style={styles.form}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(dado) => this.setState({dado})}
                        value={this.state.dado}
                        placeholder={`${slide.key} aqui`}
                        placeholderTextColor='#ccc'
                        keyboardType={slide.id === 3 ? 'decimal-pad' : 'number-pad'}
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        paddingLeft: 30,
        paddingRight: 30
    },
    doneBtn: {
        backgroundColor: green,
        marginTop: 0,
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
        textAlign: 'center',
        marginBottom: 20,
    },
});

function mapStateToProps ({ dados }, { slide }) {
    let dadoDoSlide = dados[slide.id]
    if(!dadoDoSlide) {
        dadoDoSlide = { id: slide.id, value: '' }
    }
    return {
        dado: dadoDoSlide
    }
}

export default connect(mapStateToProps)(Slide)
import React, { Component } from 'react'
import { StyleSheet, Text, View, Modal, TouchableHighlight } from 'react-native'

class ModalInfo extends Component {
    render() {
        const { slide, modalVisible, setModalVisible } = this.props
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}
            >
                <View style={{marginTop: 22}}>
                    <View>
                    <Text>{slide.info}</Text>

                    <TouchableHighlight
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}>
                        <Text>Fechar</Text>
                    </TouchableHighlight>
                    </View>
                </View>
            </Modal>
        )
    }
}

export default ModalInfo
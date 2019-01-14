import React, { Component } from 'react'
import { StyleSheet, Text, View, Modal, TouchableHighlight } from 'react-native'
import { blue, red } from '../utils/colors';

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
                <View style={styles.container}>
                    <View>
                        <Text style={styles.text}>{slide.info}</Text>
                    </View>
                    <View style={styles.btn}>
                        <TouchableHighlight
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}>
                            <Text style={styles.textBtn}>Fechar</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 22,
        padding: 30
    },
    text: {
        fontSize: 25,
        color: blue,
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    textBtn: {
        fontSize: 20,
        color: red,
    }
});

export default ModalInfo
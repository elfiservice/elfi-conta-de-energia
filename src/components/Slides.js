import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import { blue, white, red } from '../utils/colors'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { handlerGetAllDados } from '../actions/dados'

import Slide from './Slide'

const SCREEN_WIDTH_DEVICE = Dimensions.get('window').width;

class Slides extends Component {
    constructor(props) {
        super(props)
        this.state = { loading: true }
    }
    componentDidMount() {
        this.props.handlerGetAllDados()
            .then( res => {
                this.setState({ loading: false })
            })
    }
    _renderSlides = () => {
        return this.props.slidesDataInfos.map( (slide, index) => (
            <View key={index} style={[styles.slide, { backgroundColor: slide.color }]} >
                <Slide slide={slide} />
                {this._renderLastSlide(index)}
            </View>
        ))
    }
    _renderLastSlide = (index) => {
        if(index === this.props.slidesDataInfos.length - 1) {
            return (
                <Button
                    title="Concluido!"
                    raised
                    buttonStyle={styles.doneBtn}
                    onPress={this.props.onComplete}
                />
            )
        }
    }
    render() {
        return (
            <ScrollView
                horizontal
                style={{ flex: 1 }}
                pagingEnabled
            >
                {this.state.loading ? false : this._renderSlides()}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH_DEVICE,
    },
    doneBtn: {
        backgroundColor: red,
        marginTop: 20,
        marginBottom: 20,
    }
});

export default connect(null, { handlerGetAllDados })(Slides)  
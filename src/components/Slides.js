import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import { blue, white, red } from '../utils/colors'
import { Button } from 'react-native-elements'

const SCREEN_WIDTH_DEVICE = Dimensions.get('window').width;

class Slides extends Component {
    _renderSlides = () => {
        console.log(this.props.data);
        
        return this.props.data.map( (slide, index) => (
            <View key={index} style={[styles.slide, { backgroundColor: slide.color }]} >
                <Text style={styles.slideText}>{slide.text}</Text>
                {this._renderLastSlide(index)}
            </View>
        ))
    }
    _renderLastSlide = (index) => {
        if(index === this.props.data.length - 1) {
            return (
                <Button
                    title="Concluido!"
                    raised
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
                {this._renderSlides()}
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
    slideText: {
        fontSize: 20,
        color: white
    }
});

export default Slides
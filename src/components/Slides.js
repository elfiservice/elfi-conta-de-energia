import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import { blue, white, red } from '../utils/colors'

const SCREEN_WIDTH_DEVICE = Dimensions.get('window').width;

class Slides extends Component {
    renderSlides = () => {
        console.log(this.props.data);
        
        return this.props.data.map( (slide, index) => (
            <View key={index} style={[styles.slide, { backgroundColor: slide.color }]} >
                <Text style={styles.slideText}>{slide.text}</Text>
            </View>
        ))
    }
    render() {
        return (
            <ScrollView
                horizontal
                style={{ flex: 1 }}
                pagingEnabled
            >
                {this.renderSlides()}
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
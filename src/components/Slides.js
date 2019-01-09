import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

class Slides extends Component {
    renderSlides = () => {
        console.log(this.props.data);
        
        return this.props.data.map( (slide, index) => (
            <View key={index} style={styles.slide} >
                <Text style={styles.slideText}>{slide.text}</Text>
            </View>
        ))
    }
    render() {
        return (
            <ScrollView
                horizontal
                style={{ flex: 1 }}
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
    },
    slideText: {
        fontSize: 20
    }
});

export default Slides
import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import { blue, white, red } from '../utils/colors'
import { Button } from 'react-native-elements'

// import DiaFechamentoFatura from './DiaFechamentoFatura'
// import LeituraAnterior from './LeituraAnterior'
// import TarifaAtual from './TarifaAtual'
import Slide from './Slide'

const SCREEN_WIDTH_DEVICE = Dimensions.get('window').width;

class Slides extends Component {
    _renderSlides = () => {
        console.log(this.props.data);
        
        return this.props.data.map( (slide, index) => (
            <View key={index} style={[styles.slide, { backgroundColor: slide.color }]} >
                {/* {this._selectSlide(slide)} */}
                <Slide slide={slide} />
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
                    buttonStyle={styles.doneBtn}
                    onPress={this.props.onComplete}
                />
            )
        }
    }
    _selectSlide(slide) {
        switch (slide.id) {
            case 1: 
                return <DiaFechamentoFatura slide={slide} />
                break;
            case 2: 
                return <LeituraAnterior slide={slide} />
                break;
            case 3: 
                return <TarifaAtual slide={slide} />
                break;
        
            default:
                return <DiaFechamentoFatura slide={slide} />
                break;
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
    doneBtn: {
        backgroundColor: red,
        marginTop: 20,
        marginBottom: 20,
    }
});

export default Slides
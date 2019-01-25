import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ABOUT_DATA = {
    description: 'Está aplicação é uma ferramenta para lhe ajudar a calcular quanto esta custando sua Conta de Energia HOJE.',
    company: 'AJuda Na Web',
    website: 'ajudanaweb.com.br',
    developer: 'Armando Jr. (AJ)',
    partner: 'Elfi Service Eletricidade Ltda.',
    support: 'elfiservice@gmail.com', 
    contact: '', 
    youtube: 'elfiservice', 
    instagram: 'elfiservice', 
    linkedin: 'armando-junior-elfiservice/'
}


class About extends Component {
    render() {
        return (
           <View>
               <Text> {ABOUT_DATA.description} </Text>
           </View>
        )
    }
}



export default About
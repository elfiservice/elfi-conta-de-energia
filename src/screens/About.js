import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HyperLink from '../components/HyperLink'
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { red } from '../utils/colors';

const ABOUT_DATA = {
    description: 'Está aplicação é uma ferramenta para lhe ajudar a calcular quanto esta custando sua Conta de Energia HOJE.',
    company: 'AJuda Na Web',
    website: 'https://ajudanaweb.com.br',
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
           <View style={styles.container}>
                <View style={[styles.content]}>
                    <Text style={[styles.texts]}> {ABOUT_DATA.description} </Text>
                </View>
                <View style={[styles.content]}>
                    <Text style={[styles.texts, styles.headLine]}> Desenvolvido por </Text>
                </View>
                <View style={[styles.content]}>
                    <Text style={[styles.texts]}> {ABOUT_DATA.developer} </Text>
                </View>
                <View style={[styles.content]}>
                    <HyperLink 
                        url={ABOUT_DATA.website} 
                        title={'ajudanaweb.com.br'} 
                        customStyle={{ fontSize: 16, padding: 10 }}
                    />
                </View>
                <View style={[styles.social]}>
                    <View style={[styles.content]}>
                        <HyperLink 
                            url={`https://www.youtube.com/${ABOUT_DATA.youtube}`} 
                            title={<FontAwesome name='youtube' size={30} /> } 
                            customStyle={{ fontSize: 16, padding: 10 }}
                        />
                    </View>
                    <View style={[styles.content]}>
                        <HyperLink 
                            url={`https://www.instagram.com/${ABOUT_DATA.instagram}`} 
                            title={<FontAwesome name='instagram' size={30} /> } 
                            customStyle={{ fontSize: 16, padding: 10 }}
                        />
                    </View>
                    <View style={[styles.content]}>
                        <HyperLink 
                            url={`https://www.linkedin.com/in/${ABOUT_DATA.linkedin}`} 
                            title={<FontAwesome name='linkedin' size={30} /> } 
                            customStyle={{ fontSize: 16, padding: 10 }}
                        />
                    </View>
                </View>
                <View style={[styles.content]}>
                    <Text style={[styles.texts, styles.headLine]}> Suporte/Sugestões </Text>
                </View>
                <View style={[styles.content]}>
                    <HyperLink 
                        url={`mailto:${ABOUT_DATA.support}?subject=Suporte/Sugestões para Elfi Conta de Energia App&body=Desde já grato pelo seu contato :)`} 
                        title={ABOUT_DATA.support} 
                        customStyle={{ fontSize: 16, padding: 10 }}
                    />
                </View>
                <View style={[styles.content]}>
                    <Text style={[styles.texts, styles.headLine]}> Parceiro </Text>
                </View>
                <View style={[styles.content]}>
                    <Text style={[styles.texts]}> {ABOUT_DATA.partner} </Text>
                </View>
                <View style={[styles.content]}>
                    <HyperLink 
                        url={'https://elfiservice.com.br'} 
                        title={'elfiservice.com.br'} 
                        customStyle={{ fontSize: 16, padding: 10 }}
                    />
                </View>             
           </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    content: {
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    texts: {
        textAlign: 'center',
        fontSize: 16,
    },
    headLine: {
        fontWeight: 'bold',
    },
    social: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default About
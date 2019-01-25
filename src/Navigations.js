import React, { Component } from 'react'
import { Platform, Text, View } from 'react-native'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import WelcomeScreen from './screens/Welcome'
import MainScreen from './screens/Main'
import AboutScreen from './screens/About'
import { gray, white, blue } from './utils/colors';
//todo: Add nova screen para informações do Desenvolvedor
const routeConfig = {
    welcome: {
        screen: WelcomeScreen,     
        navigationOptions: { 
            tabBarVisible: false,
            tabBarLabel: 'Dados',
            tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='cards' size={30} color={tintColor} /> 
        } 
    },
    main: {
        screen: createBottomTabNavigator({
            MainScreen: {
                screen: MainScreen,     
                navigationOptions: { 
                    tabBarVisible: false
                } 
            }
        }),
        navigationOptions: { 
            tabBarLabel: 'Calcular',
            tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='currency-usd' size={30} color={tintColor} /> 
        }  
    },
    about: {
        screen: createBottomTabNavigator({
            AboutScreen: {
                screen: AboutScreen,     
                navigationOptions: { 
                    tabBarVisible: false
                } 
            }
        }),
        navigationOptions: { 
            tabBarLabel: 'Sobre',
            tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='more' size={30} color={tintColor} /> 
        }  
    },
}

const TabNavigatorConfig = {
    navigationOptions: {
        header: null
    },
    tabBarOptions: {
        activeTintColor: Platform.OS === 'ios' ? white : white,
        style: {
            height: Platform.OS === 'ios' ? 56 : 56,
            paddingTop: Platform.OS === 'ios' ? 0 : 0,
            backgroundColor: Platform.OS === 'ios' ? blue : blue,
            shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 1,
        },
    },
};

const MainNavigator = createBottomTabNavigator(routeConfig, TabNavigatorConfig)

export default createAppContainer(MainNavigator)
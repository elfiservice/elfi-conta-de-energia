import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'

import WelcomeScreen from './screens/Welcome'
import MainScreen from './screens/Main'


const MainNavigator = createBottomTabNavigator({
    welcome: { screen: WelcomeScreen },
    main: { 
        screen: createBottomTabNavigator({
            MainScreen: { screen: MainScreen }
        })  
    }
})

    


export default createAppContainer(MainNavigator)
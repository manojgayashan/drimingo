import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import CommanStyles from './src/styles/CommanStyles'
import { NavigationContainer } from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MyStack from './src/routes/StackNavigator'

export default function App() {
  useEffect(() => {
    SplashScreen.hide()
  }, [])
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
       <MyStack/>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}
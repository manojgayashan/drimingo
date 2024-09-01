import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import CommanStyles from './src/styles/CommanStyles'
import { NavigationContainer } from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MyStack from './src/routes/StackNavigator'
import messaging from '@react-native-firebase/messaging'

export default function App() {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

    useEffect(() => {
      const unsubscribe = messaging().onMessage(async remoteMessage => {
        console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
      });
  
      return unsubscribe;
    }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
       <MyStack/>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}
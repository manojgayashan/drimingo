import { View, Text } from 'react-native'
import React from 'react'
import CommanStyles from '../styles/CommanStyles'

export default function Footer() {
  return (
    <View style={CommanStyles.center}>
      <Text style={CommanStyles.font12Gray}>© Drimingo 2023 - V 1.001 </Text>
    </View>
  )
}
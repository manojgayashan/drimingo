import { View, Text } from 'react-native'
import React from 'react'
import CommanStyles from '../styles/CommanStyles'

export default function Header({
    title,
    leftIcon,
    rightIcon
}) {
  return (
    <View style={CommanStyles.header}>
        <View style={CommanStyles.headerInner}>
        {
            leftIcon?leftIcon:null
        }
      <Text style={CommanStyles.font18}>{title}</Text>
      {
        rightIcon?rightIcon:null
      }            
        </View>

    </View>
  )
}
import { View, Text } from 'react-native'
import React from 'react'
import CommanStyles from '../styles/CommanStyles'
import Colors from '../styles/Colors'

export default function Header({
    title,
    leftIcon,
    rightIcon,
    tabs
}) {
  return (
    <View style={[CommanStyles.header,{borderColor:tabs?Colors.dgo_white_600:Colors.dgo_black_400}]}>
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
import { View, Text } from 'react-native'
import React from 'react'
import CommanStyles from '../styles/CommanStyles'

export default function Progress({
    progress,
    color,
    unFilledColor
}) {
    let progressValue = (progress)*0.5
  return (
    <View style={[CommanStyles.progressView,{backgroundColor:unFilledColor}]}>
      <View style={[CommanStyles.progressBar,{backgroundColor:color,width:progressValue}]} />
    </View>
  )
}
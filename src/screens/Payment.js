import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import DgoButton from '../components/DgoButton'
import CommanStyles from '../styles/CommanStyles'

export default function Payment() {
    const navigation = useNavigation()
  return (
    <View style={[CommanStyles.onbordingContainer,CommanStyles.caroasalScrollContent]}>
            <StatusBar translucent backgroundColor={'transparent'} barStyle={'light-content'} />

      <DgoButton
                                title='Continue'
                                width='full'
                                accent='white'
                                buttonRadius='rectangle-round'
                                buttonType='filled'
                                borderWidth={2}
                                onPress={()=>{navigation.navigate('SignUp')}}
                                />
    </View>
  )
}
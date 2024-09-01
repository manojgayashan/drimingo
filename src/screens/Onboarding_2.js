import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import CommanStyles from '../styles/CommanStyles'
import DgoButton from '../components/DgoButton'
import Colors from '../styles/Colors'
import Feather from 'react-native-vector-icons/Feather';
import Onboarding2Cards from '../assets/arrays/Onboarding2Cards'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable';

export default function Onboarding_2() {
  const navigation = useNavigation()
  return (
    <View style={CommanStyles.blackContainer}>
      <Image source={require('../assets/images/onboarding_2_bg.png')} style={StyleSheet.absoluteFill} />
      <View style={CommanStyles.onboardingContainer}>
        <View style={CommanStyles.center}>
          <Text style={CommanStyles.onboardingTitle}>Comprehensive guides{'\n'}with everything{'\n'}you need to know</Text>
          <Animatable.Image animation={'zoomIn'} source={require('../assets/images/photo_group.png')} style={CommanStyles.photoGroup} />

        </View>

        <Animatable.View animation={'fadeInDown'} style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
          {
            Onboarding2Cards.map((data, index) => {
              return (
                <View style={CommanStyles.onboarding2Cards} key={index}>
                  {
                    index == 2 || index == 5 ?
                      <AntDesign name={data.icon} size={16} color={Colors.dgo_blue_200} />
                      :
                      <Feather name={data.icon} size={16} color={Colors.dgo_blue_200} />
                  }
                  <Text style={[CommanStyles.font12, { paddingLeft: 10 }]}>{data.text}</Text>
                </View>
              )
            })
          }
        </Animatable.View>
        <View style={CommanStyles.center}>
          <DgoButton
            title='Next'
            rightIcon={<Feather name={'chevron-right'} size={20} color={Colors.dgo_white_600} />}
            buttonRadius='round'
            buttonType='line'
            borderWidth={2}
            width='free'
            accent='white'
            onPress={()=>navigation.navigate('Onboarding_3')}
          />
        </View>
      </View>
    </View>
  )
}
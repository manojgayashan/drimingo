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

export default function Onboarding_3() {
  const navigation = useNavigation()
  return (
    <View style={CommanStyles.blackContainer}>
      <Image source={require('../assets/images/onboarding_3_bg.png')} style={StyleSheet.absoluteFill} />
      <View style={CommanStyles.onboardingContainer}>
        <View style={CommanStyles.center}>
          <Text style={CommanStyles.onboardingTitle}>Explore, pick and build{'\n'}your own itinerary</Text>
          <Animatable.Text animation={'zoomIn'} style={[CommanStyles.onboardingSubTitle,{padding:40}]}>Explore and find the most amazing travel destinations in Sri Lanka, pick the ones you love the most and Drimingo will automatically create an itinerary for you.</Animatable.Text>
        </View>
        <Animatable.Image animation={'fadeInDown'} source={require('../assets/images/onboarding_3_image.png')} style={CommanStyles.onboarding3Image}/>
        <View style={CommanStyles.center}>
          <DgoButton
            title='Next'
            rightIcon={<Feather name={'chevron-right'} size={20} color={Colors.dgo_white_600} />}
            buttonRadius='round'
            buttonType='line'
            borderWidth={2}
            width='free'
            accent='white'
            onPress={()=>navigation.navigate('Onboarding_4')}
          />
        </View>
      </View>
    </View>
  )
}
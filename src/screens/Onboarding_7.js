import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import CommanStyles from '../styles/CommanStyles'
import DgoButton from '../components/DgoButton'
import Colors from '../styles/Colors'
import Feather from 'react-native-vector-icons/Feather';
import Onboarding2Cards from '../assets/arrays/Onboarding2Cards'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native'
import DgoTextInput from '../components/DgoTextInput'
import * as Animatable from 'react-native-animatable';

const windowWidth = Dimensions.get("window").width;

export default function Onboarding_7() {
  const navigation = useNavigation()
  const [email, setEmail] = useState('')

  return (
    <View style={CommanStyles.blackContainer}>
      <Image source={require('../assets/images/onboarding_7_bg.png')} style={StyleSheet.absoluteFill} />
      <View style={CommanStyles.onboardingContainer}>
        <View style={CommanStyles.center}>
          <Text style={[CommanStyles.onboardingSubTitle]}>Let’s Personalise{'\n'}Your Drimingo Experience</Text>
          <Animatable.Text animation={'zoomIn'} style={[CommanStyles.onboardingTitleSmall, { paddingTop: 100,marginBottom:0 }]}>Share your Email with Us</Animatable.Text>
          <Animatable.View animation={'fadeInDown'}>
                        <DgoTextInput
                            value={email}
                            onChangeText={setEmail}
                            icon={<Feather name="mail" size={20} color={Colors.dgo_black_200} />}
                            placeHolder={'name@email.com'}
                            isCurrect={null}
                        />
                        <Text style={[CommanStyles.onboardingSubTitle500,{paddingTop:15}]}>We will let you know about deals exclusive for {'\n'}Drimingo customers.</Text>
            
            </Animatable.View>
        </View>

        <View style={CommanStyles.center}>
          <Text style={[CommanStyles.whiteFont12,{textAlign:'center',paddingBottom:15}]}>We promise not to spam you.{'\n'}Drimingo values the peace of mind.</Text>
          <DgoButton
            title='Continue'
            rightIcon={<Feather name={'chevron-right'} size={20} color={Colors.dgo_white_600} />}
            buttonRadius='round'
            buttonType='line'
            borderWidth={2}
            width='free'
            accent='white'
            onPress={() => navigation.navigate('Payment')}
          />
          <DgoButton
            title='Skip for Now'
            buttonRadius='round'
            buttonType='line'
            width='free'
            accent='white'
            onPress={() => navigation.navigate('Payment')}
          />
        </View>
      </View>
    </View>
  )
}
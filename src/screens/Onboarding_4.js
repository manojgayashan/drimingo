import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import CommanStyles from '../styles/CommanStyles'
import DgoButton from '../components/DgoButton'
import Colors from '../styles/Colors'
import Feather from 'react-native-vector-icons/Feather';
import Onboarding2Cards from '../assets/arrays/Onboarding2Cards'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable';

const windowWidth = Dimensions.get("window").width;

export default function Onboarding_4() {
  const navigation = useNavigation()
  const [answer, setAnswer] = useState(1)
  return (
    <View style={CommanStyles.blackContainer}>
      <Image source={require('../assets/images/onboarding_4_bg.png')} style={StyleSheet.absoluteFill} />
      <View style={CommanStyles.onboardingContainer}>
        <View style={CommanStyles.center}>
          <Text style={[CommanStyles.onboardingSubTitle]}>Let’s Personalise{'\n'}Your Drimingo Experience</Text>
          <Animatable.Text animation={'zoomIn'} style={[CommanStyles.onboardingTitleSmall,{paddingVertical:100}]}>Is it your first time{'\n'}traveling to Sri Lanka?</Animatable.Text>

        <Animatable.View animation={'fadeInDown'} style={{width:windowWidth-80}}>
        <DgoButton
            title='Yes, its my first time'
            icon={<Text></Text>}
            accent='white'
            // width='full'
            buttonType={answer==1?'filled':'line'}
            borderWidth={answer==1?0:2}
            buttonRadius='rectangle-round'
            rightIcon={answer==1?<AntDesign name={'checkcircle'} size={16} color={Colors.dgo_blue_200} />:<Text></Text>}
            onPress={()=>setAnswer(1)}
          />

        <DgoButton
            title='No, I have been before'
            icon={<Text></Text>}
            accent='white'
            // width='full'
            buttonType={answer==2?'filled':'line'}
            borderWidth={answer==2?0:2}
            buttonRadius='rectangle-round'
            rightIcon={answer==2?<AntDesign name={'checkcircle'} size={16} color={Colors.dgo_blue_200} />:<Text></Text>}
            onPress={()=>setAnswer(2)}
          />
</Animatable.View>
        </View>

        <View style={CommanStyles.center}>
          <DgoButton
            title='Continue'
            rightIcon={<Feather name={'chevron-right'} size={20} color={Colors.dgo_white_600} />}
            buttonRadius='round'
            buttonType='line'
            borderWidth={2}
            width='free'
            accent='white'
            onPress={()=>navigation.navigate('Onboarding_5')}
          />
        </View>
      </View>
    </View>
  )
}
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import CommanStyles from '../styles/CommanStyles'
import DgoButton from '../components/DgoButton'
import Colors from '../styles/Colors'
import Feather from 'react-native-vector-icons/Feather';
import Onboarding2Cards from '../assets/arrays/Onboarding2Cards'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'
import Onboarding6Data from '../assets/arrays/Onboarding6Data'
import * as Animatable from 'react-native-animatable';

const windowWidth = Dimensions.get("window").width;

export default function Onboarding_6() {
  const navigation = useNavigation()
  const [answer, setAnswer] = useState([])
  const [key, setKey] = useState(1)
  const [animation, setAnimation] = useState('fadeInDown')

  const onSelectAnswer=(a)=>{
    let array = answer
    if(answer.includes(a)){
      let index = answer.indexOf(a)
      array.splice(index, 1)
    }
    else{
      array.push(a)
    }
    setAnimation(null)
    setKey(key+1)
    setAnswer(array)
  }
  return (
    <View style={CommanStyles.blackContainer}>
      <Image source={require('../assets/images/onboarding_6_bg.png')} style={StyleSheet.absoluteFill} />
      <View style={CommanStyles.onboardingContainer}>
        <View style={CommanStyles.center}>
          <Text style={[CommanStyles.onboardingSubTitle]}>Let’s Personalise{'\n'}Your Drimingo Experience</Text>
          <Animatable.Text animation={'zoomIn'} style={[CommanStyles.onboardingTitleSmall, { paddingVertical: 100 }]}>What would you like to{'\n'}experience in Sri Lanka?</Animatable.Text>

          <Animatable.View animation={animation} key={key} style={{ width: windowWidth - 80,flexDirection:'row',flexWrap:'wrap',justifyContent:'center' }}>
            {
              Onboarding6Data.map((data,index)=>{
                return(
                  <View key={index} style={{marginHorizontal:7}}>
                  <DgoButton
                  
                  title={data.text}
                  icon={<View style={{paddingVertical:4}}>{answer.includes(data.id)?<Ionicons name={'checkbox'} size={20} color={Colors.dgo_blue_200} />:<Ionicons name={'square-outline'} size={20} color={Colors.dgo_black_300} />}</View>}
                  accent='white'
                  width={windowWidth/3}
                  buttonType={'filled'}
                  buttonRadius={'rectangle-round-small'}
                  titleTextSize={12}
                  rightIcon={<Text></Text>}
                  onPress={() => onSelectAnswer(data.id)}
                />
                </View>
                )
              })
            }
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
            onPress={() => navigation.navigate('Onboarding_7')}
          />
        </View>
      </View>
    </View>
  )
}
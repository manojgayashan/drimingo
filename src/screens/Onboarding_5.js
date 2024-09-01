import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import CommanStyles from '../styles/CommanStyles'
import DgoButton from '../components/DgoButton'
import Colors from '../styles/Colors'
import Feather from 'react-native-vector-icons/Feather';
import Onboarding2Cards from '../assets/arrays/Onboarding2Cards'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native'
import { Slider } from '@miblanchard/react-native-slider';
import * as Animatable from 'react-native-animatable';

const windowWidth = Dimensions.get("window").width;

export default function Onboarding_5() {
  const navigation = useNavigation()
  const [duration, setDuration] = useState(1)
  return (
    <View style={CommanStyles.blackContainer}>
      <Image source={require('../assets/images/onboarding_5_bg.png')} style={StyleSheet.absoluteFill} />
      <View style={CommanStyles.onboardingContainer}>
        <View style={CommanStyles.center}>
          <Text style={[CommanStyles.onboardingSubTitle]}>Let’s Personalise{'\n'}Your Drimingo Experience</Text>
          <Animatable.Text animation={'zoomIn'} style={[CommanStyles.onboardingTitleSmall, { paddingVertical: 100 }]}>For how long are you planning{'\n'}to stay in Sri Lanka?</Animatable.Text>

          <Animatable.View animation={'fadeInDown'} style={{ width: windowWidth - 40,paddingTop:10 }}>
            <View style={CommanStyles.card}>
              <View style={CommanStyles.cardHeader}>
                <Text style={CommanStyles.font16Gray}>Duration : </Text>
                <Text style={CommanStyles.font16}>
                  {
                    duration<4?duration+' week'+(duration>1?'s':'')
                    :
                    (duration==8?"6+":duration>=7?duration-1:duration-3)+" month"+(duration>4?"s":'')
                  }
                  </Text>
              </View>
              <View style={{paddingVertical:25}}>
                <View style={[CommanStyles.row,CommanStyles.spaceBetweenRow]}>
                  <View style={{alignItems:'center'}}>
                    <Text style={CommanStyles.font12Gray}>1W</Text>
                    <View style={CommanStyles.verticalLine12} />
                  </View>
                  <View style={{alignItems:'center'}}>
                    <Text style={CommanStyles.font12Gray}>2W</Text>
                    <View style={CommanStyles.verticalLine12} />
                  </View>
                  <View style={{alignItems:'center'}}>
                    <Text style={CommanStyles.font12Gray}>3W</Text>
                    <View style={CommanStyles.verticalLine12} />
                  </View>
                  <View style={{alignItems:'center'}}>
                    <Text style={CommanStyles.font12Gray}>1M</Text>
                    <View style={CommanStyles.verticalLine12} />
                  </View>
                  <View style={{alignItems:'center'}}>
                    <Text style={CommanStyles.font12Gray}>2M</Text>
                    <View style={CommanStyles.verticalLine12} />
                  </View>
                  <View style={{alignItems:'center'}}>
                    <Text style={CommanStyles.font12Gray}>3M</Text>
                    <View style={CommanStyles.verticalLine12} />
                  </View>
                  <View style={{alignItems:'center'}}>
                    <Text style={CommanStyles.font12Gray}>6M</Text>
                    <View style={CommanStyles.verticalLine12} />
                  </View>
                  <View style={{alignItems:'center'}}>
                    <Text style={CommanStyles.font12Gray}>6+</Text>
                    <View style={CommanStyles.verticalLine12} />
                  </View>
                </View>
              <Slider
                    value={duration}
                    onValueChange={value => setDuration(value)}
                    minimumValue={1}
                    maximumValue={8}
                    step={1}
                    thumbTintColor={Colors.dgo_blue_200}
                    thumbStyle={{borderWidth:1,borderColor:Colors.dgo_white_600,height:16,width:16}}
                    trackStyle={{height:8,borderRadius:4}}
                    minimumTrackStyle={{backgroundColor:Colors.dgo_blue_200}}
                    maximumTrackStyle={{backgroundColor:Colors.dgo_black_400}}
                />
                </View>
                <View style={CommanStyles.cardFooter}>
                  <Text style={CommanStyles.font12}>Please adjust the slider to mark the duration.</Text>
                </View>
            </View>
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
            onPress={() => navigation.navigate('Onboarding_6')}
          />
        </View>
      </View>
    </View>
  )
}
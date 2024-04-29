import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native'
import React from 'react'
import Colors from '../styles/Colors';
import CommanStyles from '../styles/CommanStyles';

import AntDesign from 'react-native-vector-icons/AntDesign';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type accentType = 'primary' | 'white' | 'black' | 'gray';
type widthType = 'full' | 'half' | 'free';
type buttonRadiusType = 'rectangle-round' | 'round';
type buttonTypesType = 'filled' | 'line';
type buttonSizeType = 'small' | 'normal' | 'larg';

type PropsTypes = {
  title: string;
  accent: accentType;
  onPress: any;
  disabled: boolean;
  width: widthType;
  buttonType: buttonTypesType;
  icon: any;
  buttonSize: buttonSizeType;
  titleTextSize: number;
  rightIcon: any;
  buttonRadius: buttonRadiusType;
  borderWidth: number;
  isPicker:boolean;
  pickerOpen:boolean;
  placeHolder:string
};

export default function DgoButton(props: PropsTypes) {

  const accentColor =
    props.accent == 'primary' ? Colors.dgo_blue_200 :
      props.accent == 'white' ? Colors.dgo_white_600 :
        props.accent == 'black' ? Colors.dgo_black_100 :
          props.accent == 'gray' ? Colors.dgo_black_400 :
            Colors.dgo_blue_100

  const textColor =
    props.accent == 'primary' ? Colors.dgo_white_600 :
      props.accent == 'white' ? Colors.dgo_black_100 :
        props.accent == 'black' ? Colors.dgo_white_600 :
          Colors.dgo_blue_100

  const buttonWidth =
    props.width == 'full' ? windowWidth - 40 :
      props.width == 'half' ? windowWidth / 2 :
        props.width == 'free' ? null : props.width

  const buttonRadius =
    props.buttonRadius == 'rectangle-round' ? 8 :
      props.buttonRadius == 'round' ? 50 : 0


  const styles = StyleSheet.create({
    buttonView: {
      backgroundColor: props.buttonType == 'filled' ? accentColor : 'transparent',
      borderWidth: props.borderWidth ? props.borderWidth : 0,
      borderColor: accentColor,
      borderRadius: buttonRadius,
      width: buttonWidth,
      paddingHorizontal:props.title || props.isPicker? 16:0 ,
      paddingVertical: props.title || props.isPicker? 14:0,
      alignItems: 'center',
      marginVertical: 0,
      flexDirection: 'row',
      zIndex: 5,
      justifyContent: props.isPicker?'space-between': 'center',
      alignSelf: 'center',
      marginTop: props.title || props.isPicker? 10: 0,
      marginRight: props.buttonSize == 'small' ? 5 : props.title? 10:0,
      marginBottom:props.title || props.isPicker?7:0
    },
    buttonText: {
      color: props.buttonType=='filled'? textColor:props.accent=='gray'?props.isPicker?Colors.dgo_black_300:Colors.dgo_black_100: accentColor,
      fontSize: props.titleTextSize ? props.titleTextSize : 16,
      fontWeight: '500',
      textAlign: 'center',
      marginRight: props.rightIcon ? 5 : 0,
      marginLeft:0
    },


  })


  return (
    <TouchableOpacity style={styles.buttonView} onPress={props.onPress} disabled={props.disabled}>
      <View style={CommanStyles.row}>
      {props.icon ? props.icon : null}
      {
        props.isPicker?
        props.title==''?
        <Text style={styles.buttonText}>{props.placeHolder}</Text>
        :
        <Text style={[styles.buttonText,{color:Colors.dgo_black_100}]}>{props.title}</Text>
        :
        <Text style={styles.buttonText}>{props.title}</Text>
      }
      
      </View>
      {props.rightIcon ? props.rightIcon : null}
      {props.isPicker?
      props.pickerOpen?
<AntDesign name="up" size={20} color={Colors.dgo_black_200} />
:
<AntDesign name="down" size={20} color={Colors.dgo_black_200} />
:
null
    }
    </TouchableOpacity>
  )
}

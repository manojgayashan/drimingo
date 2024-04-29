import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import CommanStyles from '../styles/CommanStyles'
import DgoButton from './DgoButton'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../styles/Colors';

export default function DgoTextInput({
    title,
    icon,
    value,
    onChangeText,
    placeHolder,
    secureTextEntry,
    isPassword,
    isCurrect
}) {
    const [showPw, setShowPw] = useState(true)
    return (
        <View style={CommanStyles.textInputParent}>
            <Text style={CommanStyles.font14}>{title}</Text>
            <View style={CommanStyles.textInputView}>
                {
                    icon ? icon : null
                }
                <TextInput
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeHolder}
                    secureTextEntry={isPassword?showPw?true:false:false}
                    style={CommanStyles.textInput}
                    placeholderTextColor={Colors.dgo_black_300}
                />
                {
                    isPassword ?
                        showPw ?
                            <DgoButton icon={<Ionicons name="eye-off-sharp" size={20} color={Colors.dgo_black_200} />} onPress={()=>setShowPw(false)} />
                            :
                            <DgoButton icon={<Ionicons name="eye-sharp" size={20} color={Colors.dgo_black_200} />} onPress={()=>setShowPw(true)}  />
                        :
                        null
                }
                {
                    isCurrect == null ?
                        isPassword ?
                            null :
                            <AntDesign name="check" size={20} color={Colors.dgo_black_300} /> :
                        isCurrect == true ?
                            <AntDesign name="check" size={20} color={Colors.dgo_black_300} /> :
                            <AntDesign name="closecircle" size={20} color={Colors.dgo_red_100} />

                }
            </View>

        </View>
    )
}
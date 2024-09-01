import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CommanStyles from '../../styles/CommanStyles'
import DgoButton from '../../components/DgoButton'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../../styles/Colors';
import DgoTextInput from '../../components/DgoTextInput';

export default function SignIn({ navigation,onClose,animation,joinNowBottomSheetRef,forgotPasswordBottomSheetRef }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <View style={CommanStyles.appContainer}>
            <View style={CommanStyles.row}>
                <DgoButton 
                // onPress={onClose} 
                onPress={()=>navigation.goBack()}
                icon={<AntDesign name="close" size={20} color={Colors.dgo_black_100} />} />
                <Text style={[CommanStyles.font18,{paddingLeft:10}]}>Sign In with Email</Text>
            </View>
            <View>
                <View style={CommanStyles.innerContainer}>
                    <View>
                        <View style={CommanStyles.row}>
                            <Text style={CommanStyles.primaryTitle22}>Welcome Back!</Text>
                            <Image source={require('../../assets/images/login-welcome-md.png')} style={[CommanStyles.mediumIcon,{marginLeft:30}]} />
                        </View>
                        <DgoTextInput
                            value={email}
                            onChangeText={setEmail}
                            title={'Your Email'}
                            icon={<Feather name="mail" size={20} color={Colors.dgo_black_200} />}
                            placeHolder={'name@email.com'}
                            isCurrect={null}
                        />
                        <DgoTextInput
                            value={password}
                            onChangeText={setPassword}
                            title={'Your Password'}
                            icon={<Feather name="lock" size={20} color={Colors.dgo_black_200} />}
                            placeHolder={'Password'}
                            isPassword={true}
                        />
                        <TouchableOpacity onPress={()=>{animation();forgotPasswordBottomSheetRef.current.snapToIndex(0)}}>
                        <Text style={[CommanStyles.blueFont14, { textAlign: 'right', paddingVertical: 10 }]}>Forgot password?</Text>
                        </TouchableOpacity>

                        <DgoButton
                            title='Sign In'
                            accent='primary'
                            buttonType='filled'
                            width='full'
                            buttonRadius='rectangle-round'
                            onPress={()=>navigation.navigate('Home')}
                        />
                        <Text style={[CommanStyles.font12Gray, { marginTop: 10, textAlign: 'center' }]}>By signing in, you agree to Drimingo Pvt Ltd's <Text style={{ color: Colors.dgo_blue_200 }}>Terms & Conditions</Text> and <Text style={{ color: Colors.dgo_blue_200 }}>Privacy Policy</Text>.</Text>
                    </View>
                    <View>
                        <Text style={[CommanStyles.font14,{textAlign:'center',paddingVertical:5}]}>Not a Member yet?</Text>
                        <DgoButton
                            title='Join Now'
                            accent='primary'
                            buttonRadius='rectangle-round'
                            buttonType='line'
                            borderWidth={2}
                            width='full'
                            onPress={()=>{animation();joinNowBottomSheetRef.current.snapToIndex(0)}}
                            
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}
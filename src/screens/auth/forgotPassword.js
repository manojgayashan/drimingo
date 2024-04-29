import { View, Text, Image, TouchableOpacity, Platform } from 'react-native'
import React, { useState } from 'react'
import CommanStyles from '../../styles/CommanStyles'
import DgoButton from '../../components/DgoButton'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../../styles/Colors';
import DgoTextInput from '../../components/DgoTextInput';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import PasswordStrengthData from '../../assets/arrays/PasswordStrengthData';
import * as Animatable from 'react-native-animatable';

export default function ForgotPassword({ onClose, animation, joinNowBottomSheetRef }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordStrength, setPasswordStrength] = useState(0)
    const [confirmPassword, setConfirmPassword] = useState('')
    const [step, setStep] = useState(1)
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: 6 });
    const [step3Key, setStep3Key] = useState(1)

    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const reset=()=>{
        setEmail('')
        setConfirmPassword('')
        setPassword('')
        setValue('')
        setPasswordStrength(0)
        setStep(1)
        onClose()
    }
    return (
        <View style={CommanStyles.appContainer}>
            {
                step == 1 ?
                    <>
                        <View style={CommanStyles.row}>
                            <DgoButton onPress={onClose} icon={<AntDesign name="close" size={20} color={Colors.dgo_black_100} />} />
                            <Text style={CommanStyles.font18}>Forgot Password?</Text>
                        </View>
                        <View>
                            <View style={CommanStyles.innerContainer}>
                                <View>
                                    <Text style={CommanStyles.font12}>Enter your registered email down below to start the password rest process. We’ll send you reset code via email.</Text>
                                    <DgoTextInput
                                        value={email}
                                        onChangeText={setEmail}
                                        title={'Registered email'}
                                        icon={<Feather name="mail" size={20} color={Colors.dgo_black_200} />}
                                        placeHolder={'name@email.com'}
                                        isCurrect={null}
                                    />

                                    <DgoButton
                                        title='Continue'
                                        accent='black'
                                        buttonRadius='rectangle-round'
                                        buttonType='filled'
                                        borderWidth={2}
                                        width='full'
                                        onPress={()=>setStep(2)}
                                    />
                                </View>
                                <View>


                                </View>
                                <View>
                                    <Text style={[CommanStyles.font14, { textAlign: 'center', paddingVertical: 5 }]}>Not a Member yet?</Text>
                                    <DgoButton
                                        title='Join Now'
                                        accent='primary'
                                        buttonRadius='rectangle-round'
                                        buttonType='line'
                                        borderWidth={2}
                                        width='full'
                                        onPress={() => { animation(); joinNowBottomSheetRef.current.snapToIndex(0) }}
                                    />
                                </View>

                            </View>
                        </View>
                    </>
                    :
                    step == 2 ?
                        <>
                            <View style={CommanStyles.row}>
                                <DgoButton onPress={onClose} icon={<AntDesign name="close" size={20} color={Colors.dgo_black_100} />} />
                                <Text style={CommanStyles.font18}>Forgot Password?</Text>
                            </View>
                            <Animatable.View animation={'fadeInUp'}>
                                <View style={CommanStyles.innerContainer}>
                                    <View>
                                        <Text style={[CommanStyles.font12, { paddingVertical: 5,marginBottom:10 }]}>You'll receive a temporary reset code via email. Please enter it below to update your password.</Text>
                                        <Text style={CommanStyles.font14}>Verification Code</Text>
                                        <CodeField
                                            ref={ref}
                                            {...props}
                                            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                                            value={value}
                                            onChangeText={setValue}
                                            cellCount={6}
                                            rootStyle={CommanStyles.codeFieldRoot}
                                            keyboardType="number-pad"
                                            textContentType="oneTimeCode"
                                            autoComplete={Platform.select({ android: 'sms-otp', default: 'one-time-code' })}
                                            testID="my-code-input"
                                            renderCell={({ index, symbol, isFocused }) => (
                                                <Text
                                                    key={index}
                                                    style={[CommanStyles.cell, isFocused && CommanStyles.focusCell]}
                                                    onLayout={getCellOnLayoutHandler(index)}>
                                                    {symbol || (isFocused ? <Cursor /> : null)}
                                                </Text>
                                            )}
                                        />
                                        <Text style={[CommanStyles.font12, { paddingVertical: 5 }]}>sometimes It’ll take few seconds to receive. This code will expire within a 10 mins. </Text>

                                        <DgoButton
                                            title='Confirm'
                                            accent='primary'
                                            buttonRadius='rectangle-round'
                                            buttonType='filled'
                                            borderWidth={2}
                                            width='full'
                                            onPress={()=>{setStep3Key(step3Key+1);setStep(3)}}
                                        />
                                    </View>
                                    <View>

                                        <View>
                                            <Text style={[CommanStyles.font14, { textAlign: 'center', paddingVertical: 5 }]}>Didn’t recive a code?</Text>
                                            <DgoButton
                                                title='Request New Code'
                                                accent='gray'
                                                buttonRadius='rectangle-round'
                                                buttonType='line'
                                                borderWidth={2}
                                                width='full'
                                                onPress={() => { animation(); joinNowBottomSheetRef.current.snapToIndex(0) }}
                                            />
                                        </View>


                                    </View>
                                    <View>
                                        <Text style={[CommanStyles.font14, { textAlign: 'center', paddingVertical: 5 }]}>Not a Member yet?</Text>
                                        <DgoButton
                                            title='Join Now'
                                            accent='primary'
                                            buttonRadius='rectangle-round'
                                            buttonType='line'
                                            borderWidth={2}
                                            width='full'
                                            onPress={() => { animation(); joinNowBottomSheetRef.current.snapToIndex(0) }}
                                        />
                                    </View>

                                </View>
                            </Animatable.View>
                        </>
                        :
                        step==3?
                        <>
                            <View style={CommanStyles.row}>
                                <DgoButton onPress={onClose} icon={<AntDesign name="close" size={20} color={Colors.dgo_black_100} />} />
                                <Text style={CommanStyles.font18}>Add New password</Text>
                            </View>
                            <Animatable.View key={step3Key} animation={'fadeInUp'}>
                                <View style={CommanStyles.innerContainer}>
                                    <View>
                                    <DgoTextInput
                                        value={password}
                                        onChangeText={setPassword}
                                        title={'Create a new Password'}
                                        icon={<Feather name="lock" size={20} color={Colors.dgo_black_200} />}
                                        placeHolder={'Enter a Password'}
                                        isCurrect={null}
                                        isPassword={true}
                                    />
                                    <View style={CommanStyles.weakPasswordSection}>
                                        <View style={CommanStyles.row}>
                                        {
                                            PasswordStrengthData.map((strength,index)=>{
                                                return(
                                                    passwordStrength >= index?
                                                    <View key={index} style={[CommanStyles.pwStrength,{backgroundColor:PasswordStrengthData[passwordStrength].color}]}/>
                                                    :
                                                    <View key={index} style={[CommanStyles.pwStrength,{backgroundColor:Colors.dgo_black_400}]}/>
                                                )
                                            })
                                        }
                                         </View>
                                         <Text style={[CommanStyles.font14,{color:Colors.dgo_black_200}]}>{PasswordStrengthData[passwordStrength].title}</Text>
                                       
                                    </View>
                                        <Text style={[CommanStyles.font12, { paddingVertical: 5,paddingBottom:20 }]}>Minimum of 8 characters, with upper and lowercase letters and any number, or acceptable characters like @ sign.</Text>

                                        <DgoTextInput
                                        value={confirmPassword}
                                        onChangeText={setConfirmPassword}
                                        title={'Confirm new Password'}
                                        icon={<Feather name="lock" size={20} color={Colors.dgo_black_200} />}
                                        placeHolder={'Repeat same password'}
                                        isCurrect={null}
                                        isPassword={true}
                                    />
                                        <DgoButton
                                            title='Update Password'
                                            accent='primary'
                                            buttonRadius='rectangle-round'
                                            buttonType='filled'
                                            borderWidth={2}
                                            width='full'
                                            onPress={reset}
                                        />
                                    </View>
                                    <View>



                                    </View>
                                    
                    <View style={[CommanStyles.row,{alignSelf:'center'}]}>
                        <Text style={[CommanStyles.font14, { textAlign: 'center'}]}>Already found password? </Text>
                        <TouchableOpacity onPress={onClose}><Text style={{ color: Colors.dgo_blue_200 }}> Sign In</Text></TouchableOpacity>
                    </View>

                                </View>
                            </Animatable.View>
                        </>
                        :
                        null

            }
        </View>
    )
}
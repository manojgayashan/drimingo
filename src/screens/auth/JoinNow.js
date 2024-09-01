import { View, Text, Image, TouchableOpacity, Dimensions, Switch, TextInput, FlatList, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import CommanStyles from '../../styles/CommanStyles'
import DgoButton from '../../components/DgoButton'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../../styles/Colors';
import DgoTextInput from '../../components/DgoTextInput';
import PasswordStrengthData from '../../assets/arrays/PasswordStrengthData';
import * as Animatable from 'react-native-animatable';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from "@react-native-google-signin/google-signin";



const windowWidth = Dimensions.get("window").width;

export default function JoinNow({ onClose, animation, joinNowBottomSheetRef, navigation }) {
    const [email, setEmail] = useState('')
    const [step, setStep] = useState(1)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [password, setPassword] = useState('')
    const [passwordStrength, setPasswordStrength] = useState(0)
    const [confirmPassword, setConfirmPassword] = useState('')
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: 6 });
    const [step2Key, setStep2Key] = useState(1)
    const [step3Key, setStep3Key] = useState(100)
    const [step4Key, setStep4Key] = useState(10000)
    const [step5Key, setStep5Key] = useState(1000000)
    const [countryList, setCountryList] = useState(null)
    const [searchText, setSearchText] = useState('')
    const [searchText2, setSearchText2] = useState('')
    const [searchedCountries, setSearchedCountries] = useState(null)

    const [countryOpen, setCountryOpen] = useState(false)
    const [countryAnimation, setCountryAnimation] = useState('slideInUp')
    const [countryKey, setCountryKey] = useState(10000000)


    const [cityOpen, setCityOpen] = useState(false)
    const [cityAnimation, setCityAnimation] = useState('slideInUp')
    const [cityKey, setCityKey] = useState(1000000000)
    const [searchedCities, setSearchedCities] = useState(null)
    const [cityList, setCityList] = useState(null)

    useEffect(() => {
        getContryList()
        // configureGoogleSignIn()

        return () => {
            getContryList()
        }
    }, [])

    const configureGoogleSignIn = () => {
        GoogleSignin.configure({
            webClientId: '644847967012-08gn0fpknfuijt90de0uj95re7ro2pnd.apps.googleusercontent.com',
            offlineAccess: false,
            //   profileImageSize: PROFILE_IMAGE_SIZE,
        });
    }
    const getContryList = () => {

        return fetch('https://countriesnow.space/api/v0.1/countries/iso')
            .then(response => response.json())
            .then(json => {
                // console.log(json);
                setCountryList(json.data)
                setSearchedCountries(json.data)
            })
            .catch(error => {
                console.error(error);
            });
    }

    const getCityList = (c) => {
        return fetch('https://countriesnow.space/api/v0.1/countries/cities', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                country: c,
            })
        })
            .then(response => response.json())
            .then(json => {
                // setCityOpen(true)
                console.log(json.data);
                setCityList(json.data)
                setSearchedCities(json.data)
                // setCountryList(json.data)
                // setSearchedCountries(json.data)
            })
            .catch(error => {
                console.error(error);
            });
    }

    const searchCountry = (text) => {
        setSearchText(text)
        let arr = []
        countryList.map((con, index) => {
            if (con.name.includes(text)) {
                // console.log(on)
                arr.push(con)
            }
        })
        setSearchedCountries(arr)
    }
    const searchCity = (text) => {
        setSearchText2(text)
        let arr = []
        cityList.map((city, index) => {
            if (city.includes(text)) {
                // console.log(on)
                arr.push(city)
            }
        })
        setSearchedCities(arr)
    }

    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });


    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const Country = ({ title }) => (
        <TouchableOpacity onPress={() => { setCountry(title); setCity(''); onCountryClose(); getCityList(title) }} style={CommanStyles.item}>
            <Text style={CommanStyles.font14}>{title}</Text>
            {
                country == title ?
                    <AntDesign name="check" size={20} color={Colors.dgo_blue_200} />
                    :
                    null
            }

        </TouchableOpacity>
    );

    const City = ({ title }) => (
        <TouchableOpacity onPress={() => { setCity(title); onCityClose() }} style={CommanStyles.item}>
            <Text style={CommanStyles.font14}>{title}</Text>
            {
                city == title ?
                    <AntDesign name="check" size={20} color={Colors.dgo_blue_200} />
                    :
                    null
            }

        </TouchableOpacity>
    );

    const onCountryClose = () => {
        setCountryAnimation('fadeOutDown')
        setTimeout(() => {
            setCountryOpen(false)
        }, 500);
    }

    const onCityClose = () => {
        setCityAnimation('fadeOutDown')
        setTimeout(() => {
            setCityOpen(false)
        }, 500);
    }

    const googleSignIn = async () => {

        try { 
            
        GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/drive'],
            offlineAccess: true,
            forceCodeForRefreshToken: true,
            profileImageSize: 120,
            webClientId: '644847967012-08gn0fpknfuijt90de0uj95re7ro2pnd.apps.googleusercontent.com',
        });
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          console.log(userInfo)
        //   setState({ userInfo, error: undefined });
        } catch (error) {
        //   if (isErrorWithCode(error)) {
            console.log(error)
            switch (error.code) {
              case statusCodes.SIGN_IN_CANCELLED:
                
                // user cancelled the login flow
                break;
              case statusCodes.IN_PROGRESS:
                // operation (eg. sign in) already in progress
                break;
              case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
                // play services not available or outdated
                break;
              default:
              // some other error happened
            // }
        //   } else {
            // an error that's not related to google sign in occurred
          }
        }
      };

    return (
        <View style={CommanStyles.appContainer}>
            {step == 1 ?
                <>
                    <View style={CommanStyles.row}>
                        <DgoButton onPress={() => { animation(); joinNowBottomSheetRef.current.close() }} icon={<AntDesign name="close" size={20} color={Colors.dgo_black_100} />} />
                        <Text style={[CommanStyles.font18, { paddingLeft: 10 }]}>Join Now</Text>
                    </View>
                    <View>
                        <View style={CommanStyles.innerContainer}>
                            <View>
                                <View style={CommanStyles.row}>
                                    <Text style={CommanStyles.primaryTitle22}>Let’s Get Started!</Text>
                                    <Image source={require('../../assets/images/rocket-launch-md.png')} style={[CommanStyles.mediumIcon, { marginLeft: 30 }]} />
                                </View>
                                <DgoTextInput
                                    value={email}
                                    onChangeText={setEmail}
                                    title={'Continue with email'}
                                    icon={<Feather name="mail" size={20} color={Colors.dgo_black_200} />}
                                    placeHolder={'name@email.com'}
                                    isCurrect={null}
                                />
                                <DgoButton
                                    title='Continue'
                                    accent='primary'
                                    buttonType='filled'
                                    width='full'
                                    buttonRadius='rectangle-round'
                                    onPress={() => setStep(2)}
                                />
                                <Text style={[CommanStyles.font12Gray, { marginTop: 10, textAlign: 'center' }]}>By continuing you agree to Drimingo Pvt Ltd's <Text style={{ color: Colors.dgo_blue_200 }}>Terms & Conditions</Text> and <Text style={{ color: Colors.dgo_blue_200 }}>Privacy Policy</Text> We only use your data to offer a personalized experience.</Text>
                            </View>
                            <View>
                                <View style={[CommanStyles.row, { justifyContent: 'space-between' }]}>
                                    <View style={CommanStyles.horizontalLine} />
                                    <Text style={[CommanStyles.font14, { textAlign: 'center', paddingVertical: 5 }]}>Or</Text>
                                    <View style={CommanStyles.horizontalLine} />
                                </View>

                                
                                {/* <DgoButton
                                    title='Continue with Facebook'
                                    accent='gray'
                                    buttonRadius='rectangle-round'
                                    buttonType='line'
                                    borderWidth={2}
                                    width='full'
                                    // onPress={animation}
                                    icon={<Image source={require('../../assets/images/fb.png')} style={CommanStyles.buttonImage} />}

                                /> */}
                                {
                                    Platform.OS=='ios'?
                                    <DgoButton
                                    title='Continue with Apple'
                                    accent='gray'
                                    buttonRadius='rectangle-round'
                                    buttonType='line'
                                    borderWidth={2}
                                    width='full'
                                    // onPress={animation}
                                    icon={<Image source={require('../../assets/images/apple.png')} style={CommanStyles.buttonImage} />}
                                />
                                :
                                <DgoButton
                                    title='Continue with Google'
                                    accent='gray'
                                    buttonRadius='rectangle-round'
                                    buttonType='line'
                                    borderWidth={2}
                                    width='full'
                                    onPress={()=>googleSignIn()}
                                    icon={<Image source={require('../../assets/images/google.png')} style={CommanStyles.buttonImage} />}

                                />

                                }

                            </View>
                            <View style={[CommanStyles.row, { alignSelf: 'center' }]}>
                                <Text style={[CommanStyles.font14, { textAlign: 'center' }]}>Already have an account? </Text>
                                <TouchableOpacity onPress={() => { animation(); joinNowBottomSheetRef.current.close() }}><Text style={{ color: Colors.dgo_blue_200 }}> Sign In</Text></TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </>
                :
                // step2
                step == 2 ?
                    <>
                        {
                            countryOpen ?
                                <Animatable.View animation={countryAnimation} key={countryKey}>
                                    <View style={[CommanStyles.row, { justifyContent: 'space-between', marginBottom: 10 }]}>
                                        <View style={CommanStyles.searchTextInputView}>
                                            <Ionicons name="search" size={20} color={Colors.dgo_black_200} />
                                            <TextInput
                                                value={searchText}
                                                onChangeText={(text) => searchCountry(text)}
                                                placeholder='Search'
                                                placeholderTextColor={Colors.dgo_black_200}
                                                style={{ paddingLeft: 15, fontSize: 16, fontWeight: '500', width: CommanStyles.searchTextInputView.width - 51 }}
                                            />
                                            <DgoButton
                                                accent='gray'
                                                icon={<Ionicons name="close-circle" size={20} color={Colors.dgo_black_200} />}
                                                onPress={() => searchCountry('')}
                                            />
                                        </View>
                                        <Text onPress={() => onCountryClose(false)} style={CommanStyles.font14}>Cancel</Text>
                                    </View>
                                    {
                                        searchedCountries == null ?
                                            null
                                            :
                                            <FlatList
                                                data={searchedCountries}
                                                renderItem={({ item }) => <Country title={item.name} />}
                                                keyExtractor={item => item.Iso2}
                                            />

                                    }
                                </Animatable.View>
                                :
                                cityOpen ?
                                    <Animatable.View animation={cityAnimation} key={cityKey}>
                                        <View style={[CommanStyles.row, { justifyContent: 'space-between', marginBottom: 10 }]}>
                                            <View style={CommanStyles.searchTextInputView}>
                                                <Ionicons name="search" size={20} color={Colors.dgo_black_200} />
                                                <TextInput
                                                    value={searchText2}
                                                    onChangeText={(text) => searchCity(text)}
                                                    placeholder='Search'
                                                    placeholderTextColor={Colors.dgo_black_200}
                                                    style={{ paddingLeft: 15, fontSize: 16, fontWeight: '500', width: CommanStyles.searchTextInputView.width - 51 }}
                                                />
                                                <DgoButton
                                                    accent='gray'
                                                    icon={<Ionicons name="close-circle" size={20} color={Colors.dgo_black_200} />}
                                                    onPress={() => searchCity('')}
                                                />
                                            </View>
                                            <Text onPress={() => onCityClose()} style={CommanStyles.font14}>Cancel</Text>
                                        </View>
                                        {
                                            searchedCities == null ?
                                                null
                                                :
                                                <FlatList
                                                    data={searchedCities}
                                                    renderItem={({ item }) => <City title={item} />}
                                                    keyExtractor={(item, index) => index}
                                                />

                                        }
                                    </Animatable.View>
                                    :
                                    <>
                                        <View style={CommanStyles.row}>
                                            <DgoButton onPress={() => { setStep(1) }} icon={<AntDesign name="arrowleft" size={20} color={Colors.dgo_black_100} />} />
                                            <Text style={[CommanStyles.font18, { paddingLeft: 10 }]}>Basic Info</Text>
                                        </View>
                                        <Animatable.View key={step2Key} animation={'fadeInRight'}>
                                            <View style={CommanStyles.innerContainer}>
                                                <View>
                                                    <DgoTextInput
                                                        value={firstName}
                                                        onChangeText={setFirstName}
                                                        title={'First Name'}
                                                        icon={<Feather name="user" size={20} color={Colors.dgo_black_200} />}
                                                        placeHolder={'enter your first name'}
                                                        isCurrect={null}
                                                    />

                                                    <DgoTextInput
                                                        value={lastName}
                                                        onChangeText={setLastName}
                                                        title={'Last Name'}
                                                        icon={<Feather name="user" size={20} color={Colors.dgo_black_200} />}
                                                        placeHolder={'enter your last name'}
                                                        isCurrect={null}
                                                    />

                                                    <Text style={[CommanStyles.font14, { paddingTop: 10 }]}>Your country</Text>
                                                    <DgoButton
                                                        title={country}
                                                        placeHolder={'select your country'}
                                                        accent='gray'
                                                        buttonType='line'
                                                        width='full'
                                                        buttonRadius='rectangle-round'
                                                        borderWidth={2}
                                                        isPicker={true}
                                                        pickerOpen={countryOpen}
                                                        icon={<Ionicons name="location-outline" size={20} color={Colors.dgo_black_200} />}
                                                        onPress={() => { setCountryAnimation('slideInUp'); setCountryOpen(true) }}
                                                    />

                                                    <Text style={[CommanStyles.font14, { paddingTop: 10 }]}>Your city</Text>
                                                    <DgoButton
                                                        title={city}
                                                        placeHolder={'select your city'}
                                                        accent='gray'
                                                        buttonType='line'
                                                        width='full'
                                                        buttonRadius='rectangle-round'
                                                        borderWidth={2}
                                                        isPicker={true}
                                                        pickerOpen={false}
                                                        onPress={() => { setCityAnimation('slideInUp'); setCityOpen(true) }}
                                                        icon={<Ionicons name="location-outline" size={20} color={Colors.dgo_black_200} />}
                                                        disabled={country == '' ? true : false}
                                                    />

                                                    <DgoButton
                                                        title='Next'
                                                        accent='black'
                                                        buttonType='filled'
                                                        width='full'
                                                        buttonRadius='rectangle-round'
                                                        onPress={() => setStep(3)}
                                                    />
                                                    <DgoButton
                                                        title='Go Back'
                                                        accent='gray'
                                                        buttonType='line'
                                                        width='full'
                                                        buttonRadius='rectangle-round'
                                                        borderWidth={2}
                                                        onPress={() => setStep(1)}
                                                    />
                                                </View>
                                                <View>

                                                </View>
                                                <View style={[CommanStyles.row, { alignSelf: 'center' }]}>
                                                    <Text style={[CommanStyles.font14, { textAlign: 'center' }]}>Already have an account? </Text>
                                                    <TouchableOpacity onPress={() => { animation(); joinNowBottomSheetRef.current.close() }}><Text style={{ color: Colors.dgo_blue_200 }}> Sign In</Text></TouchableOpacity>
                                                </View>

                                            </View>
                                        </Animatable.View>
                                    </>

                        }

                    </>
                    :
                    // step3
                    step == 3 ?
                        <>
                            <View style={CommanStyles.row}>
                                <DgoButton onPress={() => { setStep(2) }} icon={<AntDesign name="arrowleft" size={20} color={Colors.dgo_black_100} />} />
                                <Text style={[CommanStyles.font18, { paddingLeft: 10 }]}>Password</Text>
                            </View>
                            <Animatable.View key={step3Key} animation={'fadeInRight'}>
                                <View style={CommanStyles.innerContainer}>
                                    <View>
                                        <DgoTextInput
                                            value={password}
                                            onChangeText={setPassword}
                                            title={'Create a password'}
                                            icon={<Feather name="lock" size={20} color={Colors.dgo_black_200} />}
                                            placeHolder={'Enter a Password'}
                                            isCurrect={null}
                                            isPassword={true}
                                        />
                                        <View style={CommanStyles.weakPasswordSection}>
                                            <View style={CommanStyles.row}>
                                                {
                                                    PasswordStrengthData.map((strength, index) => {
                                                        return (
                                                            passwordStrength >= index ?
                                                                <View key={index} style={[CommanStyles.pwStrength, { backgroundColor: PasswordStrengthData[passwordStrength].color }]} />
                                                                :
                                                                <View key={index} style={[CommanStyles.pwStrength, { backgroundColor: Colors.dgo_black_400 }]} />
                                                        )
                                                    })
                                                }
                                            </View>
                                            <Text style={[CommanStyles.font14, { color: Colors.dgo_black_200 }]}>{PasswordStrengthData[passwordStrength].title}</Text>

                                        </View>
                                        <Text style={[CommanStyles.font12Gray, { paddingVertical: 5, paddingBottom: 20 }]}>Minimum of 8 characters, with upper and lowercase letters and any number, or acceptable characters like @ sign.</Text>

                                        <DgoTextInput
                                            value={confirmPassword}
                                            onChangeText={setConfirmPassword}
                                            title={'Confirm password'}
                                            icon={<Feather name="lock" size={20} color={Colors.dgo_black_200} />}
                                            placeHolder={'Repeat same password'}
                                            isCurrect={null}
                                            isPassword={true}
                                        />
                                        <DgoButton
                                            title='Next'
                                            accent='black'
                                            buttonRadius='rectangle-round'
                                            buttonType='filled'
                                            borderWidth={2}
                                            width='full'
                                            onPress={() => setStep(4)}
                                        />
                                        <DgoButton
                                            title='Go Back'
                                            accent='gray'
                                            buttonType='line'
                                            width='full'
                                            buttonRadius='rectangle-round'
                                            borderWidth={2}
                                            onPress={() => setStep(2)}
                                        />
                                    </View>
                                    <View>



                                    </View>

                                    <View style={[CommanStyles.row, { alignSelf: 'center' }]}>
                                        <Text style={[CommanStyles.font14, { textAlign: 'center' }]}>Already have an account? </Text>
                                        <TouchableOpacity onPress={onClose}><Text style={{ color: Colors.dgo_blue_200 }}> Sign In</Text></TouchableOpacity>
                                    </View>

                                </View>
                            </Animatable.View>
                        </>
                        :
                        // step4
                        step == 4 ?
                            <>
                                <View style={CommanStyles.row}>
                                    <DgoButton onPress={() => { setStep(3) }} icon={<AntDesign name="close" size={20} color={Colors.dgo_black_100} />} />
                                    <Text style={[CommanStyles.font18, { paddingLeft: 10 }]}>Confirm Your Email</Text>
                                </View>
                                <Animatable.View key={step4Key} animation={'fadeInRight'}>
                                    <View style={CommanStyles.innerContainer}>
                                        <View>
                                            <Text style={[CommanStyles.font12Gray, { paddingVertical: 5, marginBottom: 10 }]}>You'll receive a temporary reset code via email. Please enter it below.</Text>
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
                                            <Text style={[CommanStyles.font12Gray, { paddingVertical: 5 }]}>sometimes It’ll take few seconds to receive. This code will expire within a 10 mins. </Text>

                                            <DgoButton
                                                title='Confirm'
                                                accent='primary'
                                                buttonRadius='rectangle-round'
                                                buttonType='filled'
                                                borderWidth={2}
                                                width='full'
                                                onPress={() => { setStep3Key(step3Key + 1); setStep(5) }}
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
                                                    onPress={() => { }}
                                                />
                                            </View>


                                        </View>
                                        <View style={[CommanStyles.row, { alignSelf: 'center' }]}>
                                            <Text style={[CommanStyles.font14, { textAlign: 'center' }]}>Have an issue? </Text>
                                            <TouchableOpacity onPress={onClose}><Text style={{ color: Colors.dgo_blue_200 }}> Contact Us</Text></TouchableOpacity>
                                        </View>

                                    </View>
                                </Animatable.View>
                            </>
                            :
                            // step5
                            step == 5 ?
                                <View>
                                    <View style={CommanStyles.row}>
                                        <DgoButton onPress={() => { setStep(4) }} icon={<AntDesign name="close" size={20} color={Colors.dgo_black_100} />} />
                                    </View>
                                    <Animatable.View key={step5Key} animation={'fadeInUp'}>
                                        <View style={CommanStyles.innerContainer}>
                                            <View style={CommanStyles.center}>

                                                <Text style={CommanStyles.primaryTitle22}>Welcome Onboard</Text>
                                                <Text style={[CommanStyles.font12Gray, { paddingVertical: 20, textAlign: 'center' }]}>You have successfully created your free account. Start to plan your dream tour with Drimingo.</Text>
                                                <Image source={require('../../assets/images/login-welcome-md.png')} style={CommanStyles.bigIcon} />
                                            </View>
                                            <View>
                                                <View style={[CommanStyles.row, { justifyContent: 'space-between' }]}>
                                                    <Text style={[CommanStyles.font12, { padding: 10, width: windowWidth - 100 }]}>Enable location access for better recommendation and directional guide.</Text>

                                                    <Switch
                                                        trackColor={{ false: Colors.dgo_black_200, true: Colors.dgo_blue_200 }}
                                                        thumbColor={Colors.dgo_white_600}
                                                        ios_backgroundColor={Colors.dgo_black_300}
                                                        onValueChange={toggleSwitch}
                                                        value={isEnabled}
                                                    />
                                                </View>
                                                <DgoButton
                                                    title="Let's Get Start"
                                                    accent='gray'
                                                    buttonRadius='rectangle-round'
                                                    buttonType='line'
                                                    borderWidth={2}
                                                    width='full'
                                                    onPress={() => { navigation.navigate('Home') }}
                                                />
                                            </View>
                                        </View>
                                    </Animatable.View>
                                </View>
                                :
                                null
            }
        </View>
    )
}
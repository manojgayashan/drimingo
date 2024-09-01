import { View, Text, StatusBar, Animated, Dimensions } from 'react-native'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import CommanStyles from '../styles/CommanStyles'

import BottomSheet, { BottomSheetView, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import SignIn from './auth/SignIn'
import JoinNow from './auth/JoinNow'
import ForgotPassword from './auth/forgotPassword'
import { useNavigation } from '@react-navigation/native';


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function SignUp() {
    const navigation = useNavigation()
    const scaleAnimate = useRef(new Animated.Value(0)).current;

    const signInBottomsheetScaleAnimate = useRef(new Animated.Value(0)).current;
    const slideUpAnimate = useRef(new Animated.Value(0)).current;

    const fpBottomsheetScaleAnimate = useRef(new Animated.Value(0)).current;
    const fpSlideUpAnimate = useRef(new Animated.Value(0)).current;

    const [isToggle, setIsToggle] = useState(true);
    const [key, setKey] = useState(1)
    const [autoPlay, setAutoPlay] = useState(true)

    let toggled = false
    let fpToggled = false

    const scaleInterpolate = scaleAnimate.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0.88],
    });

    const signInScaleInterpolate = signInBottomsheetScaleAnimate.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0.88],
    });

    const fpScaleInterpolate = fpBottomsheetScaleAnimate.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0.92],
    });

    const animateElement = (t) => {
        console.log(t)
        const toValue = t ? 0 : 1;

        Animated.timing(scaleAnimate, {
            toValue: toValue,
            duration: 300,
            useNativeDriver: true,
        })
            .start(() => {
                setIsToggle(!t);
            })
    };

    const animateBottomSheet = () => {
        console.log(fpBottomsheetScaleAnimate)
        const toValue = toggled ? 0 : 1;
        return Animated.parallel([
            Animated.timing(signInBottomsheetScaleAnimate, {
                toValue: toValue,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(slideUpAnimate, {
                toValue: toValue,
                duration: 200,
                useNativeDriver: true
            })
        ]).start(() => {
            // setIsToggle(!toggled);
            toggled = !toggled
        })
    };

    const animateBottomSheetFP = () => {
        console.log(fpToggled)
        const toValue = fpToggled ? 0 : 1;
        return Animated.parallel([
            Animated.timing(fpBottomsheetScaleAnimate, {
                toValue: toValue,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(fpSlideUpAnimate, {
                toValue: toValue,
                duration: 200,
                useNativeDriver: true
            })
        ]).start(() => {
            // setIsToggle(!toggled);
            fpToggled = !fpToggled
        })
    };

    const animationStyle = {
        transform: [
            {
                scale: scaleInterpolate,
            },
        ],

    };

    const animationBSStyle = {
        transform: [
            {
                scale: signInScaleInterpolate,
            },
            {
                translateY: slideUpAnimate.interpolate({
                    inputRange: [0, 1],
                    outputRange: [10, -70]
                })


            }
        ],

    };
    const fpAnimationBSStyle = {
        transform: [
            {
                scale: fpScaleInterpolate,
            },
            {
                translateY: fpSlideUpAnimate.interpolate({
                    inputRange: [0, 1],
                    outputRange: [10, -30]
                })


            }
        ],

    };

    const bottomSheetRef = useRef();
    const signInBottomSheet = useRef();
    const joinNowBottomSheet = useRef();
    const forgotPasswordBottomSheet = useRef();
    const joinNowSnapPoints = useMemo(() => [(windowHeight - (Platform.OS == 'android' ? 25 : 65))], []);
    const signInSnapPoints = useMemo(() => [(windowHeight - (Platform.OS == 'android' ? 5 : 50))], []);
    const fogrotPasswordSnapPoints = useMemo(() => [(windowHeight - (Platform.OS == 'android' ? 10 : 0))], []);

    const renderBackdrop = useCallback(
        props => (
            <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={-1}
                appearsOnIndex={1}
                opacity={0.3}
                // onPress={() => animateBottomSheet()}
                onPress={() => navigation.goBack()}
            />
        ),
        []
    );    
    const renderJoinNowBackdrop = useCallback(
        props => (
            <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={-1}
                appearsOnIndex={1}
                opacity={0.3}
                // onPress={() => console.log(fpToggled)}
                onPress={() => {fpToggled?animateBottomSheetFP():animateBottomSheet()}}
                // onPress={()=>animateBottomSheet()}

            />
        ),
        []
    );
       
    const renderFPBackdrop = useCallback(
        props => (
            <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={-1}
                appearsOnIndex={1}
                opacity={0.3}
                onPress={() => animateBottomSheet()}

            />
        ),
        []
    );
    const handleSheetChanges = useCallback((index) => {
        // console.log('handleSheetChanges', index);
        // index==-1?animateElement():null
    }, []);

    const closeUploadBottomSheet = () => {
        bottomSheetRef.current.close()
        // animateElement()
    }

  return (   
     <View style={[CommanStyles.onbordingContainer]}>
    <StatusBar translucent backgroundColor={'transparent'} barStyle={'light-content'} />
                  <BottomSheet
                ref={signInBottomSheet}
                snapPoints={signInSnapPoints}
                onChange={handleSheetChanges}
                index={0}
                backdropComponent={renderBackdrop}
                style={{ zIndex: 100 }}
                handleComponent={null}
                backgroundStyle={{ backgroundColor: 'transparent' }}
            // backgroundComponent={}
            >
                <Animated.View style={[CommanStyles.bottomSheetView, animationBSStyle]}>
                    <BottomSheetView style={CommanStyles.signInContentContainer}>
                        <SignIn navigation={navigation} forgotPasswordBottomSheetRef={forgotPasswordBottomSheet} joinNowBottomSheetRef={joinNowBottomSheet} animation={animateBottomSheet} onClose={() => { signInBottomSheet.current.close() }} />
                    </BottomSheetView>
                </Animated.View>
            </BottomSheet>

            <BottomSheet
                ref={forgotPasswordBottomSheet}
                snapPoints={fogrotPasswordSnapPoints}
                onChange={handleSheetChanges}
                index={-1}
                backdropComponent={renderFPBackdrop}
                style={{ zIndex: 9999 }}
                handleComponent={null}
                backgroundStyle={{ backgroundColor: 'transparent' }}
            >
            <Animated.View style={[CommanStyles.fpBottomSheetView, fpAnimationBSStyle]}>
                <BottomSheetView style={CommanStyles.joinNowContentContainer}>
                    <ForgotPassword joinNowBottomSheetRef={joinNowBottomSheet} animation={animateBottomSheetFP} onClose={() => { animateBottomSheet(); forgotPasswordBottomSheet.current.close() }} />
                </BottomSheetView>
                </Animated.View>
            </BottomSheet>

            <BottomSheet
                ref={joinNowBottomSheet}
                snapPoints={joinNowSnapPoints}
                onChange={handleSheetChanges}
                index={0}
                backdropComponent={renderJoinNowBackdrop}
                style={{ zIndex: 9999 }}
                handleComponent={null}
            >
                <BottomSheetView style={CommanStyles.joinNowContentContainer}>
                    <JoinNow joinNowBottomSheetRef={joinNowBottomSheet} 
                    // animation={()=>console.log(fpToggled)} 
                    navigation={navigation}
                    animation={()=>fpToggled?animateBottomSheetFP():toggled?animateBottomSheet():null} 
                    />
                </BottomSheetView>
            </BottomSheet>
    </View>
  )
}
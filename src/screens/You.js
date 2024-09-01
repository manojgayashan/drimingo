import { View, Text, StatusBar, ImageBackground, Dimensions, Platform } from 'react-native'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import CommanStyles from '../styles/CommanStyles'
import Header from '../components/Header'
import DgoButton from '../components/DgoButton'
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '../styles/Colors'
import { Image } from 'react-native-animatable'
import Levels from '../assets/arrays/Levels'
import Progress from '../components/Progress'
import Footer from '../components/Footer'
import BottomSheet, { BottomSheetView, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import LinearGradient from 'react-native-linear-gradient'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function You() {

  const [level, setLevel] = useState(0)
  const [points, setPoints] = useState(0)
  const [loading, setLoading] = useState(true)
  const bottomSheetRef = useRef();

  const snapPoints = useMemo(() => [(windowHeight / 1.4)], []);

  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={1}
        opacity={0.3}
      // onPress={() => animateBottomSheet()}

      />
    ),
    []
  );

  const calculateLevel = () => {
    p = points
    p >= 200 ?
      setLevel(5) :
      p >= 100 ?
        setLevel(4) :
        p >= 60 ?
          setLevel(3) :
          p >= 30 ?
            setLevel(2) :
            p >= 10 ?
              setLevel(1) :
              p >= 0 ?
                setLevel(0) :
                null
  }

  useEffect(() => {
    calculateLevel()
    setTimeout(() => {
      setLoading(false)
    }, 1000);

    return () => {
      calculateLevel()
      setTimeout(() => {
        setLoading(false)
      }, 1000);
    }
  }, [])

  const handleSheetChanges = useCallback((index) => {
    // console.log('handleSheetChanges', index);
    // index==-1?animateElement():null
  }, []);

  return (
    <View style={CommanStyles.appContainer}>
      <StatusBar translucent backgroundColor={'transparent'} barStyle={'dark-content'} />
      <Header
        title={'You'}
        rightIcon={
          <DgoButton
            icon={<Feather name={'settings'} size={20} color={Colors.dgo_black_200} />}
          />
        }
      />
      {
        loading ?
        <>
          <View style={CommanStyles.profileHeader}>
            <ShimmerPlaceHolder
              style={[CommanStyles.profileImageBackground, { borderRadius: 100 }]}
              LinearGradient={LinearGradient}
            />
            <View>
              <ShimmerPlaceHolder
                style={[CommanStyles.font16, { paddingBottom: 5 }]}
                LinearGradient={LinearGradient}
              />
              <View style={CommanStyles.row}>
                <ShimmerPlaceHolder
                  style={[CommanStyles.font12Gray, { width: 80 }]}
                  LinearGradient={LinearGradient}
                />

                <ShimmerPlaceHolder
                  style={[CommanStyles.smallBadge, { paddingHorizontal: 0, paddingVertical: 0, width: 40, borderWidth: 0 }]}
                  LinearGradient={LinearGradient}
                />
              </View>
            </View>
          </View>
          <View style={CommanStyles.card}>
          <View style={CommanStyles.row}>
          <ShimmerPlaceHolder
                  style={CommanStyles.mediumIcon}
                  LinearGradient={LinearGradient}
                />
                <View style={CommanStyles.levelCardTop}>
                  <View>
                    <ShimmerPlaceHolder
                  style={CommanStyles.font14Gray}
                  LinearGradient={LinearGradient}
                />
                <View style={[CommanStyles.row, { paddingLeft: 10, paddingTop: 5, width: '90%', justifyContent: 'space-between' }]}>
                <ShimmerPlaceHolder
                  style={[CommanStyles.font12,{width:60}]}
                  LinearGradient={LinearGradient}
                />
                <ShimmerPlaceHolder
                  style={[CommanStyles.font12,{width:120}]}
                  LinearGradient={LinearGradient}
                />
                </View>
                  </View>

                <ShimmerPlaceHolder
                  style={[{width:16,height:16}]}
                  LinearGradient={LinearGradient}
                />
                
                </View>
          </View>
          <View style={CommanStyles.levelCardBottom}>
          <View>
          <ShimmerPlaceHolder
                  style={[CommanStyles.font12,{marginBottom:10}]}
                  LinearGradient={LinearGradient}
                />
                <ShimmerPlaceHolder
                  style={CommanStyles.font12}
                  LinearGradient={LinearGradient}
                />
          </View>
          <ShimmerPlaceHolder
                  style={[{width:100,height:50,borderRadius:8}]}
                  LinearGradient={LinearGradient}
                />
        </View>
          </View>
          </>
          :
          <>
          <View style={CommanStyles.profileHeader}>

            <ImageBackground
              source={{ uri: 'https://s3-alpha-sig.figma.com/img/796d/d444/6046f7c9f6f54f948d59f27b4960f5f7?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LJyu09WcefISOCl6gg1vctpv8-Mc2lcgMHwkPqmwsdXrYJtN4ejhSsuOkd1pblDxOlF12pkYhXVIqF~N-cg11NgdvqkkBU-Wwr8wD4W98gOYHRoFXiyee7Yx4rG9Bk3hR96IThA8j3WZ2eHMDSGcJlIQFIqah15M2QE4rRmj1~pHjYzOd42tTxVv4M~f3qdow~XD-OkuboXT0yLcUJ-W97OaJlf76oXei~aZQzkZjIS1ZYtNu8KyQHgZyBQ19Reb0JEuHD-pae-~WncSLx2gx17zSAq44vTBxYPM-wLjYFR8mSjWRhzxzyxAjiTh0gdUWyUmL1xpjZur3wt8yzOg4g__' }}
              style={CommanStyles.profileImageBackground}
              imageStyle={CommanStyles.profileImage}
            >
              <Image source={require('../assets/images/verified.png')} style={CommanStyles.verifyIcon} />
            </ImageBackground>

            <View>
              <Text style={[CommanStyles.font16, { paddingBottom: 5 }]}>Pubudu Rajapaksha</Text>
              <View style={CommanStyles.row}>
                <Text style={CommanStyles.font12Gray}>ID : 4543223</Text>
                <View style={CommanStyles.smallBadge}>
                  <View style={{ height: 7, width: 7, borderRadius: 10, backgroundColor: Colors.dgo_black_300, marginRight: 7 }} />
                  <Text style={CommanStyles.font10}>Regular</Text>
                </View>
              </View>
            </View>
          </View>

      <View style={CommanStyles.card}>
        <View style={CommanStyles.row}>
          <Image source={Levels[level].image} style={CommanStyles.mediumIcon} />
          <View style={CommanStyles.levelCardTop}>
            <View>
              <Text style={CommanStyles.font14Gray}>Level: <Text style={{ color: Colors.dgo_black_100 }}>{Levels[level].level}</Text></Text>
              <View style={[CommanStyles.row, { paddingLeft: 10, paddingTop: 5, width: '90%', justifyContent: 'space-between' }]}>
                <Text style={CommanStyles.font12}>{points} Points</Text>
                <Progress
                  progress={points}
                  color={Colors.dgo_blue_200}
                  unFilledColor={Colors.dgo_black_400} />
              </View>

            </View>
            <DgoButton
              icon={<Feather name={'info'} size={20} color={Colors.dgo_blue_200} />}
              onPress={() => bottomSheetRef.current.snapToIndex(0)}
            />
          </View>
        </View>

        <View style={CommanStyles.levelCardBottom}>
          <Text style={[CommanStyles.font12Gray, { width: '70%' }]}>{points >= 0 ? 'Create your first trip to activate your reward center and enjoy benefits.' : 'Share your valuable feedback with us to gain 15 more points.'}</Text>
          <DgoButton
            title='Try Now'
            buttonType='line'
            accent='primary'
            borderWidth={1}
            buttonRadius='rectangle-round'
          />
        </View>

      </View>
      </>
      }

      <View style={{ padding: 20 }}>
        <DgoButton
          icon={<Feather name={'edit'} size={20} color={Colors.dgo_black_100} />}
          title='Edit Profile'
          width='full'
          rightIcon={<Feather name={'chevron-right'} size={20} color={Colors.dgo_black_300} />}
          accent='black'
          margin={3}
        />
        <DgoButton
          icon={<Image source={require('../assets/images/dollar.png')} style={CommanStyles.smallIcon} />}
          title='Payment & Rewards'
          width='full'
          rightIcon={<Feather name={'chevron-right'} size={20} color={Colors.dgo_black_300} />}
          accent='black'
          margin={3}

        />
        <DgoButton
          icon={<Feather name={'life-buoy'} size={20} color={Colors.dgo_black_100} />}
          title='Help & Support'
          width='full'
          rightIcon={<Feather name={'chevron-right'} size={20} color={Colors.dgo_black_300} />}
          accent='black'
          margin={3}

        />
        <DgoButton
          icon={<Feather name={'message-circle'} size={20} color={Colors.dgo_black_100} />}
          title='Send Feedback'
          width='full'
          rightIcon={<Feather name={'chevron-right'} size={20} color={Colors.dgo_black_300} />}
          accent='black'
          margin={3}

        />
        <DgoButton
          icon={<Feather name={'book-open'} size={20} color={Colors.dgo_black_100} />}
          title='Legal Information'
          width='full'
          rightIcon={<Feather name={'chevron-right'} size={20} color={Colors.dgo_black_300} />}
          accent='black'
          margin={3}

        />
        <DgoButton
          icon={<Feather name={'power'} size={20} color={Colors.dgo_black_100} />}
          title='Sign Out'
          width='full'
          rightIcon={<Feather name={'chevron-right'} size={20} color={Colors.dgo_black_500} />}
          accent='black'
          margin={3}

        />
      </View>
      <Footer />


      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        index={-1}
        backdropComponent={renderBackdrop}
      // style={{ zIndex: 9999 }}
      // handleComponent={null}
      // backgroundStyle={{ backgroundColor: 'transparent' }}
      // backgroundComponent={}
      >
        <BottomSheetView style={[CommanStyles.signInContentContainer, { zIndex: 999 }]}>
          <View style={[CommanStyles.row, { marginBottom: 20 }]}>
            <DgoButton onPress={() => { bottomSheetRef.current.close() }} icon={<AntDesign name="close" size={20} color={Colors.dgo_black_100} />} />
            <Text style={[CommanStyles.font18, { paddingLeft: 10 }]}>The Levels & Benefits</Text>
          </View>
          <Text style={CommanStyles.font12}>Feel free to brag a little about your achievements by sharing your levels with loved ones. We also offer discounts, offers and free merchandise based on your points.</Text>
          {
            Levels.map((item, index) => {
              return (
                index == 0 ?
                  null :
                  <View style={[CommanStyles.row, { marginTop: 20 }]} key={index}>
                    <ImageBackground source={item.image} imageStyle={{ resizeMode: 'cover', opacity: level < index ? 0.4 : 1 }} style={CommanStyles.mediumIcon} >
                      {
                        level < index ?
                          <View style={CommanStyles.grayScale} />
                          :
                          null
                      }
                    </ImageBackground>
                    <View style={CommanStyles.levelCardTop}>
                      <View>
                        <Text style={CommanStyles.font14Gray}>Level: <Text style={{ color: Colors.dgo_black_100 }}>{item.level}</Text></Text>
                        <View style={[CommanStyles.row, { paddingLeft: 10, paddingTop: 5, width: '90%', justifyContent: 'space-between' }]}>
                          <Text style={CommanStyles.font12Gray}>{item.points} Points</Text>
                        </View>

                      </View>
                    </View>
                  </View>
              )
            })
          }
          <View style={{ paddingVertical: 20 }}>
            <Text style={[CommanStyles.font12, { textAlign: 'center', paddingBottom: 10 }]}>*terms and conditions will apply</Text>
            <DgoButton
              title='Got it'
              accent='black'
              buttonRadius='rectangle-round'
              buttonType='filled'
              onPress={() => { bottomSheetRef.current.close() }}
            />
          </View>
        </BottomSheetView>
      </BottomSheet>
    </View>
  )
}
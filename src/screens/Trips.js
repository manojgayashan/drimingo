import { View, Text, SectionList, Image, ImageBackground, TouchableOpacity, ActivityIndicator, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import CommanStyles from '../styles/CommanStyles'
import Header from '../components/Header'
import DgoButton from '../components/DgoButton'
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '../styles/Colors'
import ListHeader from '../components/ListHeader'
import TripsList from '../assets/arrays/TripsList'
import moment from 'moment'
import LinearGradient from 'react-native-linear-gradient'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'

export default function Trips() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);

    return () => {
      setTimeout(() => {
        setLoading(false)
      }, 1000);
    }
  }, [])


  const now = new Date();
  const monthCutoff = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000); // 30 days ago
  // const DATA = null
  const DATA = [
    {
      title: 'Upcoming soon',
      data: TripsList == null ? null : TripsList.filter((trip) => new Date(trip.date) <= monthCutoff),
    },
    {
      title: 'Next on plan',
      data: TripsList == null ? null : TripsList.filter((trip) => new Date(trip.date) > monthCutoff),
    }
  ];

  const ListCard = ({ item }) => {

    const [open, setOpen] = useState(false)
    const [downloading, setDownloading] = useState(null)

    const download = () => {
      setDownloading(true)
      setTimeout(() => {
        setDownloading(false)
      }, 500);
    }

    return (
      <>
        {
          loading ?
            <>
              <View style={CommanStyles.tripListView}>
                <ShimmerPlaceHolder
                  style={CommanStyles.tripListImage}
                  LinearGradient={LinearGradient}
                />
                <View style={CommanStyles.tripCardInnerView}>
                  <View style={{ justifyContent: 'space-between' }}>
                    <ShimmerPlaceHolder
                      style={[CommanStyles.font12, { paddingBottom: 5 }]}
                      LinearGradient={LinearGradient}
                    />
                    <ShimmerPlaceHolder
                      style={[CommanStyles.font12, { paddingBottom: 5 }]}
                      LinearGradient={LinearGradient}
                    />
                    <View style={CommanStyles.row}>
                      <ShimmerPlaceHolder
                        style={[CommanStyles.smallBadgeWhite, { paddingHorizontal: 0, paddingVertical: 0, width: 100 }]}
                        LinearGradient={LinearGradient}
                      />
                      <ShimmerPlaceHolder
                        style={[CommanStyles.smallBadgeWhite, { paddingHorizontal: 0, paddingVertical: 0, width: 60 }]}
                        LinearGradient={LinearGradient}
                      />

                    </View>

                    <ShimmerPlaceHolder
                      style={CommanStyles.font10}
                      LinearGradient={LinearGradient}
                    />
                  </View>
                  <View style={CommanStyles.tripCardInnerViewRight}>
                    <ShimmerPlaceHolder
                      style={{ width: 16, height: 16 }}
                      LinearGradient={LinearGradient}
                    />
                    <ShimmerPlaceHolder
                      style={{ width: 16, height: 16 }}
                      LinearGradient={LinearGradient}
                    />
                  </View>
                </View>
              </View>
            </>
            :
            <>
              <View style={CommanStyles.tripListView}>
                <ImageBackground source={{ uri: item.imageUrl }} imageStyle={CommanStyles.tripListImage} style={CommanStyles.tripListImageBackground}>
                  <LinearGradient colors={['transparent', 'transparent', Colors.dgo_black_100]} style={CommanStyles.tripListImage}>
                  </LinearGradient>
                </ImageBackground>
                <View style={CommanStyles.tripCardInnerView}>
                  <View style={{ justifyContent: 'space-between' }}>
                    <Text style={[CommanStyles.font12, { paddingBottom: 5 }]}>Trip to{'\n'}{item.title}</Text>
                    <View style={CommanStyles.row}>
                      <View style={CommanStyles.smallBadgeWhite}>
                        <Ionicons name="location-outline" size={9} color={Colors.dgo_blue_200} />
                        <Text style={[CommanStyles.font10, { paddingHorizontal: 4 }]}>{item.destinations} Destinations</Text>
                      </View>
                      <View style={[CommanStyles.smallBadgeWhite, { marginLeft: 5 }]}>
                        <Feather name={'calendar'} size={8} color={Colors.dgo_blue_200} />
                        <Text style={[CommanStyles.font10, { paddingLeft: 4 }]}>{item.duration} Dayes</Text>
                      </View>
                    </View>
                    <Text style={[CommanStyles.font10, { color: Colors.dgo_black_100, paddingTop: 5 }]}>{item.date}</Text>
                  </View>
                  <View style={CommanStyles.tripCardInnerViewRight}>
                    <DgoButton
                      icon={<Entypo name={'dots-three-horizontal'} size={16} color={Colors.dgo_black_200} />}
                    />
                    <DgoButton
                      onPress={() => { setOpen(!open) }}
                      icon={<AntDesign name={'clouddownload'} size={20} color={downloading == false ? Colors.dgo_green_200 : Colors.dgo_black_200} />}
                    />
                  </View>
                </View>
              </View>
              {
                open ?
                  <View style={CommanStyles.tripListBottomView}>
                    <DgoButton
                      icon={<Feather name={'trash-2'} size={14} color={Colors.dgo_white_600} />}
                    />
                    <View style={CommanStyles.verticalLine16} />
                    <DgoButton
                      title='Rename'
                      icon={<Feather name={'edit'} size={14} color={Colors.dgo_white_600} />}
                      buttonSize='small'
                      titleTextSize={12}
                      accent='white'
                      width={130}
                    />
                    <View style={CommanStyles.verticalLine16} />
                    {
                      downloading == null ?
                        <DgoButton
                          title='Offline Download'
                          icon={<AntDesign name={'clouddownload'} size={16} color={Colors.dgo_white_600} />}
                          buttonSize='small'
                          titleTextSize={12}
                          accent='white'
                          onPress={() => download()}
                        />
                        :
                        downloading == true ?
                          <View style={CommanStyles.row}>
                            <ActivityIndicator size={10} />
                            <Text style={[CommanStyles.whiteFont12, { paddingLeft: 5 }]}>Downloading..</Text>
                          </View>
                          :
                          <DgoButton
                            title='Saved 24.35MB'
                            icon={<AntDesign name={'clouddownload'} size={16} color={Colors.dgo_green_200} />}
                            buttonSize='small'
                            titleTextSize={12}
                            accent='white'
                          />
                    }

                  </View>
                  :
                  null
              }
            </>

        }
      </>
    )
  }
  return (
    <View style={CommanStyles.appContainer}>
      <StatusBar translucent backgroundColor={'transparent'} barStyle={'dark-content'} />
      <Header
        title={'Trips'}
        leftIcon={
          <DgoButton
            icon={<Feather name={'search'} size={20} color={Colors.dgo_black_200} />}
          />
        }
        rightIcon={
          <DgoButton
            icon={<AntDesign name={'questioncircleo'} size={20} color={Colors.dgo_black_200} />}
          />
        }
      />
      {
        DATA == null ?
          <View style={CommanStyles.middle}>
            <Image source={require('../assets/images/empty-groups-md.png')} style={CommanStyles.bigIcon} />
            <Text style={[CommanStyles.font16LightGray, { textAlign: 'center', paddingBottom: 40 }]}>No trips planned yet. {'\n'}Dream awaits. Let’s get started.</Text>
            <DgoButton
              title='Search Now'
              accent='white'
              buttonType='filled'
              buttonRadius='rectangle-round'
            />
          </View>
          :
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (<ListCard item={item} />)}
            renderSectionHeader={({ section: { title } }) => (
              <ListHeader title={title} />
            )}
          />
      }
    </View>
  )
}
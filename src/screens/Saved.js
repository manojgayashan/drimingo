import { View, Text, Image, FlatList, TouchableOpacity, ImageBackground, Pressable, StatusBar } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import CommanStyles from '../styles/CommanStyles'
import Header from '../components/Header'
import DgoButton from '../components/DgoButton'
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '../styles/Colors'
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import SwipeableItem, {
  useSwipeableItemParams,
  OpenDirection,
} from "react-native-swipeable-item";
import DreamDestination from '../assets/arrays/DreamDestination'
import DreamlyExperiences from '../assets/arrays/DreamlyExperiences'
import LinearGradient from 'react-native-linear-gradient'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'

export default function Saved() {

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

  // const data = null
  const OVERSWIPE_DIST = 20;
  const NUM_ITEMS = 20;
  const itemRefs = useRef(new Map());

  const renderItem = useCallback((params) => {
    return <RowItem {...params} itemRefs={itemRefs} />;
  }, []);

  const loadingContent = ()=>{
    return(
      <View style={CommanStyles.tripListView}>
      <ShimmerPlaceHolder
        style={CommanStyles.savedTripsImage}
        LinearGradient={LinearGradient}
      />
      <View style={CommanStyles.tripCardInnerView}>
        <View style={{ justifyContent: 'space-between' }}>
          <ShimmerPlaceHolder
            style={[CommanStyles.font12, { paddingBottom: 5 }]}
            LinearGradient={LinearGradient}
          />
          <View style={CommanStyles.row}>
            <ShimmerPlaceHolder
              style={[CommanStyles.smallBadgeWhite, { paddingHorizontal: 0, paddingVertical: 0, width: 100 }]}
              LinearGradient={LinearGradient}
            />

          </View>
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
    )
  }

  const RowItem = ({ item, itemRefs, drag }) => {
    return (
      <SwipeableItem
        key={item.key}
        item={item}
        ref={(ref) => {
          if (ref && !itemRefs.current.get(item.key)) {
            itemRefs.current.set(item.key, ref);
          }
        }}
        onChange={({ openDirection }) => {
          if (openDirection !== OpenDirection.NONE) {
            // Close all other open items
            [...itemRefs.current.entries()].forEach(([key, ref]) => {
              if (key !== item.key && ref) ref.close();
            });
          }
        }}
        overSwipe={OVERSWIPE_DIST}
        renderUnderlayLeft={() => <UnderlayLeft drag={drag} />}
        // renderUnderlayRight={() => <UnderlayRight />}
        snapPointsLeft={[72]}
        // snapPointsRight={[50]}
      >
        <View
          style={[
            CommanStyles.row,
            { backgroundColor: item.backgroundColor, height: item.height },
          ]}
        >
          <Pressable onPressIn={drag}>
            <View style={CommanStyles.tripListView}>
              <ImageBackground source={{ uri: item.imageUrl }} imageStyle={CommanStyles.savedTripsImage} style={CommanStyles.savedTripsImageBackground}>
                <LinearGradient colors={['transparent', 'transparent', Colors.dgo_black_100]} style={CommanStyles.savedTripsImage}>
                </LinearGradient>
              </ImageBackground>
              <View style={CommanStyles.tripCardInnerView}>
                <View style={{ justifyContent: 'space-between',alignItems:'flex-start' }}>
                  <Text style={[CommanStyles.font12, { paddingBottom: 5 }]}>{item.title}</Text>
                  
                    <View style={CommanStyles.smallBadgeWhite}>
                      <Ionicons name="location-outline" size={9} color={Colors.dgo_blue_200} />
                      <Text style={[CommanStyles.font10, { paddingHorizontal: 4 }]}>{item.type}</Text>
                    </View>
                  
                 </View>
                <View style={CommanStyles.tripCardInnerViewRight}>
                  <DgoButton
                    icon={<Entypo name={'dots-three-horizontal'} size={16} color={Colors.dgo_black_200} />}
                  />
                  <DgoButton
                    onPress={() => { }}
                    icon={<AntDesign name={'heart'} size={12} color={Colors.dgo_red_200} />}
                  />
                </View>
              </View>
            </View>

          </Pressable>
        </View>
      </SwipeableItem>
    );
  }
  const UnderlayLeft = ({ drag }) => {
    const { item, percentOpen } = useSwipeableItemParams();
    const animStyle = useAnimatedStyle(
      () => ({
        opacity: percentOpen.value,
      }),
      [percentOpen]
    );

    return (
      <Animated.View
        style={[CommanStyles.row, CommanStyles.underlayLeft, animStyle]} // Fade in on open
      >
        <TouchableOpacity onPressIn={drag} onPress={()=>console.log('test')}>
        <Feather name={'trash-2'} size={18} color={Colors.dgo_white_600} />
        </TouchableOpacity>
      </Animated.View>
    );
  };

  const [tab, setTab] = useState(1)
  const data = tab == 1 ? DreamDestination.concat(DreamlyExperiences) : tab == 2 ? DreamDestination : tab == 3 ? DreamlyExperiences : null
  return (
    <View style={CommanStyles.appContainer}>
    <StatusBar translucent backgroundColor={'transparent'} barStyle={'dark-content'} />
      <Header
        title={'Saved'}
        leftIcon={
          <DgoButton
            icon={<Feather name={'search'} size={20} color={Colors.dgo_black_200} />}
          />
        }
        rightIcon={
          <DgoButton
            icon={<AntDesign name={'pluscircleo'} size={20} color={Colors.dgo_black_200} />}
          />
        }
      />
      <View style={CommanStyles.tabView}>
        <DgoButton
          title='All'
          accent={tab == 1 ? 'primary-light' : 'gray'}
          buttonType='line'
          borderWidth={tab == 1 ? 1 : 0}
          buttonRadius='rectangle-round-small'
          width='33%'
          onPress={() => setTab(1)}
          titleTextSize={12}
        />
        <View style={[CommanStyles.verticalLine16, { marginHorizontal: 0 }]} />
        <DgoButton
          title='Destinations'
          accent={tab == 2 ? 'primary-light' : 'gray'}
          buttonType='line'
          borderWidth={tab == 2 ? 1 : 0}
          buttonRadius='rectangle-round-small'
          width='33%'
          onPress={() => setTab(2)}
          titleTextSize={12}
        />
        <View style={[CommanStyles.verticalLine16, { marginHorizontal: 0 }]} />
        <DgoButton
          title='Experiences'
          accent={tab == 3 ? 'primary-light' : 'gray'}
          buttonType='line'
          borderWidth={tab == 3 ? 1 : 0}
          buttonRadius='rectangle-round-small'
          width='33%'
          onPress={() => setTab(3)}
          titleTextSize={12}
        />
      </View>
      {
        data == null ?
          <View style={CommanStyles.middle}>
            <Image source={require('../assets/images/empty-wiki-md.png')} style={CommanStyles.bigIcon} />
            <Text style={[CommanStyles.font16LightGray, { textAlign: 'center', paddingBottom: 40 }]}>No trips planned yet. {'\n'}Dream awaits. Let’s get started.</Text>
            <DgoButton
              title='Search Now'
              accent='white'
              buttonType='filled'
              buttonRadius='rectangle-round'
            />
          </View>
          :
          <FlatList
            data={data}
            renderItem={loading?loadingContent:renderItem}
            keyExtractor={(item, index) => index}
          />
      }

    </View>
  )
}
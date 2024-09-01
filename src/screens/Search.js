import { View, Text, TouchableOpacity, ScrollView, StatusBar, ImageBackground, Image, Dimensions, TouchableHighlight, FlatList } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../styles/Colors';
import CommanStyles from '../styles/CommanStyles';
import DgoButton from '../components/DgoButton';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RecommendedPrePlans from '../assets/arrays/RecommendedPrePlans';
import TripPlans from '../assets/arrays/TripPlans';
import DreamDestination from '../assets/arrays/DreamDestination';
import DreamlyExperiences from '../assets/arrays/DreamlyExperiences';
import ListHeader from '../components/ListHeader';
import TripsList from '../assets/arrays/TripsList';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Search({
  title,
  leftIcon,
  leftIconOnPress,
  rightIcon,
  rightIconOnPress,
  children,
  navigation
  // titleIcon
}) {

  const [offset, setOffset] = useState(0)
  const [loading, setLoading] = useState(true)
  const [loop, setLoop] = useState([1, 2, 3])

  const containerRef = useRef()
  const recommendedListRef = useRef()
  const dreamlyExperiencesListRef = useRef()

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

  const RecommendedCard = ({ plan }) => {
    return (
      <View style={CommanStyles.cardWithBottomText}>
        <ImageBackground source={{ uri: plan.imageUrl }} imageStyle={CommanStyles.recommendedPlanImageStyle} style={CommanStyles.recommendedPlanImage}>
          <LinearGradient colors={['transparent', 'transparent', Colors.dgo_black_100]} style={CommanStyles.recommendedPlanGradiant}>

            {
              TripPlans.map((p, index) => {
                return (
                  p.id == plan.planId ?
                    <View style={CommanStyles.smallBadgeWhite} key={index}>
                      <Feather name={p.icon} size={8} color={p.color} />
                      <Text style={[CommanStyles.font10, { paddingLeft: 5 }]}>{p.name}</Text>
                    </View>
                    :
                    null
                )
              })
            }

          </LinearGradient>
        </ImageBackground>
        <View style={CommanStyles.recommendedPlanCardBottom}>
          <Text style={CommanStyles.recommendedCardTitle}>{plan.title}</Text>
          <View style={CommanStyles.smallBadgeWhite}>
            <Ionicons name="location-outline" size={9} color={Colors.dgo_blue_200} />
            <Text style={[CommanStyles.font10, { paddingHorizontal: 4 }]}>{plan.mapPin}</Text>
            <View style={CommanStyles.verticalLineShort} />
            <Feather name={'calendar'} size={8} color={Colors.dgo_blue_200} />
            <Text style={[CommanStyles.font10, { paddingLeft: 4 }]}>{plan.calenderAdded}</Text>
          </View>
        </View>

      </View>)
  }

  const DreamDestinationCard = ({ plan, index }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Destination', { destination: plan })}>
        <ImageBackground source={{ uri: plan.imageUrl }} imageStyle={CommanStyles.dreamDestinationCardImage} style={[CommanStyles.dreamDestinationCardImageBackground, { marginLeft: index == 0 ? 15 : 7.5 }]}>
          <LinearGradient colors={['transparent', 'transparent', Colors.dgo_black_100]} style={CommanStyles.dreamDestinationCardGradiant}>
            <Text style={CommanStyles.whiteFont12}>{plan.title}</Text>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
    )
  }
  const DreamlyExperiencesCard = ({ plan, index }) => {
    return (
      <TouchableOpacity onPress={() => { navigation.navigate('Experience', { experience: plan }) }}>
        <ImageBackground source={{ uri: plan.imageUrl }} imageStyle={CommanStyles.dreamlyExperienceCardImage} style={[CommanStyles.dreamlyExperienceCardImageBackground, { marginLeft: index == 0 ? 15 : 7.5 }]}>
          <LinearGradient colors={['transparent', 'transparent', Colors.dgo_black_100]} style={CommanStyles.dreamlyExperienceCardGradiant}>
            <Text style={CommanStyles.whiteFont12}>{plan.title}</Text>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
    )
  }

  const LoadingRecommendeCards = () => {
    return (
      <View style={CommanStyles.cardWithBottomText}>
        <ShimmerPlaceHolder
          style={CommanStyles.recommendedPlanImage}
          LinearGradient={LinearGradient}
        />

        <View style={CommanStyles.recommendedPlanCardBottom}>
          <View style={{ width: '50%' }}>
            <ShimmerPlaceHolder
              style={{ width: '100%', height: 10, marginBottom: 3 }}
              LinearGradient={LinearGradient}
            />
            <ShimmerPlaceHolder
              style={{ width: '100%', height: 10 }}
              LinearGradient={LinearGradient}
            />
          </View>

          <ShimmerPlaceHolder
            style={[CommanStyles.smallBadgeWhite, { paddingHorizontal: 0, paddingVertical: 0, width: 60, height: 21 }]}
            LinearGradient={LinearGradient}
          />
        </View>

      </View>)
  }

  const LoadingDreamDestinationCard = ({ index }) => {
    return (
      <ShimmerPlaceHolder
        style={[CommanStyles.dreamDestinationCardImageBackground, { marginLeft: index == 0 ? 15 : 7.5 }]}
        LinearGradient={LinearGradient}
      />
    )
  }

  const LoadingDreamlyExperiencesCard = () => {
    return (
      <ShimmerPlaceHolder
        style={CommanStyles.dreamlyExperienceCardImageBackground}
        LinearGradient={LinearGradient}
      />
    )
  }
  return (
    <View style={CommanStyles.appContainer}>
      <StatusBar translucent backgroundColor={'transparent'} barStyle={offset > CommanStyles.homeSliderImage.height - 140 ? 'dark-content' : 'light-content'} />
      <View style={offset > CommanStyles.homeSliderImage.height - 140 ? CommanStyles.homeHeaderTopScrolled : CommanStyles.homeHeader}>
        {
          offset > CommanStyles.homeSliderImage.height - 140 ?
            <Image source={require('../assets/images/drimingo-logo-gray.png')} style={CommanStyles.headingLogo} />
            :
            <Image source={require('../assets/images/drimingo_logo.png')} style={CommanStyles.headingLogo} />

        }
        <TouchableHighlight underlayColor={Colors.dgo_black_500} style={CommanStyles.homeSearchViewParent}>
          <View style={CommanStyles.homeSearchView}>
            <Feather name={'search'} size={20} color={Colors.dgo_blue_200} />
            <Text style={CommanStyles.font14Gray}>Search dream destination</Text>

          </View>

        </TouchableHighlight>
      </View>

      {/* end of header */}

      {/* scroll */}
      <ScrollView
        scrollEventThrottle={16}
        onScroll={event => {
          var currentoffset = event.nativeEvent.contentOffset.y;
          var direction = currentoffset > offset ? 'down' : 'up';

          setOffset(currentoffset)
          // console.log(currentoffset)
        }
        }
        ref={containerRef}
        style={{ backgroundColor: Colors.dgo_black_500 }}
        nestedScrollEnabled={true}
        // pagingEnabled
        snapToAlignment='center'
        decelerationRate={0}
        // snapToInterval={CommanStyles.homeSliderImage.height - 140}
        contentContainerStyle={{ paddingBottom: 15 }}
      >
        {
          offset > CommanStyles.homeSliderImage.height - 140 ?
            <View style={{ height: CommanStyles.homeSliderImage.height, backgroundColor: Colors.dgo_black_500 }} />
            :
            loading ?
              <ShimmerPlaceHolder
                style={CommanStyles.homeSliderImage}
                LinearGradient={LinearGradient}
              />
              :
              <ImageBackground source={require('../assets/images/galle.jpeg')} style={CommanStyles.homeSliderImage} >
                <LinearGradient colors={['transparent', 'rgba(33, 37, 50,0.8)']} style={CommanStyles.homeSliderGradiant}>

                  <View style={CommanStyles.smallBadgeTransparent}>
                    <Ionicons name="location-outline" size={12} color={Colors.dgo_white_600} />
                    <Text style={CommanStyles.whiteFont10}>
                      Galle, Sri Lanka
                    </Text>
                  </View>

                </LinearGradient>
              </ImageBackground>
        }

        <ListHeader title={'Recommended Pre-plans'} />
        {loading ?
          <FlatList
            data={loop}
            renderItem={({ item }) => <LoadingRecommendeCards plan={item} />}
            keyExtractor={(item, index) => index}
            ref={recommendedListRef}
            horizontal={true}
            snapToAlignment='center'
            decelerationRate={"fast"}
            snapToInterval={Dimensions.get("window").width}
            showsHorizontalScrollIndicator={false}
            onLayout={() => {
              recommendedListRef.current.scrollToOffset({ offset: (windowWidth / 1.5) - 60, animated: true })
            }}
          />
          :
          <FlatList
            data={RecommendedPrePlans}
            renderItem={({ item }) => <RecommendedCard plan={item} />}
            keyExtractor={(item, index) => index}
            ref={recommendedListRef}
            horizontal={true}
            snapToAlignment='center'
            decelerationRate={"fast"}
            snapToInterval={Dimensions.get("window").width}
            showsHorizontalScrollIndicator={false}
            onLayout={() => {
              recommendedListRef.current.scrollToOffset({ offset: (windowWidth / 1.5) - 60, animated: true })
            }}
          />}
        <ListHeader title={'Dream Destinations'} />

        {loading ?
          <FlatList
            data={loop}
            renderItem={({ item, index }) => <LoadingDreamDestinationCard index={index} />}
            keyExtractor={(item, index) => index}
            horizontal={true}
          />
          :
          <FlatList
            data={TripsList}
            renderItem={({ item, index }) => <DreamDestinationCard plan={item} index={index} />}
            keyExtractor={(item, index) => index}
            horizontal={true}
          />}

        <ListHeader title={'Dreamy Experiences'} />
        {loading ?
          <FlatList
            data={DreamlyExperiences}
            ref={dreamlyExperiencesListRef}
            renderItem={({ item, index }) => <LoadingDreamlyExperiencesCard plan={item} index={index} />}
            keyExtractor={(item, index) => index}
            horizontal={true}
            onLayout={() => {
              dreamlyExperiencesListRef.current.scrollToOffset({ offset: (windowWidth / 1.5) - 60, animated: true })
            }}
          />
          :
          <FlatList
            data={DreamlyExperiences}
            ref={dreamlyExperiencesListRef}
            renderItem={({ item, index }) => <DreamlyExperiencesCard plan={item} index={index} />}
            keyExtractor={(item, index) => index}
            horizontal={true}
            onLayout={() => {
              dreamlyExperiencesListRef.current.scrollToOffset({ offset: (windowWidth / 1.5) - 60, animated: true })
            }}
          />}
      </ScrollView>
    </View>
  )
}
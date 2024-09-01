import { View, Text, Image, TouchableHighlight, ScrollView, ImageBackground, StatusBar, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Header from '../components/Header'
import { useNavigation, useRoute } from '@react-navigation/native'
import TripsList from '../assets/arrays/TripsList'
import DgoButton from '../components/DgoButton'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../styles/Colors'
import CommanStyles from '../styles/CommanStyles'
import Feather from 'react-native-vector-icons/Feather';
import ListHeader from '../components/ListHeader'
import Ionicons from 'react-native-vector-icons/Ionicons';

import LinearGradient from 'react-native-linear-gradient';
import DreamlyExperiences from '../assets/arrays/DreamlyExperiences'
import ScrollContainer from '../components/ScrollContainer'

const windowWidth = Dimensions.get("window").width;

export default function Destination() {

  const navigation = useNavigation()
  const route = useRoute()
  const containerRef = useRef()
  const [destination, setDestination] = useState(route.params?.destination)
  const [offset, setOffset] = useState(0)
  const dreamlyExperiencesListRef = useRef()
  const [viewFloatingButton, setViewFloatingButton] = useState(true)
  const [loading, setLoading] = useState(true)
  const [loop, setLoop] = useState([1, 2, 3])

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 1000);

  //   return () => {
  //     setTimeout(() => {
  //       setLoading(false)
  //     }, 1000);
  //   }
  // }, [])

  const DreamlyExperiencesCard = ({ plan, index }) => {
    return (
      <ImageBackground source={{ uri: plan.imageUrl }} imageStyle={CommanStyles.dreamlyExperienceCardImage} style={[CommanStyles.dreamlyExperienceCardImageBackground, { marginLeft: index == 0 ? 15 : 7.5 }]}>
        <LinearGradient colors={['transparent', 'transparent', Colors.dgo_black_100]} style={CommanStyles.dreamlyExperienceCardGradiant}>
          <Text style={CommanStyles.whiteFont12}>{plan.title}</Text>
        </LinearGradient>
      </ImageBackground>
    )
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
    <ScrollContainer 
    title={destination.title}
    floatingButtonText={'View All listning'}
    scrolledHeaderLeftIcon ={<DgoButton onPress={() => { navigation.goBack() }} icon={<AntDesign name="arrowleft" size={20} color={Colors.dgo_black_100} />} />}
    scrolledHeaderRightIcon ={<DgoButton buttonSize='small' accent='dark-gray' buttonType='filled' buttonRadius='round' onPress={() => { }} icon={<View style={{ padding: 6 }}><AntDesign name={'heart'} size={12} color={Colors.dgo_white_600} /></View>} />}
    headerLeftIcon={<DgoButton onPress={() => { navigation.goBack() }} icon={<AntDesign name="arrowleft" size={20} color={Colors.dgo_white_600} />} />}
    headerRightIcon={<DgoButton buttonSize='small' accent='white' buttonType='filled' buttonRadius='round' onPress={() => { }} icon={<View style={{ padding: 5 }}><AntDesign name={'heart'} size={12} color={Colors.dgo_black_300} /></View>} />}
    headerView={
    <View>
      <ImageBackground source={{ uri: destination.imageUrl }} style={[CommanStyles.homeSliderImage]} >
        <LinearGradient colors={['rgba(33, 37, 50,0.64)', 'transparent']} style={CommanStyles.homeSliderGradiant}>

          <View style={CommanStyles.row}>
            <DgoButton buttonRadius='round' buttonType='filled' icon={<View style={{ padding: 10 }}><Feather name={'chevron-left'} size={20} color={Colors.dgo_white_600} /></View>} />
            <View style={{ marginLeft: 10 }} />
            <DgoButton buttonRadius='round' buttonType='filled' icon={<View style={{ padding: 10 }}><Feather name={'chevron-right'} size={20} color={Colors.dgo_white_600} /></View>} />
          </View>
        </LinearGradient>
      </ImageBackground>

      <View style={CommanStyles.listHeader}>
        <View style={{ paddingRight: 10 }}><Ionicons name="location-outline" size={20} color={Colors.dgo_black_200} /></View>
        <Text style={CommanStyles.font18}>{destination.title}</Text>
      </View>
      <View style={CommanStyles.padding20Container}>
        <View style={[CommanStyles.row, { paddingBottom: 15 }]}>
          <View style={CommanStyles.greenDot} />
          <Text style={CommanStyles.font14Gray}>Live Weather: </Text>
          <Text style={CommanStyles.font14}>Rain Cloud</Text>
          <View style={[CommanStyles.verticalLine16, { marginHorizontal: 10 }]} />
          <Text style={CommanStyles.font14}>20 °C</Text>


        </View>

        <Text style={[CommanStyles.font12, { fontWeight: '400' }]}>{destination.description.substring(0, 280)}...</Text>
        <View style={[CommanStyles.row, { paddingTop: 15 }]}>
          <Text style={CommanStyles.font12Gray}>Love to read more?</Text>
          <Text onPress={() => navigation.navigate('DestinationReadMore', { data: destination })} style={[CommanStyles.font12, { color: Colors.dgo_blue_200 }]}> Click Here.</Text>
        </View>
      </View>
    </View>
    }
    body={<View>

<ListHeader title={'Most Popular'} />
        <FlatList
          data={DreamlyExperiences}
          ref={dreamlyExperiencesListRef}
          renderItem={({ item, index }) => <DreamlyExperiencesCard plan={item} index={index} />}
          keyExtractor={(item, index) => index}
          horizontal={true}
          onLayout={() => {
            dreamlyExperiencesListRef.current.scrollToOffset({ offset: (windowWidth / 1.5) - 60, animated: true })
          }}
        />

        <ListHeader title={'Dream Destinations'} />
        <FlatList
          data={TripsList}
          renderItem={({ item, index }) => <DreamDestinationCard plan={item} index={index} />}
          keyExtractor={(item, index) => index}
          horizontal={true}
        />

        <ListHeader title={'Dreamy Experiences'} />
        <FlatList
          data={DreamlyExperiences}
          ref={dreamlyExperiencesListRef}
          renderItem={({ item, index }) => <DreamlyExperiencesCard plan={item} index={index} />}
          keyExtractor={(item, index) => index}
          horizontal={true}
          onLayout={() => {
            dreamlyExperiencesListRef.current.scrollToOffset({ offset: (windowWidth / 1.5) - 60, animated: true })
          }}
        />
        <View style={{paddingLeft:20,paddingBottom:50}}>
        <DgoButton
          title='View All Listnings'
          accent='black'
          buttonType='filled'
          width='full'
          buttonRadius='rectangle-round'
          onPress={() => navigation.navigate('ExperienceListing', { data: destination })}
        />

        </View>
    </View>}
    floatingButtonOnPress={() => navigation.navigate('ExperienceListing', { data: destination })}
    />
    // <View style={CommanStyles.appContainer}>
    //   <StatusBar translucent backgroundColor={'transparent'} barStyle={offset > CommanStyles.homeSliderImage.height - 100 ? 'dark-content' : 'light-content'} />
    //   {
    //     offset > CommanStyles.homeSliderImage.height - 100 ?
    //       <Header
    //         title={destination.title}
    //         leftIcon={<DgoButton onPress={() => { navigation.goBack() }} icon={<AntDesign name="arrowleft" size={20} color={Colors.dgo_black_100} />} />}
    //         rightIcon={<DgoButton buttonSize='small' accent='dark-gray' buttonType='filled' buttonRadius='round' onPress={() => { }} icon={<View style={{ padding: 6 }}><AntDesign name={'heart'} size={12} color={Colors.dgo_white_600} /></View>} />}
    //       />
    //       :
    //       <View style={[CommanStyles.header, { backgroundColor: 'transparent', position: 'absolute', top: 0, left: 0, zIndex: 9999, borderColor: 'transparent' }]}>
    //         <View style={CommanStyles.headerInner}>
    //           <DgoButton onPress={() => { navigation.goBack() }} icon={<AntDesign name="arrowleft" size={20} color={Colors.dgo_white_600} />} />
    //           <Text style={CommanStyles.font18}></Text>
    //           <DgoButton buttonSize='small' accent='white' buttonType='filled' buttonRadius='round' onPress={() => { }} icon={<View style={{ padding: 5 }}><AntDesign name={'heart'} size={12} color={Colors.dgo_black_300} /></View>} />
    //         </View>

    //       </View>}
    //   <ScrollView
    //     scrollEventThrottle={16}
    //     onScroll={event => {
    //       var currentoffset = event.nativeEvent.contentOffset.y;
    //       var direction = currentoffset > offset ? 'down' : 'up';

    //       setOffset(currentoffset)
    //       // console.log(currentoffset)
    //     }
    //     }
    //     ref={containerRef}
    //     style={{ backgroundColor: Colors.dgo_black_500 }}
    //     nestedScrollEnabled={true}
    //     // pagingEnabled
    //     snapToAlignment='center'
    //     decelerationRate={0}
    //     snapToInterval={CommanStyles.homeSliderImage.height - 100}
    //   >
    //     {
    //       offset > CommanStyles.homeSliderImage.height - 100 ?
    //         <View style={{ height: CommanStyles.homeSliderImage.height, backgroundColor: Colors.dgo_black_500 }} />
    //         :
    //         <View>
    //           <ImageBackground source={{ uri: destination.imageUrl }} style={[CommanStyles.homeSliderImage]} >
    //             <LinearGradient colors={['rgba(33, 37, 50,0.64)', 'transparent']} style={CommanStyles.homeSliderGradiant}>

    //               <View style={CommanStyles.row}>
    //                 <DgoButton buttonRadius='round' buttonType='filled' icon={<View style={{ padding: 10 }}><Feather name={'chevron-left'} size={20} color={Colors.dgo_white_600} /></View>} />
    //                 <View style={{ marginLeft: 10 }} />
    //                 <DgoButton buttonRadius='round' buttonType='filled' icon={<View style={{ padding: 10 }}><Feather name={'chevron-right'} size={20} color={Colors.dgo_white_600} /></View>} />
    //               </View>
    //             </LinearGradient>
    //           </ImageBackground>

    //           <View style={CommanStyles.listHeader}>
    //             <View style={{ paddingRight: 10 }}><Ionicons name="location-outline" size={20} color={Colors.dgo_black_200} /></View>
    //             <Text style={CommanStyles.font18}>{destination.title}</Text>
    //           </View>
    //           <View style={CommanStyles.padding20Container}>
    //             <View style={[CommanStyles.row, { paddingBottom: 15 }]}>
    //               <View style={CommanStyles.greenDot} />
    //               <Text style={CommanStyles.font14Gray}>Live Weather: </Text>
    //               <Text style={CommanStyles.font14}>Rain Cloud</Text>
    //               <View style={[CommanStyles.verticalLine16, { marginHorizontal: 10 }]} />
    //               <Text style={CommanStyles.font14}>20 °C</Text>


    //             </View>

    //             <Text style={[CommanStyles.font12, { fontWeight: '400' }]}>{destination.description.substring(0, 280)}...</Text>
    //             <View style={[CommanStyles.row, { paddingTop: 15 }]}>
    //               <Text style={CommanStyles.font12Gray}>Love to read more?</Text>
    //               <Text onPress={() => navigation.navigate('DestinationReadMore', { data: destination })} style={[CommanStyles.font12, { color: Colors.dgo_blue_200 }]}> Click Here.</Text>
    //             </View>
    //           </View>
    //         </View>
    //     }
    //     <ListHeader title={'Most Popular'} />
    //     <FlatList
    //       data={DreamlyExperiences}
    //       ref={dreamlyExperiencesListRef}
    //       renderItem={({ item, index }) => <DreamlyExperiencesCard plan={item} index={index} />}
    //       keyExtractor={(item, index) => index}
    //       horizontal={true}
    //       onLayout={() => {
    //         dreamlyExperiencesListRef.current.scrollToOffset({ offset: (windowWidth / 1.5) - 60, animated: true })
    //       }}
    //     />

    //     <ListHeader title={'Dream Destinations'} />
    //     <FlatList
    //       data={TripsList}
    //       renderItem={({ item, index }) => <DreamDestinationCard plan={item} index={index} />}
    //       keyExtractor={(item, index) => index}
    //       horizontal={true}
    //     />

    //     <ListHeader title={'Dreamy Experiences'} />
    //     <FlatList
    //       data={DreamlyExperiences}
    //       ref={dreamlyExperiencesListRef}
    //       renderItem={({ item, index }) => <DreamlyExperiencesCard plan={item} index={index} />}
    //       keyExtractor={(item, index) => index}
    //       horizontal={true}
    //       onLayout={() => {
    //         dreamlyExperiencesListRef.current.scrollToOffset({ offset: (windowWidth / 1.5) - 60, animated: true })
    //       }}
    //     />
    //     <View style={{paddingLeft:20,paddingBottom:50}}>
    //     <DgoButton
    //       title='View All Listnings'
    //       accent='black'
    //       buttonType='filled'
    //       width='full'
    //       buttonRadius='rectangle-round'
    //       onPress={() => navigation.navigate('ExperienceListing', { data: destination })}
    //     />

    //     </View>

    //   </ScrollView>
    //       {
    //         offset < CommanStyles.homeSliderImage.height - 100 ?
    //   <TouchableOpacity style={CommanStyles.floatingButton} onPress={() => navigation.navigate('ExperienceListing', { data: destination })}>
    //     <Text style={CommanStyles.whiteFont16}>View All Listning</Text>
    //   </TouchableOpacity>
    //   :
    //   null
    //       }
    // </View>
  )
}
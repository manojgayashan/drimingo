import { View, Text, StatusBar, FlatList,ImageBackground } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import DgoButton from '../components/DgoButton'
import { useNavigation, useRoute } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../styles/Colors'
import CommanStyles from '../styles/CommanStyles'
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DreamlyExperiences from '../assets/arrays/DreamlyExperiences'
import LinearGradient from 'react-native-linear-gradient'
import Entypo from 'react-native-vector-icons/Entypo';

export default function ExperienceListing() {
  const navigation = useNavigation()
  const route = useRoute()
  const [destination, setDestination] = useState(route.params?.data)

  const Item = ({item}) => (
    <View
    style={[
      CommanStyles.row,
      { backgroundColor: item.backgroundColor, height: item.height },
    ]}
  >
    <View>
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
              icon={<Entypo name={'dots-three-horizontal'} size={16} color={Colors.dgo_blue_200} />}
            />
            <DgoButton
              onPress={() => { }}
              icon={<AntDesign name={'heart'} size={12} color={Colors.dgo_black_300} />}
            />
          </View>
        </View>
      </View>

    </View>
  </View>
  )
  return (
    <View style={[CommanStyles.appContainer,{backgroundColor:Colors.dgo_black_500}]}>
      <StatusBar translucent backgroundColor={'transparent'} barStyle={'dark-content'} />
      <Header
        title={'Explore Experiences'}
        leftIcon={<DgoButton onPress={() => { navigation.goBack() }} icon={<AntDesign name="arrowleft" size={20} color={Colors.dgo_black_100} />} />}
        rightIcon={<DgoButton onPress={() => { }} icon={<Feather name={'filter'} size={20} color={Colors.dgo_black_200} />} />}
      />
      <View style={CommanStyles.listHeader}>
        <View style={{ paddingRight: 10 }}><Ionicons name="location-outline" size={20} color={Colors.dgo_black_200} /></View>
        <Text style={CommanStyles.font18}>{destination.title}</Text>
      </View>

      <FlatList
            data={DreamlyExperiences}
            // renderItem={renderItem}
            renderItem={({item}) => <Item item={item} />}
            keyExtractor={(item, index) => index}
          />
    </View>
  )
}
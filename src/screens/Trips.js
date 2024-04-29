import { View, Text, SectionList, Image, ImageBackground } from 'react-native'
import React from 'react'
import CommanStyles from '../styles/CommanStyles'
import Header from '../components/Header'
import DgoButton from '../components/DgoButton'
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '../styles/Colors'
import ListHeader from '../components/ListHeader'
import TripsList from '../assets/arrays/TripsList'
import moment from 'moment'
import LinearGradient from 'react-native-linear-gradient'

export default function Trips() {

  const now = new Date();
  const monthCutoff = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000); // 30 days ago

  const DATA = [
    {
      title: 'Upcoming soon',
      data: TripsList==null?null:TripsList.filter((trip) => new Date(trip.date) <= monthCutoff),
    },
    {
      title: 'Next on plan',
      data: TripsList==null?null:TripsList.filter((trip) => new Date(trip.date) > monthCutoff),
    }
  ];

  const ListCard=({item})=>{
    return(
      <View style={CommanStyles.tripListView}>
        <ImageBackground source={{uri:item.imageUrl}} imageStyle={CommanStyles.tripListImage} style={CommanStyles.tripListImageBackground}>
        <LinearGradient colors={['transparent','transparent', Colors.dgo_black_100]} style={CommanStyles.tripListImage}>
</LinearGradient>
        </ImageBackground>
        <View style={CommanStyles.tripCardInnerView}>
          <View>
            <Text>{item.title}</Text>
          </View>
          <View style={CommanStyles.tripCardInnerViewRight}>          
          <DgoButton
            icon={<Entypo name={'dots-three-horizontal'} size={16} color={Colors.dgo_black_200} />}
          />          
          <DgoButton
          icon={<AntDesign name={'clouddownload'} size={20} color={Colors.dgo_black_200} />}
        />
          </View>
        </View>
        
      </View>
    )
  }
  return (
    <View style={CommanStyles.appContainer}>
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

      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (<ListCard item={item}/>)}
        renderSectionHeader={({ section: { title } }) => (
          <ListHeader title={title}/>
        )}
      />
    </View>
  )
}
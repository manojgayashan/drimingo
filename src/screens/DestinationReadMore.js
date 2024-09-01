import { View, Text, StatusBar, Platform } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import DgoButton from '../components/DgoButton'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../styles/Colors';
import { useNavigation, useRoute } from '@react-navigation/native';
import CommanStyles from '../styles/CommanStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapView, { Marker } from 'react-native-maps';

export default function DestinationReadMore() {
  const route = useRoute()
  const [destination, setDestination] = useState(route.params?.data)
  const navigation = useNavigation()

  const [reg, setReg] = useState({
    latitude: destination.latitude,
    longitude: destination.longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,})
  return (
    <View style={CommanStyles.appContainer}>
      <StatusBar translucent backgroundColor={'transparent'} barStyle={'dark-content'} />

      <Header
        title={'Read More'}
        leftIcon={<DgoButton onPress={() => { navigation.goBack() }} icon={<AntDesign name="arrowleft" size={20} color={Colors.dgo_black_100} />} />}
        rightIcon={<DgoButton onPress={() => { }} icon={<Feather name={'map'} size={20} color={Colors.dgo_black_200} />} />}
      />
      <View style={CommanStyles.listHeader}>
        <View style={{ paddingRight: 10 }}><Ionicons name="location-outline" size={20} color={Colors.dgo_black_200} /></View>
        <Text style={CommanStyles.font18}>{destination.title}</Text>
      </View>

      <View style={CommanStyles.padding20Container}>
        <Text style={[CommanStyles.font12, { fontWeight: '400' }]}>{destination.description}</Text>

        <View style={{ paddingVertical: 15 }}>
          <Text style={[CommanStyles.font12, { paddingBottom: 5 }]}>Country : <Text style={{ fontWeight: '400' }}>{destination.country}</Text></Text>
          <Text style={[CommanStyles.font12, { paddingBottom: 5 }]}>District : <Text style={{ fontWeight: '400' }}>{destination.district}</Text></Text>
          <Text style={[CommanStyles.font12, { paddingBottom: 5 }]}>Elevation : <Text style={{ fontWeight: '400' }}>{destination.elevation.toLocaleString()} m {"(" + ((destination.elevation) * 3.28084).toLocaleString() + " ft)"}</Text></Text>
          <Text style={[CommanStyles.font12, { paddingBottom: 5 }]}>Post Code : <Text style={{ fontWeight: '400' }}>{destination.postalCode}</Text></Text>
          <Text style={[CommanStyles.font12, { paddingBottom: 5 }]}>Province : <Text style={{ fontWeight: '400' }}>{destination.province} Province</Text></Text>
        </View>
        <View style={[CommanStyles.card,{marginHorizontal:0,marginBottom:20}]}>
          <View style={CommanStyles.spaceBetweenRow}>
            <View style={[CommanStyles.row,{alignItems:'flex-start'}]}>
            <Feather name={'cloud-rain'} size={48} color={Colors.dgo_black_200} />
            <View style={{marginLeft:20}}>
              <Text style={[CommanStyles.font14Gray,{paddingLeft:0,paddingBottom:10}]}>Wheather: <Text style={CommanStyles.font14}>Rainy Cloud</Text></Text>
              <Text style={[CommanStyles.font12, { fontWeight: '400' }]}>Precipitation: 77%</Text>
              <Text style={[CommanStyles.font12, { fontWeight: '400' }]}>Humidity: 99%</Text>
              <Text style={[CommanStyles.font12, { fontWeight: '400' }]}>Wind: 0 km/h</Text>
            </View>
            </View>
            <View style={{marginLeft:20,alignItems:'flex-end'}}>
              <Text style={[CommanStyles.blueFont14,{paddingBottom:10}]}>20 °C</Text>
              <Text style={[CommanStyles.font12, { fontWeight: '400' }]}>Tuesday</Text>
              <Text style={[CommanStyles.font12, { fontWeight: '400' }]}>01:00 PM</Text>
              <Text style={[CommanStyles.font12, { fontWeight: '400' }]}>GMT+05:30</Text>
            </View>
          </View>
          <View style={[CommanStyles.spaceBetweenRow,{alignItems:'center',paddingTop:10}]}>
          <Feather name={'info'} size={12} color={Colors.dgo_black_100} />
          <Text style={CommanStyles.font10Gray}>powered by weather.com</Text>
          </View>
        </View>
        {/* <View style={{flex:1}}>
        <MapView
          style={CommanStyles.mapView}
          initialRegion={reg}
          mapType={Platform.OS == "android" ? "none" : "standard"}
        >
          <Marker
            coordinate={{ latitude: destination.latitude, longitude: destination.longitude }}
            title={destination.title}
            description={destination.description}
          />
        </MapView>
        </View> */}
        <DgoButton
          title='Open in Maps'
          rightIcon={<Feather name={'external-link'} size={20} color={Colors.dgo_blue_200} />}
          accent='primary-light'
          buttonType='line'
          borderWidth={1}
          buttonRadius='rectangle-round'
        />
      </View>
    </View>
  )
}
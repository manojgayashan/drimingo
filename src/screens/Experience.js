import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import ScrollContainer from '../components/ScrollContainer'
import { useNavigation, useRoute } from '@react-navigation/native'
import DgoButton from '../components/DgoButton'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../styles/Colors'
import CommanStyles from '../styles/CommanStyles'
import Feather from 'react-native-vector-icons/Feather';
import ListHeader from '../components/ListHeader'
import Octicons from 'react-native-vector-icons/Octicons';
import LinearGradient from 'react-native-linear-gradient';

export default function Experience() {
    const route = useRoute()
    const [experience, setExperience] = useState(route.params?.experience)
    const navigation = useNavigation()
    const [tabIndex, setTabIndex] = useState(0)
    return (
        <ScrollContainer
            title={experience.title}
            floatingButtonText={'Add to Trips'}
            scrolledHeaderLeftIcon={<DgoButton onPress={() => { navigation.goBack() }} icon={<AntDesign name="arrowleft" size={20} color={Colors.dgo_black_100} />} />}
            scrolledHeaderRightIcon={<DgoButton buttonSize='small' accent='dark-gray' buttonType='filled' buttonRadius='round' onPress={() => { }} icon={<View style={{ padding: 6 }}><AntDesign name={'heart'} size={12} color={Colors.dgo_white_600} /></View>} />}
            headerLeftIcon={<DgoButton onPress={() => { navigation.goBack() }} icon={<AntDesign name="arrowleft" size={20} color={Colors.dgo_white_600} />} />}
            headerRightIcon={<DgoButton buttonSize='small' accent='white' buttonType='filled' buttonRadius='round' onPress={() => { }} icon={<View style={{ padding: 5 }}><AntDesign name={'heart'} size={12} color={Colors.dgo_black_300} /></View>} />}
            headerView={<View>
                <ImageBackground source={{ uri: experience.imageUrl }} style={[CommanStyles.homeSliderImage]} >
                    <LinearGradient colors={['rgba(33, 37, 50,0.64)', 'transparent']} style={CommanStyles.homeSliderGradiant}>

                        <View style={CommanStyles.row}>
                            <DgoButton buttonRadius='round' buttonType='filled' icon={<View style={{ padding: 10 }}><Feather name={'chevron-left'} size={20} color={Colors.dgo_white_600} /></View>} />
                            <View style={{ marginLeft: 10 }} />
                            <DgoButton buttonRadius='round' buttonType='filled' icon={<View style={{ padding: 10 }}><Feather name={'chevron-right'} size={20} color={Colors.dgo_white_600} /></View>} />
                        </View>
                    </LinearGradient>
                </ImageBackground>
            </View>}
            tabs={
                <View style={CommanStyles.experienceTabs}>
                    <TouchableOpacity onPress={() => setTabIndex(0)} style={CommanStyles.experienceTabsParent}>
                        <View style={CommanStyles.experienceTabsInner}>
                            <Feather name={'info'} size={15} color={tabIndex == 0 ? Colors.dgo_blue_200 : Colors.dgo_black_100} />
                            <Text style={[CommanStyles.font12, { paddingLeft: 8, color: tabIndex == 0 ? Colors.dgo_blue_200 : Colors.dgo_black_100 }]}>Intro</Text>
                        </View>
                        <View style={{ height: 4, backgroundColor: tabIndex == 0 ? Colors.dgo_blue_200 : Colors.dgo_black_400, width: '100%' }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setTabIndex(1)} style={CommanStyles.experienceTabsParent}>
                        <View style={CommanStyles.experienceTabsInner}>
                            <Octicons name={'shield-check'} size={15} color={tabIndex == 1 ? Colors.dgo_blue_200 : Colors.dgo_black_100} />
                            <Text style={[CommanStyles.font12, { paddingLeft: 8, color: tabIndex == 1 ? Colors.dgo_blue_200 : Colors.dgo_black_100 }]}>Safety</Text>
                        </View>
                        <View style={{ height: 4, backgroundColor: tabIndex == 1 ? Colors.dgo_blue_200 : Colors.dgo_black_400, width: '100%' }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setTabIndex(2)} style={CommanStyles.experienceTabsParent}>
                        <View style={CommanStyles.experienceTabsInner}>
                            <Feather name={'compass'} size={15} color={tabIndex == 2 ? Colors.dgo_blue_200 : Colors.dgo_black_100} />
                            <Text style={[CommanStyles.font12, { paddingLeft: 8, color: tabIndex == 2 ? Colors.dgo_blue_200 : Colors.dgo_black_100 }]}>Trip Guide</Text>
                        </View>
                        <View style={{ height: 4, backgroundColor: tabIndex == 2 ? Colors.dgo_blue_200 : Colors.dgo_black_400, width: '100%' }} />
                    </TouchableOpacity>
                </View>
            }
            body={
                tabIndex == 0 ?
                    <>
                        <View style={CommanStyles.listHeader}>
                            <Text style={CommanStyles.font18}>{experience.title}</Text>
                        </View>
                        <View style={CommanStyles.padding20Container}>
                            <View style={[CommanStyles.row, { paddingBottom: 15 }]}>
                                <View style={CommanStyles.greenDot} />
                                <Text style={CommanStyles.font14Gray}>Live Weather: </Text>
                                <Text style={CommanStyles.font14}>Rain Cloud</Text>
                                <View style={[CommanStyles.verticalLine16, { marginHorizontal: 10 }]} />
                                <Text style={CommanStyles.font14}>20 °C</Text>
                            </View>
                            <Text style={CommanStyles.font12}>{experience.description}</Text>
                        </View>

                        <ListHeader title={'History'} />
                        <View style={CommanStyles.padding20Container}>
                            <Text style={CommanStyles.font12}>{experience.history}</Text>
                        </View>
                        <ListHeader title={'Stats & Highlights'} />
                        <View style={CommanStyles.padding20Container}>
                            <Text style={[CommanStyles.font12, { paddingBottom: 5 }]}>Country : <Text style={{ fontWeight: '400' }}>{experience.country}</Text></Text>
                            <Text style={[CommanStyles.font12, { paddingBottom: 5 }]}>District : <Text style={{ fontWeight: '400' }}>{experience.district}</Text></Text>
                            <Text style={[CommanStyles.font12, { paddingBottom: 5 }]}>Elevation : <Text style={{ fontWeight: '400' }}>{experience.elevation.toLocaleString()} m {"(" + ((experience.elevation) * 3.28084).toLocaleString() + " ft)"}</Text></Text>
                            <Text style={[CommanStyles.font12, { paddingBottom: 5 }]}>Post Code : <Text style={{ fontWeight: '400' }}>{experience.postalCode}</Text></Text>
                            <Text style={[CommanStyles.font12, { paddingBottom: 5 }]}>Province : <Text style={{ fontWeight: '400' }}>{experience.province} Province</Text></Text>
                        </View>


                        <ListHeader title={'Country Specs'} />
                        <View style={CommanStyles.padding20Container}>
                            <Text style={[CommanStyles.font12, { paddingBottom: 5 }]}>Currency : <Text style={{ fontWeight: '400' }}>Sri Lankan rupees (LKR)</Text></Text>
                            <Text style={[CommanStyles.font12, { paddingBottom: 5 }]}>Telephone Code : <Text style={{ fontWeight: '400' }}>+94 </Text></Text>
                            <Text style={[CommanStyles.font12, { paddingBottom: 5 }]}>Local Emergency : <Text style={{ fontWeight: '400', color: Colors.dgo_blue_200, textDecorationLine: 'underline' }}>119 Police</Text></Text>
                            <Text style={[CommanStyles.font12, { paddingBottom: 5 }]}>Major Languages : <Text style={{ fontWeight: '400' }}>Sinhala, Tamil, English</Text></Text>
                            <Text style={[CommanStyles.font12, { paddingBottom: 5 }]}>Time Zone <Text style={{ fontWeight: '400' }}>GMT+5:30</Text></Text>
                            <Text style={[CommanStyles.font12, { paddingBottom: 5 }]}>Electricity <Text style={{ fontWeight: '400' }}>230 V / 50 Hz / Plug types - D, G </Text></Text>
                            <Text style={[CommanStyles.font12, { paddingBottom: 5 }]}>Road Driving Side : <Text style={{ fontWeight: '400' }}>Left</Text></Text>
                        </View>

                        <View style={CommanStyles.padding20Container}>
                            <DgoButton
                                title='Add to Trips'
                                accent='black'
                                buttonType='filled'
                                width='full'
                                buttonRadius='rectangle-round'
                                onPress={() => navigation.navigate('ExperienceListing', { data: destination })}
                            />
                        </View>
                    </>
                    :
                    tabIndex == 1 ?
                        <>

                            <View style={[CommanStyles.card, { marginTop: 15, marginHorizontal: 15 }]}>
                                <View style={CommanStyles.spaceBetweenRow}>
                                    <View style={[CommanStyles.row, { alignItems: 'flex-start' }]}>
                                        <Feather name={'cloud-snow'} size={48} color={Colors.dgo_black_100} />
                                        <View style={{ marginLeft: 20 }}>
                                            <Text style={[CommanStyles.font14Gray, { paddingLeft: 0, paddingBottom: 10 }]}>Wheather: <Text style={CommanStyles.font14}>Rainy Cloud</Text></Text>
                                            <Text style={[CommanStyles.font12, { fontWeight: '400' }]}>Precipitation: 77%</Text>
                                            <Text style={[CommanStyles.font12, { fontWeight: '400' }]}>Humidity: 99%</Text>
                                            <Text style={[CommanStyles.font12, { fontWeight: '400' }]}>Wind: 0 km/h</Text>
                                        </View>
                                    </View>
                                    <View style={{ marginLeft: 20, alignItems: 'flex-end' }}>
                                        <Text style={[CommanStyles.blueFont14, { paddingBottom: 10 }]}>20 °C</Text>
                                        <Text style={[CommanStyles.font12, { fontWeight: '400' }]}>Tuesday</Text>
                                        <Text style={[CommanStyles.font12, { fontWeight: '400' }]}>01:00 PM</Text>
                                        <Text style={[CommanStyles.font12, { fontWeight: '400' }]}>GMT+05:30</Text>
                                    </View>
                                </View>
                                <View style={[CommanStyles.spaceBetweenRow, { alignItems: 'center', paddingTop: 10 }]}>
                                    <Feather name={'info'} size={12} color={Colors.dgo_black_100} />
                                    <Text style={CommanStyles.font10Gray}>powered by weather.com</Text>
                                </View>
                            </View>


                            <View style={[CommanStyles.card, { marginTop: 15, marginHorizontal: 15 }]}>
                                <View style={[CommanStyles.topAlignedRow, { width: '95%' }]}>
                                    <Feather name={'cloud-rain'} size={16} color={Colors.dgo_blue_200} />
                                    <View style={{ paddingLeft: 15 }}>
                                        <Text style={CommanStyles.font12}>Natural disasters & emergencies</Text>
                                        <Text style={[CommanStyles.font12, { fontWeight: '400', paddingVertical: 8 }]}>The monsoon rains as they do sometimes cause flooding in areas of the country, and localised landslides can cause temporary road closures. It’s a good idea to check the weather before visiting.</Text>
                                        <View style={CommanStyles.row}>
                                            <Feather name={'info'} size={12} color={Colors.dgo_black_100} />
                                            <Text style={[CommanStyles.font10Gray, { paddingLeft: 5 }]}>read more on https://www.meteo.gov.lk</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>


                            <View style={[CommanStyles.card, { marginTop: 15, marginHorizontal: 15 }]}>
                                <View style={[CommanStyles.topAlignedRow, { width: '95%' }]}>
                                    <Image source={require('../assets/images/face-id.png')} style={{ width: 16, height: 16 }} />
                                    <View style={{ paddingLeft: 15 }}>
                                        <Text style={CommanStyles.font12}>Keep your personal id with you</Text>
                                        <Text style={[CommanStyles.font12, { fontWeight: '400', paddingVertical: 8 }]}>You must carry an official form of identification at all times. Your passport is an acceptable form of identification. If you do not have it with you and are stopped or detained by the authorities</Text>
                                        <View style={CommanStyles.row}>
                                            <Feather name={'info'} size={12} color={Colors.dgo_black_100} />
                                            <Text style={[CommanStyles.font10Gray, { paddingLeft: 5 }]}>read more on www.gov.uk/foreign-travel-advice..</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>


                            <View style={[CommanStyles.card, { marginTop: 15, marginHorizontal: 15 }]}>
                                <View style={[CommanStyles.topAlignedRow, { width: '95%' }]}>
                                    <Feather name={'camera-off'} size={16} color={Colors.dgo_blue_200} />
                                    <View style={{ paddingLeft: 15 }}>
                                        <Text style={CommanStyles.font12}>Using cameras and drones</Text>
                                        <Text style={[CommanStyles.font12, { fontWeight: '400', paddingVertical: 8 }]}>Do not fly drones near, use binoculars to look at, or take photographs of any military bases, government buildings or vehicles used by VIPs. Please check how to register and operate drones with in Sri Lanka.</Text>
                                        <View style={CommanStyles.row}>
                                            <Feather name={'info'} size={12} color={Colors.dgo_black_100} />
                                            <Text style={[CommanStyles.font10Gray, { paddingLeft: 5 }]}>read more on https://www.caa.lk/en/faqs/on-dron..</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>


                            <View style={[CommanStyles.card, { marginTop: 15, marginHorizontal: 15 }]}>
                                <View style={[CommanStyles.topAlignedRow, { width: '95%' }]}>
                                    <Feather name={'users'} size={16} color={Colors.dgo_blue_200} />
                                    <View style={{ paddingLeft: 15 }}>
                                        <Text style={CommanStyles.font12}>LGBT+ travellers</Text>
                                        <Text style={[CommanStyles.font12, { fontWeight: '400', paddingVertical: 8 }]}>Lesbian, gay, bisexual, transgender, queer, intersex, and asexual (LGBTQIA+) travellers can face unique challenges when traveling abroad. Laws and attitudes in some countries may affect safety and ease of travel. Legal protections vary from country to country. Beware of it.</Text>
                                        <View style={CommanStyles.row}>
                                            <Feather name={'info'} size={12} color={Colors.dgo_black_100} />
                                            <Text style={[CommanStyles.font10Gray, { paddingLeft: 5 }]}>read more on https://travel.state.gov/travel/lgbt..</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>


                            <View style={[CommanStyles.card, { marginTop: 15, marginHorizontal: 15 }]}>
                                <View style={[CommanStyles.topAlignedRow, { width: '95%' }]}>
                                    <Feather name={'cloud-rain'} size={16} color={Colors.dgo_blue_200} />
                                    <View style={{ paddingLeft: 15 }}>
                                        <Text style={CommanStyles.font12}>Medical emergencies</Text>
                                        <Text style={[CommanStyles.font12, { fontWeight: '400', paddingVertical: 8 }]}>Take a good medical kit with you. You never know when you might need it. Also avoid being bitten by mosquitoes, Dengue fever is legitimately a concern. Few emergency contacts below. </Text>
                                        <View style={CommanStyles.row}>
                                            <Text style={CommanStyles.font12}>Local Emergency : </Text>
                                            <Text style={[CommanStyles.font12, { paddingLeft: 5,color:Colors.dgo_blue_200,textDecorationLine:'underline' }]}>119 Police</Text>
                                        </View>
                                        <View style={CommanStyles.row}>
                                            <Text style={CommanStyles.font12}>Ambulance Service : </Text>
                                            <Text style={[CommanStyles.font12, { paddingLeft: 5,color:Colors.dgo_blue_200,textDecorationLine:'underline',paddingTop:8 }]}>1990</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                            <View style={CommanStyles.padding20Container}>
                                <DgoButton
                                    title='Add to Trips'
                                    accent='black'
                                    buttonType='filled'
                                    width='full'
                                    buttonRadius='rectangle-round'
                                    onPress={() => navigation.navigate('ExperienceListing', { data: destination })}
                                />
                            </View>
                        </>
                        :
                        null
            }
        />
    )
}
import { View, Text, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import CommanStyles from '../styles/CommanStyles'
import Header from './Header'
import DgoButton from './DgoButton'
import Feather from 'react-native-vector-icons/Feather';
import ListHeader from '../components/ListHeader'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../styles/Colors'

export default function ScrollContainer({
    title,
    headerView,
    body,
    floatingButtonText,
    floatingButtonOnPress,
    headerLeftIcon,
    headerRightIcon,
    scrolledHeaderLeftIcon,
    scrolledHeaderRightIcon,
    tabs
}) {

    const [offset, setOffset] = useState(0)
    const containerRef = useRef()

    return (
        <View style={CommanStyles.appContainer}>
            <StatusBar translucent backgroundColor={'transparent'} barStyle={offset > CommanStyles.homeSliderImage.height - 100 ? 'dark-content' : 'light-content'} />
            {
                offset > CommanStyles.homeSliderImage.height - 100 ?
                <><Header
                        tabs={tabs?true:false}
                        title={title.length>=26?title.slice(0, 26)+"...":title}
                        leftIcon={scrolledHeaderLeftIcon}
                        rightIcon={scrolledHeaderRightIcon}
                        // leftIcon={<DgoButton onPress={() => { navigation.goBack() }} icon={<AntDesign name="arrowleft" size={20} color={Colors.dgo_black_100} />} />}
                        // rightIcon={<DgoButton buttonSize='small' accent='dark-gray' buttonType='filled' buttonRadius='round' onPress={() => { }} icon={<View style={{ padding: 6 }}><AntDesign name={'heart'} size={12} color={Colors.dgo_white_600} /></View>} />}
                    />
                    {tabs}
                </>
                    
                    :
                    <View style={[CommanStyles.header, { backgroundColor: 'transparent', position: 'absolute', top: 0, left: 0, zIndex: 9999, borderColor: 'transparent' }]}>
                        <View style={CommanStyles.headerInner}>
                        {headerLeftIcon}
                            <Text style={CommanStyles.font18}></Text>
                        {headerRightIcon}
                        </View>

                    </View>}
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
                // snapToInterval={CommanStyles.homeSliderImage.height - 100}
            >
                {
                    offset > CommanStyles.homeSliderImage.height - 100 ?
                        <View style={{ height: CommanStyles.homeSliderImage.height, backgroundColor: Colors.dgo_black_500 }} />
                        :
                        <View>
                            {headerView}
                            {tabs}
                        </View>
                }
                {
                    body
                }

            </ScrollView>
            {
                offset < CommanStyles.homeSliderImage.height - 100 ?
                    <TouchableOpacity style={CommanStyles.floatingButton} onPress={floatingButtonOnPress}>
                        <Text style={CommanStyles.whiteFont16}>{floatingButtonText}</Text>
                    </TouchableOpacity>
                    :
                    null
            }
        </View>
    )
}
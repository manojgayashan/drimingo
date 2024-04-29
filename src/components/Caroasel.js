import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  StyleSheet,
  ImageBackground
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import AntDesign from 'react-native-vector-icons/AntDesign';
import CommanStyles from "../styles/CommanStyles";
import LinearGradient from 'react-native-linear-gradient';
import Colors from "../styles/Colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Carousel({ data, currentIndex, autoPlay, autoPlayInterval, toggle }) {

  const scrollView = useRef();
  const [current, setCurrent] = useState(currentIndex);

  const AutoPlay = () => {
    var total = data.length - 1;

    if (autoPlay == true) {
      let curr = 0
      const interval = setInterval(() => {
        if (curr < total) {
          curr = curr + 1
          scrollView.current.scrollTo({ x: windowWidth * (curr) });
          setCurrent(curr);
        } else {
          curr = 0
          scrollView.current.scrollTo({ x: curr });
          setCurrent(curr);
        }
        // }

        // console.log(curr)


      }, 10000);

    }
    else {
    }
  }

  useEffect(() => {
    AutoPlay()

    return () => {
      AutoPlay()
    }
  }, [])


  return (
    <View
      style={[StyleSheet.absoluteFill, { borderRadius: 10 }]}
    >


      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        style={CommanStyles.caroasalScroll}
        contentContainerStyle={CommanStyles.caroasalScrollContent}
        ref={scrollView}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onLayout={() => {
          scrollView.current.scrollTo({ x: 0, y: current * windowWidth, animated: true })
        }}
        onScroll={(event) => {
          var position = event.nativeEvent.contentOffset.x;
          var val = Math.round(position / windowWidth);
          if (val >= 0) {
            setCurrent(val);
          }
        }}
      >

        <View style={CommanStyles.row}>
          {data.map((d, index) => (
            <View key={index} style={CommanStyles.fullWindowView}>
              <ImageBackground source={d.image} style={CommanStyles.fullWindowView} imageStyle={{ borderRadius: 10 }}>
                <LinearGradient colors={[Colors.dgo_black_100, 'transparent', Colors.dgo_black_100]} style={CommanStyles.fullWindowView}>

                </LinearGradient>
              </ImageBackground>
            </View>
          ))}
        </View>
      </ScrollView>



      <View
        style={CommanStyles.carouselIndicatorView}
      >
        <View style={{ width: data.length * 13, justifyContent: 'space-between', flexDirection: 'row' }}>
          {data.map((d, index) => (
            <View
              key={index}
              style={index == current ? CommanStyles.filledCircle : CommanStyles.emptyCircle}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

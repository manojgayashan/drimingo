import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Trips from '../screens/Trips';
import Saved from '../screens/Saved';
import You from '../screens/You';
import Search from '../screens/Search';
import CommanStyles from '../styles/CommanStyles';
import Colors from '../styles/Colors';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

export default function Home() {

    function MyTabBar({ state, descriptors, navigation }) {
        return (
          <View style={{ flexDirection: 'row' }}>
            {state.routes.map((route, index) => {
              const { options } = descriptors[route.key];
              const label =
                options.tabBarLabel !== undefined
                  ? options.tabBarLabel
                  : options.title !== undefined
                  ? options.title
                  : route.name;
      
              const isFocused = state.index === index;

              const icon = route.name == 'Search'?'search':
              route.name == 'Trips'?'briefcase':
              route.name == 'Saved'?'heart':
              'user'
              
      
              const onPress = () => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                  canPreventDefault: true,
                });
      
                if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate(route.name, route.params);
                }
              };
      
              const onLongPress = () => {
                navigation.emit({
                  type: 'tabLongPress',
                  target: route.key,
                });
              };
      
              return (
                <TouchableOpacity
                key={index}
                  accessibilityRole="button"
                  accessibilityState={isFocused ? { selected: true } : {}}
                  accessibilityLabel={options.tabBarAccessibilityLabel}
                  testID={options.tabBarTestID}
                  onPress={onPress}
                  onLongPress={onLongPress}
                  style={CommanStyles.tabBarView}
                >
                    {isFocused ?
                    <View style={CommanStyles.tabFocus} />
                    :
                    <View style={CommanStyles.tabOutFocus} />}
                    <View style={CommanStyles.tabIconView}>
                    <Feather name={icon} size={20} color={isFocused ? Colors.dgo_blue_200 : Colors.dgo_black_200} />

                    </View>
                  <Text style={{ color: isFocused ? Colors.dgo_blue_200 : Colors.dgo_black_200,fontSize:12,fontWeight:'500' }}>
                    {label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        );
      }

  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />} screenOptions={{headerShown:false}}>
      <Tab.Screen name="Search" component={Search} options={{unmountOnBlur:true}}  />
      <Tab.Screen name="Trips" component={Trips} options={{unmountOnBlur:true}} />
      <Tab.Screen name="Saved" component={Saved} options={{unmountOnBlur:true}}  />
      <Tab.Screen name="You" component={You} options={{unmountOnBlur:true}}  />
    </Tab.Navigator>
  );
}
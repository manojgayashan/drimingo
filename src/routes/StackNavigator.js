import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from '../screens/Onboarding';
import Trips from '../screens/Trips';
import You from '../screens/You';
import Destination from '../screens/Destination';
import ExperienceListing from '../screens/ExperienceListing';
import DestinationReadMore from '../screens/DestinationReadMore';
import Search from '../screens/Search';
import Home from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Onboarding' screenOptions={{
        headerShown:false
    }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Trips" component={Trips} />
      <Stack.Screen name="You" component={You} />
      <Stack.Screen name="Destination" component={Destination} />
      <Stack.Screen name="ExperienceListing" component={ExperienceListing} />
      <Stack.Screen name="DestinationReadMore" component={DestinationReadMore} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
}
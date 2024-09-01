import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from '../screens/Onboarding';
import Trips from '../screens/Trips';
import You from '../screens/You';
import Destination from '../screens/Destination';
import ExperienceListing from '../screens/ExperienceListing';
import DestinationReadMore from '../screens/DestinationReadMore';
import Search from '../screens/Search';
import Home from './BottomTabNavigator';
import Experience from '../screens/Experience';
import Onboarding_2 from '../screens/Onboarding_2';
import Onboarding_3 from '../screens/Onboarding_3';
import Onboarding_4 from '../screens/Onboarding_4';
import Onboarding_5 from '../screens/Onboarding_5';
import Onboarding_6 from '../screens/Onboarding_6';
import Onboarding_7 from '../screens/Onboarding_7';
import Payment from '../screens/Payment';
import SignUp from '../screens/SignUp';

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Onboarding' screenOptions={{
        headerShown:false
    }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Onboarding_2" component={Onboarding_2} />
      <Stack.Screen name="Onboarding_3" component={Onboarding_3} />
      <Stack.Screen name="Onboarding_4" component={Onboarding_4} />
      <Stack.Screen name="Onboarding_5" component={Onboarding_5} />
      <Stack.Screen name="Onboarding_6" component={Onboarding_6} />
      <Stack.Screen name="Onboarding_7" component={Onboarding_7} />
      <Stack.Screen name="Trips" component={Trips} />
      <Stack.Screen name="You" component={You} />
      <Stack.Screen name="Destination" component={Destination} />
      <Stack.Screen name="ExperienceListing" component={ExperienceListing} />
      <Stack.Screen name="DestinationReadMore" component={DestinationReadMore} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Experience" component={Experience} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
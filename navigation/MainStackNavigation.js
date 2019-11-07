import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen'
import CreateEventScreen from '../screens/CreateEventScreen'

const MainStackNavigation = createStackNavigator(
  {
    Home: HomeScreen,
    Details: CreateEventScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default MainStackNavigation

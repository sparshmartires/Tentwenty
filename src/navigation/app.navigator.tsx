import {createNativeStackNavigator} from '@react-navigation/native-stack';

import UpcomingMovieListScreen from '../screens/UpcomingMovieList.screen';
import TabNavigator from './tab.navigator';

export type StackParamList = {
  TabNavigator: undefined;
  UpcomingMovieList: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />

      <Stack.Screen name="UpcomingMovieList" component={UpcomingMovieListScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

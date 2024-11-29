import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MovieList from '../screens/MovieList.screen';
import TabNavigator from './tab.navigator';

export type StackParamList = {
  TabNavigator: undefined;
  MovieList: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{headerShown: false}}
      />

      <Stack.Screen name="MovieList" component={MovieList} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

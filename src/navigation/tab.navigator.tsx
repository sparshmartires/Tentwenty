import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  GestureResponderEvent,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

import {palette} from '../theme/palette';
import MovieList from '../screens/MovieList.screen';
import styles from './styles';
import tabConfig from './tab.config';

export type TabParamList = {
  Dashboard: undefined;
  Watch: undefined;
  MediaLibrary: undefined;
  More: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();
const renderTabBarButton = (
  onPress:
    | (((event: GestureResponderEvent) => void) &
        ((
          e:
            | GestureResponderEvent
            | React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        ) => void))
    | undefined,
  label: string,
) => {
  let tabImage = tabConfig[label as keyof typeof tabConfig].image;

  return (
    <TouchableOpacity style={styles.tabButton}>
      <Image source={tabImage} />
      <Text style={[styles.text, label === 'Watch' && styles.selectedText]}>
        {tabConfig[label as keyof typeof tabConfig]?.value}
      </Text>
    </TouchableOpacity>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          backgroundColor: palette.darkBrown,
          height: 75,
          paddingVertical: 18,
          paddingHorizontal: 25,
          borderTopRightRadius: 27,
          borderTopLeftRadius: 27,
        },
      })}>
      <Tab.Screen
        name={tabConfig.Dashboard.name as keyof TabParamList}
        options={{
          tabBarButton: ({onPress}) =>
            renderTabBarButton(onPress, tabConfig.Dashboard.name),
        }}
        component={MovieList}
      />
      <Tab.Screen
        name={tabConfig.Watch.name as keyof TabParamList}
        component={MovieList}
        options={{
          tabBarButton: ({onPress}) =>
            renderTabBarButton(onPress, tabConfig.Watch.name),
        }}
      />
      <Tab.Screen
        name={tabConfig.MediaLibrary.name as keyof TabParamList}
        options={{
          tabBarButton: ({onPress}) =>
            renderTabBarButton(onPress, tabConfig.MediaLibrary.name),
        }}
        component={MovieList}
      />
      <Tab.Screen
        name={tabConfig.More.name as keyof TabParamList}
        options={{
          tabBarButton: ({onPress}) =>
            renderTabBarButton(onPress, tabConfig.MediaLibrary.name),
        }}
        component={MovieList}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

import {colors, mainNavigiations} from '@/constants';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MapStackNavigator, {MapStackParamList} from '../stack/MapStackNavigator';
import FeedHomeScreen from '@/screens/feed/FeedHomeScreen';
import CalendarHomeScreen from '@/screens/calendar/CalendarHomeScreen';
import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Dimensions} from 'react-native';
import CustomDrawerContent from './CustomDrawerContent';

export type MainDrawerParamList = {
  [mainNavigiations.HOME]: NavigatorScreenParams<MapStackParamList>;
  [mainNavigiations.FEED]: undefined;
  [mainNavigiations.CALENDAR]: undefined;
};

const Drawer = createDrawerNavigator<MainDrawerParamList>();

function DrawerIcons(route: RouteProp<MainDrawerParamList>, focused: boolean) {
  let iconName = '';

  switch (route.name) {
    case mainNavigiations.HOME: {
      iconName = 'location-on';
      break;
    }
    case mainNavigiations.FEED: {
      iconName = 'book';
      break;
    }
    case mainNavigiations.CALENDAR: {
      iconName = 'event-note';
      break;
    }
  }

  return (
    <MaterialIcons
      name={iconName}
      size={18}
      color={focused ? colors.BLACK : colors.GRAY_500}
    />
  );
}

function MainDrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawerContent}
      screenOptions={({route}) => ({
        headerShown: false,
        drawerType: 'front',
        drawerStyle: {
          width: Dimensions.get('screen').width * 0.6,
          backgroundColor: colors.WHITE,
        },
        drawerActiveTintColor: colors.BLACK,
        drawerInactiveTintColor: colors.GRAY_500,
        drawerActiveBackgroundColor: colors.PINK_500,
        drawerInactiveBackgroundColor: colors.GRAY_200,
        drawerLabelStyle: {
          fontWeight: '600',
        },
        drawerIcon: ({focused}) => DrawerIcons(route, focused),
      })}>
      <Drawer.Screen
        name={mainNavigiations.HOME}
        component={MapStackNavigator}
        options={{title: '홈', swipeEnabled: false}}
      />
      <Drawer.Screen
        name={mainNavigiations.FEED}
        component={FeedHomeScreen}
        options={{title: '피드'}}
      />
      <Drawer.Screen
        name={mainNavigiations.CALENDAR}
        component={CalendarHomeScreen}
        options={{title: '캘린더'}}
      />
    </Drawer.Navigator>
  );
}

export default MainDrawerNavigator;

import {mainNavigiations} from '@/constants';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MapStackNavigator, { MapStackParamList } from '../stack/MapStackNavigator';
import FeedHomeScreen from '@/screens/feed/FeedHomeScreen';
import CalendarHomeScreen from '@/screens/calendar/CalendarHomeScreen';
import { NavigatorScreenParams } from '@react-navigation/native';

export type MainDrawerParamList = {
  [mainNavigiations.HOME]: NavigatorScreenParams<MapStackParamList>;
  [mainNavigiations.FEED]: undefined;
  [mainNavigiations.CALENDAR]: undefined;
};

const Drawer = createDrawerNavigator<MainDrawerParamList>();

function MainDrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
      }}>
      <Drawer.Screen
        name={mainNavigiations.HOME}
        component={MapStackNavigator}
        options={{title: '홈'}}
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

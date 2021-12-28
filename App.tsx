import * as React from 'react';
import {useEffect, useRef} from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {EventListController} from "./src/ui/eventList/EventListController";
import {EventDetailController} from "./src/ui/eventDetail/EventDetailController";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {SermonListController} from "./src/ui/sermonList/SermonListController";
import {SermonDetailController} from "./src/ui/sermonDetail/SermonDetailController";
import Ionicons from "@expo/vector-icons/Ionicons"
import {ChurchData, ChurchDataContext} from "./src/data/ChurchData";


//https://reactnavigation.org/docs/typescript/
// Strongly type the route parameters this screen expects
//
// Otherwise, there is an error when you call navigate()
export type EventStackParamList = {
  EventList: undefined;
  EventDetail: undefined;
  Sermon: undefined;
  // FOR NEW SCREENS ADD STUFF HERE

};
export type SermonStackParamList = {

  SermonList: undefined;
  SermonDetail: undefined;
};

// Sermons
const SermonStack = createStackNavigator<SermonStackParamList>();

function SermonStackScreen() {
  return (
    <SermonStack.Navigator>
      <SermonStack.Screen name="SermonList" component={SermonListController}/>
      <SermonStack.Screen name="SermonDetail" component={SermonDetailController}/>
    </SermonStack.Navigator>
  );
}

// Events
const EventStack = createStackNavigator<EventStackParamList>();

function EventStackScreen() {
  return (
    <EventStack.Navigator>
      <EventStack.Screen name="EventList" component={EventListController}/>
      <EventStack.Screen name="EventDetail" component={EventDetailController}/>
    </EventStack.Navigator>
  );
}

// Bottom Nav and Main app
// https://reactnavigation.org/docs/tab-based-navigation
const Tab = createBottomTabNavigator();
export default function App() {
  const CHURCH_DATA = useRef(new ChurchData());
  useEffect(() => {
    CHURCH_DATA.current.loadAll();
  }, []); // do only once

  return (
    <NativeBaseProvider>
      <ChurchDataContext.Provider
        value={new ChurchData()}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, color, size}) => {
                let iconName;
                if (route.name === 'Events') {
                  iconName = focused
                    ? 'ios-calendar'
                    : 'ios-calendar-outline';
                } else if (route.name === 'Sermons') {
                  iconName = focused ? 'ios-videocam' : 'ios-videocam-outline';
                }
                // @ts-ignore
                return <Ionicons name={iconName} size={size} color={color}/>;
              },
            })}>
            <Tab.Screen name="Sermons" component={SermonStackScreen}/>
            <Tab.Screen name="Events" component={EventStackScreen}/>
          </Tab.Navigator>
        </NavigationContainer>
      </ChurchDataContext.Provider>
    </NativeBaseProvider>
  );
}

import * as React from 'react';
import { NativeBaseProvider, Box } from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {EventListController} from "./src/ui/eventList/EventListController";
import {EventDetailController} from "./src/ui/eventDetail/EventDetailController";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {SermonListController} from "./src/ui/sermonList/SermonListController";
import {SermonDetailController1} from "./src/ui/sermonDetail/SermonDetailController1";
import {SermonDetailController2} from "./src/ui/sermonDetail/SermonDetailController2";
import {SermonDetailController3} from "./src/ui/sermonDetail/SermonDetailController3";
import Ionicons from "@expo/vector-icons/Ionicons"
import { AppContext, AppContextData } from './src/data/AppContext';

import { Component } from 'react';
import { WebView } from 'react-native-webview';

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
  SermonDetail1: undefined;
  SermonDetail2: undefined;
  SermonDetail3: undefined;
};

// Sermons
const SermonStack = createStackNavigator<SermonStackParamList>();
function SermonStackScreen() {
  return (
    <SermonStack.Navigator>
      <SermonStack.Screen name="SermonList" component={SermonListController} />
      <SermonStack.Screen name="SermonDetail1" component={SermonDetailController1} />
      <SermonStack.Screen name="SermonDetail2" component={SermonDetailController2} />
      <SermonStack.Screen name="SermonDetail3" component={SermonDetailController3} />
    </SermonStack.Navigator>
  );
}

// Events
const EventStack = createStackNavigator<EventStackParamList>();
function EventStackScreen() {
  return (
    <EventStack.Navigator>
      <EventStack.Screen name="EventList" component={EventListController} />
      <EventStack.Screen name="EventDetail" component={EventDetailController} />
    </EventStack.Navigator>
  );
}

// Bottom Nav and Main app
// https://reactnavigation.org/docs/tab-based-navigation
const Tab = createBottomTabNavigator();
export default function App() {
  return (

    <AppContext.Provider
      value={new AppContextData()}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Events') {
                iconName = focused
                  ? 'ios-calendar'
                  : 'ios-calendar-outline';
              } else if (route.name === 'Sermons') {
                iconName = focused ? 'ios-videocam' : 'ios-videocam-outline';
              }
              // @ts-ignore
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}>
          <Tab.Screen name="Sermons" component={SermonStackScreen} />
          <Tab.Screen name="Events" component={EventStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppContext.Provider>  

  );
}

import * as React from 'react';
import { NativeBaseProvider, Box } from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SplashController} from "./src/ui/splash/SplashController";
import {EventListController} from "./src/ui/eventList/EventListController";
import {EventDetailController} from "./src/ui/eventDetail/EventDetailController";
import {SermonController} from "./src/ui/sermon/SermonController";
// FOR NEW SCREENS ADD STUFF HERE

//https://reactnavigation.org/docs/typescript/
export type RootStackParamList = {
  // Strongly type the route parameters this screen expects
  // Otherwise, there is an error when you call navigate()

  // No route parameters expected by these screens
  Splash: undefined;
  EventList: undefined;
  EventDetail: undefined;
  Sermon: undefined;
  // FOR NEW SCREENS ADD STUFF HERE

};

/**
 * Private: App wide stack navigator instance.
 */
const Stack = createStackNavigator<RootStackParamList>();

function App() {
  return (
    // wrapped the app in NativeBaseProvider
    <NativeBaseProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashController} />
        <Stack.Screen name="EventList" component={EventListController} />
        <Stack.Screen name="EventDetail" component={EventDetailController} />
        <Stack.Screen name="Sermon" component={SermonController} />
        {/*// FOR NEW SCREENS ADD STUFF HERE */}
      </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;

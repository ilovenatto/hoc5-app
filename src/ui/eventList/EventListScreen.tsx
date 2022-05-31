import React from "react";
import {Button, SafeAreaView, StatusBar, StyleSheet, Text, View, Dimensions, ScrollView} from "react-native";
import {StackActions, useNavigation} from "@react-navigation/native";
import {WebView} from 'react-native-webview'; 


export function EventListScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden/>

      {/*<ScrollView>*/}

      <View style={{
        alignItems: "center", width: Dimensions.get('window').width, height: Dimensions.get('window').height, backgroundColor: 'white'}}>
        <WebView
          // Basically just the events page from the church website
          // Can adjust size to see the "Event List" button
          source={{uri: 'https://www.hoc5.church/events'}}
          style={{height: Dimensions.get('window').height, width: Dimensions.get('window').width}}
        />
      </View>

{/*
      <Text>Event List</Text>
      <Button title="Go to Event Detail" onPress={(event) => {
        navigation.dispatch(StackActions.push("EventDetail"));
      }
      }/>
    */}
      {/*</ScrollView>*/}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

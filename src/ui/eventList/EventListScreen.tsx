import React from "react";
import {Button, SafeAreaView, StatusBar, StyleSheet, Text, FlatList, View} from "react-native";
import {useNavigation, StackActions} from "@react-navigation/native";

// basic event class
class Event {
  name: string;
  date: Date;
  constructor(name: string, date: Date) {
    this.name = name;
    this.date = date;
  }
}

// array of fake events to render
const fakeEvents = [
  new Event('event1', new Date()),
  new Event('event2', new Date()),
  new Event('event3', new Date()),
  new Event('event4', new Date()),
];

// return an event component thing given an event
function makeEventComponent(event: Event) {
  return (
    <View>
      <Text>{event.name}</Text>
      <Button title="Go to Event Detail" onPress={(ev) => {} } />
    </View>
  );
}


export function EventListScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <Text>Upcoming Events</Text>
      <FlatList data={fakeEvents} renderItem={({item}) => makeEventComponent(item)} keyExtractor={item => item.name}/>
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

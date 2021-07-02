import React from "react";
import {Button, SafeAreaView, StatusBar, StyleSheet, Text,} from "react-native";
import {useNavigation, StackActions} from "@react-navigation/native";


export function EventListScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <Text>Event List</Text>
      <Button title="Go to Event Detail" onPress={ (event) =>
        {navigation.dispatch(StackActions.push("EventDetail"));}
      } />
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

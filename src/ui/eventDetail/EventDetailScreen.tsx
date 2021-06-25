import React from "react";
import {Button, SafeAreaView, StatusBar, StyleSheet, Text,} from "react-native";
import {useNavigation, StackActions} from "@react-navigation/native";

export function EventDetailScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <Text>Event Detail Screen</Text>
      <Button title="Back" onPress={(event) => {
        navigation.dispatch(StackActions.push("EventList"));
      }} />
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

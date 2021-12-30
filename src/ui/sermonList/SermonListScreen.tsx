import React from "react"
import {ScrollView} from "react-native-gesture-handler"
import {Center, View, VStack} from "native-base"
import {SafeAreaView, StatusBar, StyleSheet} from "react-native";
import {observer} from "mobx-react-lite";
import {isSunday, SundayPopup} from "./SundayModal";
import {SermonCard} from "./SermonCard";
import {Sermon} from "../../data/Sermon";


// Allows SermonsCard to receive a number parameter called "sermonIndex"
//necessary for passing props in Typescript
interface SermonListProps {
  latestSermonId: string | undefined;
  sermons: Sermon[];
  onViewSermon: (sermonId: string) => void;
}

export const SermonListScreen = observer((props: SermonListProps) => {

  const {sermons, onViewSermon, latestSermonId} = props;

  return (
    <Center flex={1}>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <StatusBar hidden/>
          <View style={styles.centeredView}>
            {isSunday() &&
            <SundayPopup onYes={() => {
              latestSermonId && onViewSermon(latestSermonId);
            }}/>}
          </View>

          <VStack space={10} alignItems="center">
            <VStack>
              {sermons.map((sermon, index) => {
                return <SermonCard key={index} sermon={sermon} onViewSermon={() => {
                  onViewSermon(sermon.id);
                }}/>
              })}
            </VStack>
          </VStack>
        </SafeAreaView>
      </ScrollView>
    </Center>
  );
});


const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
});

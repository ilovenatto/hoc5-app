import React from "react";

import {SermonListScreen} from "./SermonListScreen";
import {observer} from "mobx-react-lite";
import {useChurchDataContext} from "../../data/ChurchData";
import {StackActions, useNavigation} from "@react-navigation/native";
import {Progress} from "native-base";

/**
 * ViewController for {@link SermonListScreen}
 */
export const SermonListController = observer(() => {
  const churchData = useChurchDataContext();
  const latestSermonId = churchData.getLatestSermon();
  const {sermons, isLoaded} = churchData;
  const navigation = useNavigation();

  if (!isLoaded) {
    return <Progress/>
  } else {
    return <SermonListScreen
      latestSermonId={latestSermonId}
      sermons={sermons}
      onViewSermon={(sermonId) => {
        navigation.dispatch(StackActions
          .push("SermonDetail",
            {targetSermonId: sermonId}));
      }
      }/>
  }
});


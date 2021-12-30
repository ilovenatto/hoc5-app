import React from "react"
import {SermonDetailScreen} from "./SermonDetailScreen";
import {useChurchDataContext} from "../../data/ChurchData";
import {Sermon} from "../../data/Sermon";
import {useRoute} from "@react-navigation/native";

/**
 * ViewController for {@link SermonDetailScreen}
 */
interface SermonDetailRouteProp {
  key: string,
  name: string,
  params: {
    targetSermonId: string
  }
}

// Functional component (not an observer). No need to observe sermon. It's not changing
export function SermonDetailController() {
  const params = useRoute<SermonDetailRouteProp>().params;
  const churchData = useChurchDataContext();
  const sermon: Sermon | undefined = churchData.getSermon(params.targetSermonId);
  return sermon && <SermonDetailScreen sermon={sermon}/>
}


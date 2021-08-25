import React, {useEffect} from "react";
import {SermonDetailScreen} from "./SermonDetailScreen";
import {LOG} from "../../util/HocLogger";
import { useNavigation } from "@react-navigation/core";
import { useRoute } from "@react-navigation/native";

/**
 * ViewController for {@link SermonDetailScreen1}
 */

interface SermonDetailRouteProp {
  key: string,
  name: string,
  params: {
    youtubeVidID: string,
    notesURL: string
  }
}

export function SermonDetailController() {

  const params = useRoute<SermonDetailRouteProp>().params;

  LOG.debug(params.youtubeVidID);


  return <SermonDetailScreen />;
}

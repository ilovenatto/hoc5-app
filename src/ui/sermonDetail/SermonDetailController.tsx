

import React, {useContext, useState} from "react"
import { DataContext } from "../../data/AppContext";
import {SermonDetailScreen} from "./SermonDetailScreen";
import {LOG} from "../../util/HocLogger";
import {useRoute} from "@react-navigation/native"

/**
* ViewController for {@link SermonDetailScreen}
*/



interface SermonDetailRouteProp {
 key: string,
 name: string,
 params: {
   sermonIndex: number
 }
}


export function SermonDetailController() {

 // First, we receive the index of the sermon from the Sermon List
 const params = useRoute<SermonDetailRouteProp>().params;

 // Here, we call the Sermon Detail Screen, passing the sermonIndex parameter
 return <SermonDetailScreen sermonIndex={params.sermonIndex} />;
}


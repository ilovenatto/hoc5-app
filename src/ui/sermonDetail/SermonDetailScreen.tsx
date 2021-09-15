

import React, {Component, useContext,} from "react";
import {SafeAreaView, StatusBar, StyleSheet, Text, View,} from "react-native";
import YoutubePlayer from 'react-native-youtube-iframe';
import { WebView } from 'react-native-webview';
import { ScrollView } from "react-native-gesture-handler"
import { AppContext } from "../../data/AppContext";
 
// This is needed to define the parameter (index for the sermon) received from the Detail Controller to be received as a prop in the SermonDetailScreen function
interface PropsPasser {
 sermonIndex: number
}
 
// This is needed to define the parameter (index for the sermon) received from the SermonDetailScreen function to be received as a prop in the Sermon function
interface SermonPasser {
 sermonIndexForVid: number
}
 
// This is needed to define the parameter (index for the sermon) received from the SermonDetailScreen function to be received as a prop in the Notes function
interface NotesPasser {
 sermonIndexForNotes: number
}
 
// prb useful link
// https://stackoverflow.com/questions/36382935/how-to-prevent-react-native-android-webview-from-running-youtube-in-the-backgrou
 
 
// This displays the sermon youtube vid
function Sermon(props: SermonPasser) {
 const sermonsModel = useContext(AppContext).sermonsModel;
   return  (
   <View style={styles.container}>
 
     <YoutubePlayer
       //ref={this.playerRef}
       height={300}
       width={400}
       videoId={sermonsModel.sermons[props.sermonIndexForVid].youtubeVideoID}
       //play={this.state.playing}
       onChangeState={event => console.log(event)}
       onReady={() => console.log("ready")}
       onError={e => console.log(e)}
       onPlaybackQualityChange={q => console.log(q)}
       volume={50}
       playbackRate={1}
       initialPlayerParams={{
       cc_lang_pref: "us",
       showClosedCaptions: true
       }}
     />
 
 </View>
   )
}
 
//This displays the notes for the sermon
function Notes(props: NotesPasser) {
 
 const sermonsModel = useContext(AppContext).sermonsModel;
 
   return (
   <View style={styles.container}>
 
     <WebView
       source={{uri: sermonsModel.sermons[props.sermonIndexForNotes].notesURL}}
       style={{height: 500, width: 380}}
     />
 
   </View>
 )
}
 
 
 
export function SermonDetailScreen(props: PropsPasser) {
 
 return (
   <SafeAreaView style={styles.container}>
     <StatusBar hidden />
 
     {/* Passing in the sermonIndex to the Sermon function so the Sermon function can actually obtain the value */}
 
     <Sermon sermonIndexForVid = {props.sermonIndex}/>
 
     <ScrollView style={{flex:1}}>
 
       {/* Passing in the sermonIndex to the Notes function so the Sermon function can actually obtain the value */}
 
       <Notes sermonIndexForNotes = {props.sermonIndex}/>
 
     </ScrollView>
   </SafeAreaView>
 );
}
 
const styles = StyleSheet.create({
 container: {
   justifyContent: "center",
   alignItems: "center",
   flex: 1,
 },
 trialContainer: {
   flex:2,
 }
});
 

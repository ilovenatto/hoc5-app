import React, {Component, useContext,} from "react";
import {SafeAreaView, StatusBar, StyleSheet, Text, View,} from "react-native";
import YoutubePlayer from 'react-native-youtube-iframe';
import { WebView } from 'react-native-webview';
import { ScrollView } from "react-native-gesture-handler"
import { AppContext } from "../../data/AppContext";



//type SermonDetailRouteProp = RouteProp<SermonStackParamList, "SermonDetail1">;
// prb useful link
// https://stackoverflow.com/questions/36382935/how-to-prevent-react-native-android-webview-from-running-youtube-in-the-backgrou
function Sermon() {
  const sermonsModel = useContext(AppContext).sermonsModel;
    return  (
    <View style={styles.container}>
      <YoutubePlayer
        //ref={this.playerRef}
        height={300}
        width={400}
        videoId={sermonsModel.sermons[0].youtubeVideoID}
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

function Notes() {
  const sermonsModel = useContext(AppContext).sermonsModel;
    return  <View style={styles.container}>
      <WebView
    source={{uri: sermonsModel.sermons[0].notesURL}}
    style={{height: 500, width: 380}}
  />
  </View>
}



export function SermonDetailScreen() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <Sermon />
      <ScrollView style={{flex:1}}>
        <Notes/>
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

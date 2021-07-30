import React, {Component,} from "react";
import {SafeAreaView, StatusBar, StyleSheet, Text, View,} from "react-native";
import YoutubePlayer from 'react-native-youtube-iframe';
import { WebView } from 'react-native-webview';
import { ScrollView } from "react-native-gesture-handler"



//prb useful link
// https://stackoverflow.com/questions/36382935/how-to-prevent-react-native-android-webview-from-running-youtube-in-the-backgrou
class Sermon2 extends Component {
  render() {
    return  (
    <View style={styles.container}>
      <YoutubePlayer
        //ref={this.playerRef}
        height={300}
        width={400}
        videoId={"e7cmJVoq7bk"}
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
}

class Notes2 extends Component {
  render() {
    return  <View style={styles.container}>
      <WebView
    source={{uri: 'https://drive.google.com/file/d/18MO5A05wH_b9zKdMlc_heat49xhWZ8rb/view'}}
    style={{height: 500, width: 380}}
  />
  </View>
  }
}



export function SermonDetailScreen2() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <Sermon2/>
      <ScrollView style={{flex:1}}>
        <Notes2/>
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


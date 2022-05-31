import React from "react";
import {Dimensions, SafeAreaView, StatusBar, StyleSheet, View, ScrollView} from "react-native";
import YoutubePlayer from 'react-native-youtube-iframe';
import {WebView} from 'react-native-webview';
import {Sermon} from "../../data/Sermon";
import {LOG} from "../../util/HocLogger";


// This is needed to define the parameter (index for the sermon) received from the Detail Controller to be received as a prop in the SermonDetailScreen function
interface SermonDetailProps {
  sermon: Sermon;
}

export function SermonDetailScreen(props: SermonDetailProps) {
  const {sermon} = props
  LOG.debug(sermon) // REMOVE
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden/>

      <ScrollView>

      <View style={styles.container}>
        {
          <YoutubePlayer
            // Dimensions.get('window').width is used for scaling the components (also used in the Notes component), .5618 is an arbritrary value that makes it look the best
            height={Dimensions.get('window').width * .5618}
            width={Dimensions.get('window').width}
            videoId={sermon.youtubeVideoId}
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
        }
      </View>
      
      <View style={{
        alignItems: "center", width: Dimensions.get('window').width, height: 500, backgroundColor: 'white'}}>
        <WebView
          // Adds a textbox for people to take notes
          source={{uri: 'https://www.rapidtables.com/tools/notepad.html'}}
          style={{height: 500, width: Dimensions.get('window').width}}
        />
      </View>

      <View style={styles.container}>
        <WebView
          // Webview for notes (when there are notes)
          source={{uri: sermon.notesUrl}}
          // Dimensions.get('window').width is used for scaling the components (also used in the Notes component), .01 is an arbritrary value that makes it look the best
          style={{height: Dimensions.get('window').width * .01, width: Dimensions.get('window').width}}
        />
      </View>

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
    flex: 2,
  }
});


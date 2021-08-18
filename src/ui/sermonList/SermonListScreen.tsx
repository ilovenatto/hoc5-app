import React, {useContext, useState} from "react"
import { ScrollView } from "react-native-gesture-handler"
import { //Libraries imported that are not being used will appear in a dull blue
  Box,
  Heading,
  Icon,
  AspectRatio,
  Image,
  Link,
  Center,
  VStack,
  HStack,
  Stack,
  useColorModeValue,
  FormControl,
  View,
  FlatList,
  Text
} from "native-base"
import {SafeAreaView, StatusBar, StyleSheet, Button, Alert, Modal, Pressable, DynamicColorIOS} from "react-native";
import { MaterialIcons, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import {useNavigation, StackActions} from "@react-navigation/native";
import { AppContext } from "../../data/AppContext";
export function SermonListScreen() {
    // Sermon class defines info for sermon: date, sermon title, pastor, and passage, to be put into array
    class Sermon {
        imageURI: string;
        date: string;
        title: string;
        pastor: string;
        passage: string;
        constructor(imageURI: string, date: string, title: string, pastor: string, passage: string) {
            this.imageURI = imageURI;
            this.date = date;
            this.title = title;
            this.pastor = pastor;
            this.passage = passage;
        }
    }
    const sermonsModel = useContext(AppContext).sermonsModel;
    
    // array of sermons wih fake data
    const fakeSermons = [
        new Sermon('https://images.squarespace-cdn.com/content/v1/6021ddae8afaaa12b10682d5/1624640797707-H5INPXV7DUCELP0WS8M2/The+Compassion+of+the+lord.png?format=1500w', 'June 27', 'The Compassion of Our Lord', 'Yuji Ogura', 'Luke 8:40-56'), 
        new Sermon('https://images.squarespace-cdn.com/content/v1/6021ddae8afaaa12b10682d5/1624388423275-2CZ7DMA6DYXWG203YUU5/Overcoming+Temptations.png?format=1500w', 'June 20', 'Overcoming Temptations', 'Dean Yuan', 'Matthew 3:16 - 4:11'), 
        new Sermon('https://images.squarespace-cdn.com/content/v1/6021ddae8afaaa12b10682d5/1623782841348-ZQHPQ42YW8UGOKDY9JFW/finding+grace+through+the+law.png?format=1500w', 'June 13', 'Finding Grace Through the Law', 'Dean Yuan', 'John 8:2-12')
    ];
    const [selected, setSelected] = React.useState(1);
    const navigation = useNavigation();
    // Set false to have modal default to not show up
    const [modalVisible, setModalVisible] = useState(true);
    var day = new Date().getDay();
    var hour = new Date().getHours();
    var minute = new Date().getMinutes();

    class SundayPopup extends React.Component
    {
      
      render()
      {
        // if the day is Sunday and the time is between 9:30 and 10:30 AM
        //if (1 == 1) 
        if (day == 0 && ((hour == 9 && minute >= 30) || (hour == 10 && minute <= 30)))
        {
        return (
        <Modal
        animationType="fade"
        transparent={true}       
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          //setModalVisible(true);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Would you like to follow along with today's sermon?</Text>
            <HStack>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={(event) => {navigation.dispatch(StackActions.push("SermonDetail1")); setModalVisible(!modalVisible)}}
            >
              <Text style={styles.textStyle}>Yes </Text>
            </Pressable>
            {/*this is a spacer for the two buttons in the pop up*/}
            <View style={{backgroundColor:'white', flex:0.4, }}></View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={(event) => {setModalVisible(!modalVisible)}}
            >
              <Text style={styles.textStyle}>No </Text>
            </Pressable>
            </HStack>
          </View>
        </View>
      </Modal>
      )
      }
        else 
        {
          return (
            null
          )
        } 
      }
    }
    
    class SermonsCardList extends React.Component {
      render() {
        let row = [];
        for (let i = 0; i < sermonsModel.sermonCount; ++i) {
          // props youtubeVideoID and notesURL are needed to be passed to SermonDetail
          row.push(<SermonsCard key={i} val={i} youtubeVideoID={sermonsModel.sermons[i].youtubeVideoID} notesURL={sermonsModel.sermons[i].notesURL}/>)
        }
        return <VStack>{row}</VStack>
      }
    }
    //necessary for passing props in Typescript
    interface ValPasser {
      val: number;
      youtubeVideoID: string;
      notesURL: string;
      //val is the "sermon number" or where the sermon is in the list/array
      //names are arbritrary, I just choose to give youtubeVideoID and notesURL the same name as the original variables in the Sermon interface (in Sermon.ts)
    }
    function SermonsCard(props:ValPasser) {
      return (
      //this view is to space out the sermon cars evenly
      <View style={{height:420,}}>
        <Box width={72} bg={useColorModeValue("gray.50", "gray.700")} shadow={1}>
          <Box>
            <AspectRatio ratio={16 / 9}>
            <Image
              roundedTop="lg"
              source={{
              uri: sermonsModel.sermons[props.val].thumbnailURL,
              }}
              alt="image"
            />
            </AspectRatio>
            <Center
              bg="red.500"
              _text={{
              color: "white",
              fontWeight: "700",
              fontSize: "xs",
              }}
              position="absolute"
              bottom={0}
              px={2}
              py={0.1}
            >
            <Text color="white">SERMONS</Text>
            </Center>
            <Center
              p={1}
              rounded="full"
              bg="red.500"
              boxSize={10}
              position="absolute"
              right={0}
              m={2}
              _text={{
              color: "white",
              textAlign: "center",
              fontWeight: "700",
              fontSize: "xs",
              }}
            >
              <Text color="white">{sermonsModel.sermons[props.val].month}/{sermonsModel.sermons[props.val].date}</Text>
            </Center>
          </Box>
          <Stack p={4} space={2}>
            <Stack space={2}>
              <Heading size="md" ml={-1}>
                {sermonsModel.sermons[props.val].title}
              </Heading>
              <Heading
                size="xs"
                color={useColorModeValue("red.500", "red.300")}
                fontWeight="500"
                ml={-0.5}
                mt={-1}
              >
                <Text>{sermonsModel.sermons[props.val].speakerName}</Text>
              </Heading>
           </Stack>
            <Text lineHeight={6} fontWeight={400}>
              {sermonsModel.sermons[props.val].passage}
            </Text>
            <Button title="View Sermon Details" onPress={ (event) =>
              {navigation.dispatch(StackActions.push("SermonDetail1", {youtubeVidID: props.youtubeVideoID, notesURL: props.notesURL} ));}
            } />
            <HStack alignItems="center" space={4} justifyContent="space-between">
              <HStack alignItems="center">
                <Icon
                  as={<MaterialIcons name="access-time" />}
                  color="gray.500"
                  size="sm"
                />
                 <Text ml={1} color="gray.500" fontWeight="500">
                     6 mins ago
                </Text>
              </HStack>
              <HStack alignItems="center">
                <Icon
                  as={<Ionicons name="ios-chatbubbles" />}
                  color="gray.500"
                  size="sm"
                />

                <Text ml={1} color="gray.500" fontWeight="500">
                  39 comments
                </Text>
              </HStack>
            </HStack>
          </Stack>
        </Box>
      </View>
      )
    }

    
  return (
  <ScrollView> 
      <SafeAreaView style={styles.container}>
        <StatusBar hidden />
        <View style={styles.centeredView}>
          <SundayPopup></SundayPopup>
        </View>
        <VStack space={10} alignItems="center">
          <SermonsCardList />
        </VStack>
      </SafeAreaView>
  </ScrollView>
  );
}

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
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default () => {
  return (
      <Center flex={1}>
        <SermonListScreen />
      </Center>
  )
}


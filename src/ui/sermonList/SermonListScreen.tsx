import React, {useState} from "react"
import {ScrollView} from "react-native-gesture-handler"
import {
  AspectRatio,
  Box,
  Center,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useColorModeValue,
  View,
  VStack
} from "native-base"
import {Alert, Button, Modal, Pressable, SafeAreaView, StatusBar, StyleSheet} from "react-native";
import {StackActions, useNavigation} from "@react-navigation/native";
import {useChurchDataContext} from "../../data/ChurchData";


export function SermonListScreen() {

  const sermons = useChurchDataContext().sermons;

  const navigation = useNavigation();


  // Set false to have modal default to not show up
  const [modalVisible, setModalVisible] = useState(true);


  // These will be needed by the modal and by the sermon cards
  var day = new Date().getDay();
  var hour = new Date().getHours();
  var minute = new Date().getMinutes();


  class SundayPopup extends React.Component {

    render() {
      // if statement to test modal, (will always return true)
      //if (1 == 1)

      // if the day is Sunday and the time is between 9:30 and 10:30 AM
      if (day == 0 && ((hour == 9 && minute >= 30) || (hour == 10 && minute <= 30))) {
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

                    // This will show the video and the notes for the first sermon in the list
                    onPress={(event) => {
                      navigation.dispatch(StackActions.push("SermonDetail", {sermonIndex: 0}));
                      setModalVisible(!modalVisible)
                    }}
                  >

                    <Text style={styles.textStyle}>Yes </Text>

                  </Pressable>

                  {/*this is a spacer for the two buttons in the pop up*/}
                  <View style={{backgroundColor: 'white', flex: 0.4,}}></View>

                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={(event) => {
                      setModalVisible(!modalVisible)
                    }}
                  >

                    <Text style={styles.textStyle}>No </Text>

                  </Pressable>

                </HStack>
              </View>
            </View>
          </Modal>
        )
      } else {
        return (
          null
        )
      }
    }
  }

  function SermonsCardList() {
    return (
      <VStack>
        {sermons.forEach((sermon, index) => {
          // props youtubeVideoID and notesURL are needed to be passed to SermonDetail
          <SermonsCard key={index} sermonIndex={index}/>

        })}
      </VStack>
    )
  }


  // Allows SermonsCard to receive a number parameter called "sermonIndex"
  //necessary for passing props in Typescript
  interface ValPasser {
    sermonIndex: number;
  }


  function SermonsCard(props: ValPasser) {
    return (

      //this view is to space out the sermon cars evenly
      <View style={{height: 420,}}>
        <Box width={72} bg={useColorModeValue("gray.50", "gray.700")} shadow={1}>
          <Box>
            <AspectRatio ratio={16 / 9}>

              <Image
                roundedTop="lg"
                source={{
                  uri: sermons[props.sermonIndex].thumbnailUrl,
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
              boxSize={12}
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

              {/* The date that appears in the top right hand corner of each sermon card */}
              <Text color="white">
                {sermons[props.sermonIndex].date.toLocaleDateString()}
              </Text>

            </Center>
          </Box>
          <Stack p={4} space={2}>
            <Stack space={2}>
              <Heading size="md" ml={-1}>
                {sermons[props.sermonIndex].title}
              </Heading>
              <Heading
                size="xs"
                color={useColorModeValue("red.500", "red.300")}
                fontWeight="500"
                ml={-0.5}
                mt={-1}
              >

                <Text>
                  {sermons[props.sermonIndex].speakerName}
                </Text>

              </Heading>
            </Stack>

            <Text lineHeight={6} fontWeight={400}>
              {sermons[props.sermonIndex].passage}
            </Text>

            <Button title="View Sermon Details" onPress={(event) =>

              // Here we are passing the sermon index to the Sermon Detail Controller
            {
              navigation.dispatch(StackActions.push("SermonDetail", {sermonIndex: props.sermonIndex}));
            }

            }/>

            {/*
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
          */}
          </Stack>
        </Box>
      </View>
    )
  }


  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <StatusBar hidden/>

        <View style={styles.centeredView}>

          <SundayPopup></SundayPopup>

        </View>

        <VStack space={10} alignItems="center">

          <SermonsCardList/>

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
      <SermonListScreen/>
    </Center>
  )
}

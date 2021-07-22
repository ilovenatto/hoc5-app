import React, {useState} from "react"
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
            <View style={{backgroundColor:'white', flex:0.4, }}>
            </View>
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
      else {
        return (
          null
        )
      } 
    }
    }
  return (
  <ScrollView> 
      <SafeAreaView style={styles.container}>
  <StatusBar hidden />

  <View style={styles.centeredView}>
  <SundayPopup></SundayPopup>
    </View>
    {/*
     <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    */}
    <VStack space={10} alignItems="center">
    <Box width={72} bg={useColorModeValue("gray.50", "gray.700")} shadow={1}>
      <Box>
        <AspectRatio ratio={16 / 9}>
          <Image
            roundedTop="lg"
            source={{
            // CHANGE URI INFO HERE
              uri: fakeSermons[0].imageURI,
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
          Sermons
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
          {/*} CHANGE DATE INFO HERE*/}
          
          {fakeSermons[0].date}

        </Center>
      </Box>
      <Stack p={4} space={2}>
        <Stack space={2}>
          <Heading size="md" ml={-1}>
            {/*} CHANGE TITLE INFO HERE*/}
            {fakeSermons[0].title}
          </Heading>
          <Heading
            size="xs"
            color={useColorModeValue("red.500", "red.300")}
            fontWeight="500"
            ml={-0.5}
            mt={-1}
          >
            {/*} CHANGE PASTOR INFO HERE*/}
            {fakeSermons[0].pastor}
          </Heading>
        </Stack>
        <Text lineHeight={6} fontWeight={400}>
          {/*} CHANGE PASSAGE INFO HERE*/}
          {fakeSermons[0].passage}

        </Text>
        <Button title="View Sermon Details" onPress={ (event) =>
      {navigation.dispatch(StackActions.push("SermonDetail1"));
      navigation.dispatch(
        StackActions.replace("SermonDetail1", {
          // test to see if SermonDetail1 can receive "test" param
          // NOT IN USE RN
          uri: "test",
        })
      );
    }
      
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

    <Box width={72} bg={useColorModeValue("gray.50", "gray.700")} shadow={1}>
      <Box>
        <AspectRatio ratio={16 / 9}>
          <Image
            roundedTop="lg"
            source={{
              uri: fakeSermons[1].imageURI,
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
          SERMONS
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
          {fakeSermons[1].date}
        </Center>
      </Box>
      <Stack p={4} space={2}>
        <Stack space={2}>
          <Heading size="md" ml={-1}>
          {fakeSermons[1].title}
          </Heading>
          <Heading
            size="xs"
            color={useColorModeValue("red.500", "red.300")}
            fontWeight="500"
            ml={-0.5}
            mt={-1}
          >
            {fakeSermons[1].pastor}
          </Heading>
        </Stack>
        <Text lineHeight={6} fontWeight={400}>
        {fakeSermons[1].passage}
        </Text>
        <Button title="View Sermon Details" onPress={ (event) =>
      {navigation.dispatch(StackActions.push("SermonDetail2"));}
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

    <Box width={72} bg={useColorModeValue("gray.50", "gray.700")} shadow={1}>
      <Box>
        <AspectRatio ratio={16 / 9}>
          <Image
            roundedTop="lg"
            source={{
              uri: fakeSermons[2].imageURI,
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
          SERMONS
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
          {fakeSermons[2].date}
        </Center>
      </Box>
      <Stack p={4} space={2}>
        <Stack space={2}>
          <Heading size="md" ml={-1}>
          {fakeSermons[2].title}
          </Heading>
          <Heading
            size="xs"
            color={useColorModeValue("red.500", "red.300")}
            fontWeight="500"
            ml={-0.5}
            mt={-1}
          >
            {fakeSermons[2].pastor}
          </Heading>
        </Stack>
        <Text lineHeight={6} fontWeight={400}>
        {fakeSermons[2].passage}
        </Text>
        <Button title="View Sermon Details" onPress={ (event) =>
      {navigation.dispatch(StackActions.push("SermonDetail3"));}
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


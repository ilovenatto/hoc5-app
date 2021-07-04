import React from "react"
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
  Pressable,
  View,
  FlatList,
  Text
} from "native-base"
import {SafeAreaView, StatusBar, StyleSheet, Button, } from "react-native";
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
        new Sermon('https://images.squarespace-cdn.com/content/v1/6021ddae8afaaa12b10682d5/1624640797707-H5INPXV7DUCELP0WS8M2/The+Compassion+of+the+lord.png?format=1500w', 'June 20', 'Title of Sermon', 'Name of Pastor', 'Passage'), 
        new Sermon('https://images.squarespace-cdn.com/content/v1/6021ddae8afaaa12b10682d5/1624640797707-H5INPXV7DUCELP0WS8M2/The+Compassion+of+the+lord.png?format=1500w', 'June 13', 'Finding Grace Through the Law', 'Dean Yuan', 'John 8:2-12')
    ];
    const [selected, setSelected] = React.useState(1);
    const navigation = useNavigation();

  return (


  <ScrollView> 
      <SafeAreaView style={styles.container}>
  <StatusBar hidden />
    <VStack space={10} alignItems="center">
    <Text>Sermon List Screen</Text>
      <Button title="Go to Sermon Detail" onPress={ (event) =>
      {navigation.dispatch(StackActions.push("SermonDetail"));}
      } />
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
            {fakeSermons[0].title}
          </Heading>
        </Stack>
        <Text lineHeight={6} fontWeight={400}>
          {/*} CHANGE PASSAGE INFO HERE*/}
          {fakeSermons[0].passage}

        </Text>
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
              uri: "https://images.squarespace-cdn.com/content/v1/6021ddae8afaaa12b10682d5/1623782841348-ZQHPQ42YW8UGOKDY9JFW/finding+grace+through+the+law.png?format=1500w",
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
            {fakeSermons[0].title}
          </Heading>
        </Stack>
        <Text lineHeight={6} fontWeight={400}>
          {/*} CHANGE PASSAGE INFO HERE*/}
          {fakeSermons[0].passage}

        </Text>
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
});

export default () => {
  return (
      <Center flex={1}>
        <SermonListScreen />
      </Center>
  )
}


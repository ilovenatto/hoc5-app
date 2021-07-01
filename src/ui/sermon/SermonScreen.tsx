import React from "react"
import { ScrollView } from "react-native-gesture-handler"
import { //Libraries imported that are not being used will appear in a dull blue
  Box,
  Heading,
  Icon,
  AspectRatio,
  Image,
  Text,
  Link,
  Center,
  VStack,
  HStack,
  Stack,
  useColorModeValue,
  NativeBaseProvider,
  FormControl,
  Pressable,
} from "native-base"
import { MaterialIcons, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
export function SermonScreen() {
    const [selected, setSelected] = React.useState(1);
  return (
      <ScrollView> 
    <VStack space={10} alignItems="center">
    <Box width={72} bg={useColorModeValue("gray.50", "gray.700")} shadow={1}>
      <Box>
        <AspectRatio ratio={16 / 9}>
          <Image
            roundedTop="lg"
            source={{
              uri: "https://images.squarespace-cdn.com/content/v1/6021ddae8afaaa12b10682d5/1624640797707-H5INPXV7DUCELP0WS8M2/The+Compassion+of+the+lord.png?format=1500w",
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
          June 27
        </Center>
      </Box>
      <Stack p={4} space={2}>
        <Stack space={2}>
          <Heading size="md" ml={-1}>
            The Compassion of Our Lord
          </Heading>
          <Heading
            size="xs"
            color={useColorModeValue("red.500", "red.300")}
            fontWeight="500"
            ml={-0.5}
            mt={-1}
          >
            Pastor Yuji Ogura
          </Heading>
        </Stack>
        <Text lineHeight={6} fontWeight={400}>
          Luke 8:40-56

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
              uri: "https://images.squarespace-cdn.com/content/v1/6021ddae8afaaa12b10682d5/1624640797707-H5INPXV7DUCELP0WS8M2/The+Compassion+of+the+lord.png?format=1500w",
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
          Date here
        </Center>
      </Box>
      <Stack p={4} space={2}>
        <Stack space={2}>
          <Heading size="md" ml={-1}>
            Insert Name of Sermon Here
          </Heading>
          <Heading
            size="xs"
            color={useColorModeValue("red.500", "red.300")}
            fontWeight="500"
            ml={-0.5}
            mt={-1}
          >
            Insert Name of Pastor Here
          </Heading>
        </Stack>
        <Text lineHeight={6} fontWeight={400}>
          Insert passage here
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
          June 13
        </Center>
      </Box>
      <Stack p={4} space={2}>
        <Stack space={2}>
          <Heading size="md" ml={-1}>
            Finding Grace Through the Law
          </Heading>
          <Heading
            size="xs"
            color={useColorModeValue("red.500", "red.300")}
            fontWeight="500"
            ml={-0.5}
            mt={-1}
          >
            Pastor Dean Yuan
          </Heading>
        </Stack>
        <Text lineHeight={6} fontWeight={400}>
          Luke 8:40-56
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



{/*THIS IS FOR THE FOOTER AND ICONS */}
    <NativeBaseProvider>
       <Box flex={1} bg="white" safeAreaTop>
        <Center flex={1}>
        </Center>
        <HStack bg="primary.500" alignItems="center" safeAreaBottom shadow={6}>
          <Pressable
            //cursor="pointer"
            opacity={selected === 0 ? 1 : 0.5}
            py={2}
            flex={1}
            onPress={() => setSelected(0)}
          >
            <Center>
              <Icon
                mb={1}
                as={<MaterialCommunityIcons name="heart" />}
                color="white"
                size="xs"
              />

              <Text color="white" fontSize={14}>Favorites</Text>
            </Center>
          </Pressable>
          <Pressable
            //cursor="pointer"
            opacity={selected === 1 ? 1 : 0.5}
            py={2}
            flex={1}
            onPress={() => setSelected(1)}
          >
            <Center>
              <Icon
                mb={1}
                as={<MaterialCommunityIcons name="music-note" />}
                color="white"
                size="xs"
              />

              <Text color="white" fontSize={14}>Music</Text>
            </Center>
          </Pressable>
          <Pressable
            //cursor="pointer"
            opacity={selected === 2 ? 1 : 0.6}
            py={2}
            flex={1}
            onPress={() => setSelected(2)}
          >
            <Center>
              <Icon
                mb={1}
                as={<MaterialIcons name="location-pin" />}
                color="white"
                size="xs"
              />

              <Text color="white" fontSize={14}>Places</Text>
            </Center>
          </Pressable>
          <Pressable
            //cursor="pointer"
            opacity={selected === 3 ? 1 : 0.5}
            py={2}
            flex={1}
            onPress={() => setSelected(3)}
          >
            <Center>
              <Icon
                mb={1}
                as={<MaterialCommunityIcons name="newspaper" />}
                color="white"
                size="xs"
              />
              <Text color="white" fontSize={14}>News</Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
    </NativeBaseProvider>
    </ScrollView>
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <SermonScreen />
      </Center>
    </NativeBaseProvider>
  )
}

/*import React from "react";
import {SafeAreaView, StatusBar, StyleSheet, Text,} from "react-native";
import { Box, VStack, Center, Heading, NativeBaseProvider } from "native-base"

export function SermonScreen() {
  return (
    <VStack space={4} alignItems="center">
    <Heading>Sermons</Heading>
    <Box
    width="70%"
      bg="primary.400"
      p={10}
      _text={{
        fontSize: "2xl",
        fontWeight: "bold",
        color: "white",
      }}
    >
      June 27: The Compassion of our Lord
    </Box>
    <Box
    width="70%"
      bg="primary.600"
      p={10}
      _text={{
        fontSize: "2xl",
        fontWeight: "bold",
        color: "white",
      }}
    >
      June 20: Insert name of sermon here
    </Box>
    <Box
    width="70%"
      bg="primary.400"
      p={10}
      _text={{
        fontSize: "2xl",
        fontWeight: "bold",
        color: "white",
      }}
    >
      June 13: Insert name of sermon here
    </Box>
  </VStack>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
*/
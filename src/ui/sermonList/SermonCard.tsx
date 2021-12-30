import React from "react"
import {AspectRatio, Box, Center, Heading, Image, Stack, Text, useColorModeValue, View} from "native-base"
import {Button} from "react-native";
import {Sermon} from "../../data/Sermon";

interface SermonCardProps {
  sermon: Sermon;
  onViewSermon: () => void;
}

export function SermonCard(props: SermonCardProps) {

  const {sermon, onViewSermon} = props;
  return (

    //this view is to space out the sermon cars evenly
    <View style={{height: 420,}}>
      <Box width={72} bg={useColorModeValue("gray.50", "gray.700")} shadow={1}>
        <Box>
          <AspectRatio ratio={16 / 9}>

            <Image
              roundedTop="lg"
              source={{
                uri: sermon.thumbnailUrl,
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
              {sermon.date.toLocaleDateString()}
            </Text>

          </Center>
        </Box>
        <Stack p={4} space={2}>
          <Stack space={2}>
            <Heading size="md" ml={-1}>
              {sermon.title}
            </Heading>
            <Heading
              size="xs"
              color={useColorModeValue("red.500", "red.300")}
              fontWeight="500"
              ml={-0.5}
              mt={-1}
            >

              <Text>
                {sermon.speakerName}
              </Text>

            </Heading>
          </Stack>

          <Text lineHeight={6} fontWeight={400}>
            {sermon.passage}
          </Text>
          <Button title="View Sermon Details" onPress={(event) => {
            onViewSermon();
          }
          }/>
        </Stack>
      </Box>
    </View>
  )
}

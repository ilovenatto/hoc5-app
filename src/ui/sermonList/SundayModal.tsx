import React, {useState} from "react"
import {HStack, Text, View} from "native-base"
import {Modal, Pressable, StyleSheet} from "react-native";

interface SundayModalProps {
  onYes: () => void;
}

export function isSunday(): boolean {

  // These will be needed by the modal and by the sermon cards
  const date = new Date();
  var day = date.getDay();
  var hour = date.getHours();
  var minute = date.getMinutes();

  return (day == 0 && ((hour == 9 && minute >= 30) || (hour == 10 && minute <= 30)));
}

export function SundayPopup(props: SundayModalProps) {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        // noop
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
                props.onYes();
                setModalVisible(!modalVisible)
              }}
            >

              <Text style={styles.textStyle}>Yes</Text>

            </Pressable>

            {/*this is a spacer for the two buttons in the pop up*/}
            <View style={{backgroundColor: 'white', flex: 0.4,}}></View>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={(event) => {
                setModalVisible(!modalVisible)
              }}
            >
              <Text style={styles.textStyle}>No</Text>
            </Pressable>
          </HStack>
        </View>
      </View>
    </Modal>
  )
};


const styles = StyleSheet.create({

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

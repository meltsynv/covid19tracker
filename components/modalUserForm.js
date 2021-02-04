import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Text, View, StyleSheet, Dimensions } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import Modal from "react-native-modal";
import Icons from "react-native-vector-icons/Ionicons";
import { COLORS } from "../styles/colors";
import { TextInput } from "react-native-gesture-handler";

const CustomModal = ({ setActive, ...props }) => {
  const [isModalVisible, setModalVisible] = useState(setActive);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [inputUserName, onChangeUserName] = React.useState(
    `${props.userData[0].userName}`
  );
  const [inputMail, onChangeMail] = React.useState(`${props.userData[0].mail}`);
  const [inputPhone, onChangePhone] = React.useState(
    `${props.userData[0].tel}`
  );

  // copy the input data in the state and update it
  const handleInput = () => {
    let copyUserData = [...props.userData];

    copyUserData[0].userName = inputUserName;
    copyUserData[0].mail = inputMail;
    copyUserData[0].tel = inputPhone;

    props.setUserData(copyUserData);

    toggleModal();
  };

  return (
    <>
      <TouchableNativeFeedback
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignSelf: "center",
          backgroundColor: COLORS.primaryColor,
          padding: 15,
          borderRadius: 5,
          width: Dimensions.get("window").width - 100,
        }}
        onPress={toggleModal}
      >
        <Text style={{ color: COLORS.white, fontSize: 16, fontWeight: "bold" }}>
          Editieren
        </Text>
        <Icons name="create" size={20} color={COLORS.white} />
      </TouchableNativeFeedback>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        animationIn="fadeInRightBig"
      >
        <View style={styles.container}>
          <Text
            style={{
              alignSelf: "center",
              color: COLORS.primaryColor,
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 20,
            }}
          >
            Angaben zur Person
          </Text>
          <View style={styles.textImput}>
            <TextInput
              keyboardType={"default"}
              style={{ color: "#111111" }}
              placeholder={props.userData[0].userName}
              placeholderTextColor={"#aeaeae"}
              onChangeText={(val) => onChangeUserName(val)}
            />
          </View>
          <View style={styles.textImput}>
            <TextInput
              keyboardType={"email-address"}
              style={{ color: "#111111" }}
              placeholder={props.userData[0].mail}
              placeholderTextColor={"#aeaeae"}
              onChangeText={(val) => onChangeMail(val)}
            />
          </View>
          <View style={styles.textImput}>
            <TextInput
              keyboardType={"number-pad"}
              style={{ color: "#111111" }}
              placeholder={props.userData[0].tel}
              placeholderTextColor={"#aeaeae"}
              onChangeText={(val) => onChangePhone(val)}
            />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Button title="abbrechen" onPress={toggleModal} />
            <Button title="speichern" onPress={handleInput} />
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColor,
    padding: 20,
    borderRadius: 10,
  },
  textImput: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: COLORS.primaryColor,
    borderRadius: 5,
    padding: 5,
    paddingLeft: 15,
    marginBottom: 15,
  },
});

const mapStateToProps = (state) => {
  return { userData: state.userData };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserData: (userData) =>
      dispatch({ type: "SET_USERDATA", userData: userData }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomModal);

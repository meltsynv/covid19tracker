import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Text, View, StyleSheet, Dimensions } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import Modal from "react-native-modal";
import Icons from "react-native-vector-icons/Ionicons";
import { COLORS } from "../styles/colors";
import { TextInput } from "react-native-gesture-handler";

const ModalUserAdressForm = ({ ...props }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [inputUserStreet, onChangeStreet] = React.useState(" ");
  const [inputUserHomeNumber, onChangeHomeNumber] = React.useState(" ");
  const [inputUserZip, onChangeZip] = React.useState(" ");
  const [inputUserCity, onChangeCity] = React.useState(" ");
  const [inputUserCountry, onChangeCountry] = React.useState(" ");

  const handleInput = () => {
    let copyUserData = [...props.userData];

    copyUserData[0].street = inputUserStreet;
    copyUserData[0].homeNumber = inputUserHomeNumber;
    copyUserData[0].zip = inputUserZip;
    copyUserData[0].city = inputUserCity;
    copyUserData[0].country = inputUserCountry;

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
            Addresse
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={[styles.textImput, { flex: 2 }]}>
              <TextInput
                keyboardType={"default"}
                style={{ color: "#111111" }}
                placeholder={props.userData[0].street}
                placeholderTextColor={"#aeaeae"}
                onChangeText={(val) => onChangeStreet(val)}
              />
            </View>
            <View style={[styles.textImput, { flex: 1, marginLeft: 10 }]}>
              <TextInput
                keyboardType={"number-pad"}
                style={{ color: "#111111" }}
                placeholder={props.userData[0].homeNumber}
                placeholderTextColor={"#aeaeae"}
                onChangeText={(val) => onChangeHomeNumber(val)}
              />
            </View>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={[styles.textImput, { flex: 1 }]}>
              <TextInput
                keyboardType={"number-pad"}
                style={{ color: "#111111" }}
                placeholder={props.userData[0].zip}
                placeholderTextColor={"#aeaeae"}
                onChangeText={(val) => onChangeZip(val)}
              />
            </View>
            <View style={[styles.textImput, { flex: 2, marginLeft: 10 }]}>
              <TextInput
                keyboardType={"default"}
                style={{ color: "#111111" }}
                placeholder={props.userData[0].city}
                placeholderTextColor={"#aeaeae"}
                onChangeText={(val) => onChangeCity(val)}
              />
            </View>
          </View>
          <View style={styles.textImput}>
            <TextInput
              keyboardType={"default"}
              style={{ color: "#111111" }}
              placeholder={props.userData[0].country}
              placeholderTextColor={"#aeaeae"}
              onChangeText={(val) => onChangeCountry(val)}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalUserAdressForm);

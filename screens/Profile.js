import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import {
  ScrollView,
  TouchableNativeFeedback,
} from "react-native-gesture-handler";
import Icons from "react-native-vector-icons/Ionicons";
import { COLORS } from "../styles/colors";
import styles from "../styles/globalStyle";

// components
import ModalUpdateUser from "../components/modalUserForm";
import ModalUserAdressForm from "../components/modalUserAdressForm";

const Profile = ({ ...props }) => {
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 30,
        }}
      >
        <View style={{ marginBottom: 10 }}>
          <Icons name="person-circle" size={56} color={COLORS.primaryColor} />
        </View>
        <TouchableNativeFeedback style={styles.touchableButton}>
          <Text
            style={{ color: COLORS.white, fontSize: 16, fontWeight: "bold" }}
          >
            Bild hinzufügen
          </Text>
          <Icons name="camera" size={20} color={COLORS.white} />
        </TouchableNativeFeedback>
      </View>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 30,
        }}
      >
        <Text style={[styles.title, { marginBottom: 10 }]}>
          Angaben zur Person
        </Text>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Text>{props.userData[0].userName}</Text>
          <Text>{props.userData[0].mail}</Text>
          <Text>+{props.userData[0].tel}</Text>
        </View>
        <ModalUpdateUser />
      </View>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 30,
        }}
      >
        <Text style={[styles.title, { marginBottom: 10 }]}>Adresse</Text>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Text>
            {props.userData[0].street}. {props.userData[0].homeNumber}
          </Text>
          <Text>
            {props.userData[0].zip} {props.userData[0].city}
          </Text>
          <Text>{props.userData[0].country}</Text>
        </View>
        <ModalUserAdressForm />
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return { userData: state.userData };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

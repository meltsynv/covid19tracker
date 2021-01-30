import React from "react";
import { connect } from "react-redux";
import { Text, Button, Image } from "react-native";
import styles from "../styles/globalStyle";
import Onboarding from "react-native-onboarding-swiper";

const Onboarding1 = ({ navigation, ...props }) => {
  const Skip = () => (
    <Button title="Überspringen" onPress={() => props.setLogin(false)} />
  );
  const Done = () => (
    <Button title="Fertig" onPress={() => props.setLogin(false)} />
  );

  return (
    <Onboarding
      SkipButtonComponent={Skip}
      DoneButtonComponent={Done}
      pages={[
        {
          backgroundColor: "#fff",
          image: <Image source={require("../assets/onboarding/01.png")} />,
          title: (
            <Text style={[styles.title, { marginBottom: 10 }]}>
              Covid-19 Tracker
            </Text>
          ),
          subtitle: (
            <Text style={[styles.p, { width: "90%", paddingBottom: 100 }]}>
              Sei mit dem Covid-19 Tracker immer auf dem neuesten Stand. Alle
              wichtige Informationen findest du hier an einem Ort für dich
              aufbereitet
            </Text>
          ),
        },
        {
          backgroundColor: "#fff",
          image: <Image source={require("../assets/onboarding/02.png")} />,
          title: (
            <Text style={[styles.title, { marginBottom: 10 }]}>#StayHome</Text>
          ),
          subtitle: (
            <Text style={[styles.p, { width: "90%", paddingBottom: 100 }]}>
              Helfen Sie uns dabei die Pandemie einzudämmen, und erhalten Sie
              kleine Preise als Belohnung
            </Text>
          ),
        },
        {
          backgroundColor: "#fff",
          image: <Image source={require("../assets/onboarding/03.png")} />,
          title: (
            <Text style={[styles.title, { marginBottom: 10 }]}>Belohnung</Text>
          ),
          subtitle: (
            <Text style={[styles.p, { width: "90%", paddingBottom: 100 }]}>
              Ihr Engagement wird entlohnt in form von kleineren Preisen, die
              Sie mit Ihren Credits freischalten können.
            </Text>
          ),
        },
      ]}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    loginState: state.loginState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLogin: (loginState) =>
      dispatch({ type: "SET_LOGIN", loginState: loginState }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Onboarding1);

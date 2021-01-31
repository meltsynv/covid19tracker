import React from "react";
import { connect } from "react-redux";
import { View, Text, Button } from "react-native";
import CustomInputField from "../components/inputText";
import styles from "../styles/globalStyle";

const Login = ({ navigation, userData }) => {
  const [loginEmail, setEmail] = React.useState("");
  const [loginPassword, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState(false);

  const handleLogin = () => {
    if (
      loginPassword.loginPassword == userData[0].password &&
      loginEmail.loginEmail == userData[0].mail
    ) {
      setErrorMessage(false);
      navigation.push("Onboarding");
    } else {
      setErrorMessage(true);
    }
  };

  const renderErrormessage = () => (
    <View style={{ paddingTop: 5, paddingBottom: 5 }}>
      <Text style={{ color: "#ff0000" }}>
        Bitte überprüfe deine eingegebenen Daten einmal!
      </Text>
    </View>
  );

  return (
    <View
      style={[
        styles.container,
        { justifyContent: "center", alignContent: "center" },
      ]}
    >
      <View style={{ justifyContent: "space-between", marginBottom: 30 }}>
        <View>
          <CustomInputField
            text="Email"
            holdertext="example@email.de"
            changeTextHandler={(text) => setEmail({ loginEmail: text })}
            secureText={false}
          />
          <CustomInputField
            text="Password"
            holdertext="password"
            changeTextHandler={(text) => setPassword({ loginPassword: text })}
            secureText={true}
          />
        </View>
        {errorMessage ? renderErrormessage() : null}
        <Button title="Continue" onPress={() => handleLogin()} />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignSelf: "center",
          marginBottom: 30,
        }}
      >
        <Text style={[styles.text, { textAlign: "center" }]}>or</Text>
      </View>
      <View>
        <Button title="Sign Up" onPress={() => navigation.push("SignUp")} />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.userData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserData: (userData) =>
      dispatch({ type: "SET_USERDATA", userData: userData }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

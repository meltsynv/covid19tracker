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
import ModalUpdateUser from "../components/modalUserForm";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setModalUserActive: false,
    };

    this.handleModal = this.handleModal.bind(this);
  }

  handleModal() {
    this.setState({
      setModalUserActive: (this.state.setModalUserActive = true),
    });

    console.log(this.state.setModalUserActive);
  }

  render() {
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
            <Text>{this.props.userData[0].userName}</Text>
            <Text>{this.props.userData[0].mail}</Text>
            <Text>+{this.props.userData[0].tel}</Text>
          </View>
          <TouchableNativeFeedback
            style={styles.touchableButton}
            onPress={this.handleModal}
          >
            <Text
              style={{ color: COLORS.white, fontSize: 16, fontWeight: "bold" }}
            >
              Editieren
            </Text>
            <Icons name="create" size={20} color={COLORS.white} />
          </TouchableNativeFeedback>
        </View>
        {<ModalUpdateUser setActive={this.state.setModalUserActive} />}
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
              {this.props.userData[0].street}.{" "}
              {this.props.userData[0].homeNumber}
            </Text>
            <Text>
              {this.props.userData[0].zip} {this.props.userData[0].city}
            </Text>
            <Text>{this.props.userData[0].country}</Text>
          </View>
          <TouchableNativeFeedback style={styles.touchableButton}>
            <Text
              style={{ color: COLORS.white, fontSize: 16, fontWeight: "bold" }}
            >
              Editieren
            </Text>
            <Icons name="create" size={20} color={COLORS.white} />
          </TouchableNativeFeedback>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return { userData: state.userData };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

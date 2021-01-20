import React, { Component } from "react";
import { connect } from "react-redux";
import { View, TextInput, Text } from "react-native";
import {
  ScrollView,
  TouchableNativeFeedback,
} from "react-native-gesture-handler";
import Icons from "react-native-vector-icons/Ionicons";
import { COLORS } from "../styles/colors";
import styles from "../styles/globalStyle";

// components
import LinkCard from "../components/linkCard";

class Notification extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{ marginBottom: 30 }}>
          <LinkCard linkTitle="Neue Maßnahmen" linkSource="land.nrw" />
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);

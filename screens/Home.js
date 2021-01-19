import React, { Component } from "react";
import { connect } from "react-redux";
import { View, TextInput, SafeAreaView, Text } from "react-native";
import {
  ScrollView,
  TouchableNativeFeedback,
} from "react-native-gesture-handler";
import Icons from "react-native-vector-icons/Ionicons";
import { COLORS } from "../styles/colors";
import styles from "../styles/globalStyle";

// components
import GoalsCard from "../components/goalsCard";

class Home extends Component {
  componentDidMount() {
    this.countActiveGoals();
    this.renderGoalsCards();
  }

  countActiveGoals() {
    counter = 0;

    this.props.goalsData.forEach((element) => {
      if (element.isActive == true) {
        counter++;
      }
    });

    this.props.setGoalsDataActiveNumber(counter);
  }

  toggleActiveCard(key) {
    let copyGoalsData = [...this.props.goalsData];
    let index = copyGoalsData.findIndex((data) => data.id == key);

    if (copyGoalsData[index].isActive == false) {
      copyGoalsData[index].isActive = true;
    } else {
      copyGoalsData[index].isActive = false;
    }

    this.props.setGoalsData(copyGoalsData);
    this.countActiveGoals();
  }

  renderGoalsCards = () =>
    this.props.goalsData.map((data) => (
      <TouchableNativeFeedback
        key={data.id}
        onPress={() => this.toggleActiveCard(data.id)}
      >
        <GoalsCard
          id={data.id}
          imgPath={data.imgPath}
          creditsNumber={data.creditsNumber}
          title={data.title}
          done={data.isActive}
        />
      </TouchableNativeFeedback>
    ));

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.textInputWrapper}>
          <TextInput
            style={styles.textInput}
            placeholder="deine Stadt eingeben:.."
            placeholderTextColor={COLORS.secondaryColor}
          />
          <Icons
            name="search"
            size={16}
            color={COLORS.primaryColor}
            style={{ alignSelf: "center" }}
          />
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 20,
              paddingBottom: 20,
            }}
          >
            <Text style={styles.subHeadterTitle}>Heutige Ziele</Text>
            <Text style={styles.subHeadterTitle}>
              {this.props.goalsDataActiveNumber} von{" "}
              {this.props.goalsData.length}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {this.renderGoalsCards()}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    goalsData: state.goalsData,
    goalsDataActiveNumber: state.goalsDataActiveNumber,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setGoalsDataActiveNumber: (goalsDataActiveNumber) =>
      dispatch({
        type: "SET_GOALSDATA_ACTIVE_NUMBER",
        goalsDataActiveNumber: goalsDataActiveNumber,
      }),
    setGoalsData: (goalsData) =>
      dispatch({ type: "SET_GOALSDATA", goalsData: goalsData }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

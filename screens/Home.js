import React, { Component } from "react";
import { View, TextInput, SafeAreaView, Text, Image } from "react-native";
import Icons from "react-native-vector-icons/Ionicons";
import { COLORS } from "../styles/colors";
import styles from "../styles/globalStyle";

import goalsData from "../data/goalsData";

// components
import GoalsCard from "../components/goalsCard";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goalsData: goalsData,
      doneActivities: 3,
    };
  }

  countActiveElements = () => {
    let elem = this.state.goalsData.data;
    let counter = 0;
    elem.forEach((element) => {
      if (element.isActive == true) {
        counter++;
      }
    });

    this.setState({
      doneActivities: (this.state.doneActivities = counter),
    });

    console.log(counter);
  };

  componentDidMount() {
    this.countActiveElements();
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
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
              {this.state.doneActivities} von {this.state.goalsData.data.length}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {this.state.goalsData.data.map((data) => (
              <GoalsCard
                key={data.id}
                imgPath={data.imgPath}
                creditsNumber={data.creditsNumber}
                title={data.title}
                done={data.isActive}
              />
            ))}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Home;

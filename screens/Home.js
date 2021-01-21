import React from "react";
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
import GoalsCard from "../components/goalsCard";
import LinkCard from "../components/linkCard";
import ApiCard from "../components/apiCard";

const Home = ({ ...props }) => {
  const [searchText, onChangeSearchText] = React.useState("oberhausen");
  const [name, handleName] = React.useState(" ");
  const [cases, handleCases] = React.useState(" ");
  const [deaths, handleDeaths] = React.useState(" ");
  const [cases7_p_1, handleCases7_p_1] = React.useState(" ");
  const [population, handlePopulation] = React.useState(" ");
  const [cases_per_population, handleCases_per_population] = React.useState(
    " "
  );
  const [death_rate, handleDeath_rate] = React.useState(" ");

  const coronaAPIcall = () => {
    const API = `https://public.opendatasoft.com/api/records/1.0/search/?dataset=covid-19-germany-landkreise&q=${searchText}&facet=last_update&facet=name&facet=rs&facet=bez&facet=bl`;
    fetch(API)
      .then((response) => response.json())
      .then((jsonData) => {
        // jsonData is parsed json object received from url
        let name = "";
        handleName((name = [jsonData.records[0].fields.name]));
        let cases = "";
        handleCases((cases = [jsonData.records[0].fields.cases]));
        let deaths = "";
        handleDeaths((deaths = [jsonData.records[0].fields.deaths]));
        let population = "";
        handlePopulation((population = [jsonData.records[0].fields.ewz]));
        let cases7_p_1 = "";
        handleCases7_p_1(
          (cases7_p_1 = [jsonData.records[0].fields.cases7_p_1])
        );
        let cases_per_population = "";
        handleCases_per_population(
          (cases_per_population = [
            jsonData.records[0].fields.cases_per_population,
          ])
        );
        let death_rate = "";
        handleDeath_rate(
          (death_rate = [jsonData.records[0].fields.death_rate])
        );
      })
      .catch((error) => {
        // handle your errors here
        console.error(error);
      });
  };

  const countActiveGoals = () => {
    counter = 0;

    props.goalsData.forEach((element) => {
      if (element.isActive == true) {
        counter++;
      }
    });

    props.setGoalsDataActiveNumber(counter);
  };

  const toggleActiveCard = (key) => {
    let copyGoalsData = [...props.goalsData];
    let copyUserData = [...props.userData];
    let index = copyGoalsData.findIndex((data) => data.id == key);

    if (copyGoalsData[index].isActive == false) {
      copyGoalsData[index].isActive = true;
      copyUserData[0].shopCredits += copyGoalsData[index].creditsNumber;
    } else {
      copyGoalsData[index].isActive = false;
      copyUserData[0].shopCredits -= copyGoalsData[index].creditsNumber;
    }

    props.setGoalsData(copyGoalsData);
    props.setUserData(copyUserData);
    countActiveGoals();
  };

  const renderGoalsCards = () =>
    props.goalsData.map((data) => (
      <TouchableNativeFeedback
        key={data.id}
        onPress={() => toggleActiveCard(data.id)}
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

  return (
    <ScrollView style={styles.container}>
      <View style={styles.textInputWrapper}>
        <TextInput
          style={styles.textInput}
          placeholder="deine Stadt eingeben:.."
          placeholderTextColor={COLORS.secondaryColor}
          onChangeText={(text) => onChangeSearchText(text)}
        />
        <TouchableNativeFeedback
          style={{ backgroundColor: COLORS.bgColor }}
          onPress={coronaAPIcall}
        >
          <Icons
            name="search"
            size={16}
            color={COLORS.primaryColor}
            style={{ padding: 20 }}
          />
        </TouchableNativeFeedback>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        <Text style={styles.subHeadterTitle}>{name}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ApiCard title="Cases" value={cases} />
        <ApiCard title="Deaths" value={deaths} />
        <ApiCard title="last 7 days" value={cases7_p_1} />
        <ApiCard title="Population" value={Number(population)} />
        <ApiCard
          title="Cases / Population"
          value={Number(cases_per_population).toFixed(3) + "%"}
        />
        <ApiCard
          title="Death rate"
          value={Number(death_rate).toFixed(3) + "%"}
        />
      </View>
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
          {props.goalsDataActiveNumber} von {props.goalsData.length}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {renderGoalsCards()}
      </View>
      <View style={{ marginTop: 30, marginBottom: 30 }}>
        <LinkCard linkTitle="Neue Maßnahmen" linkSource="land.nrw" />
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    goalsData: state.goalsData,
    goalsDataActiveNumber: state.goalsDataActiveNumber,
    userData: state.userData,
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
    setUserData: (userData) =>
      dispatch({ type: "SET_USERDATA", userData: userData }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

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
import API from "../backend/API";

// components
import GoalsCard from "../components/goalsCard";
import LinkCard from "../components/linkCard";
import ApiCard from "../components/apiCard";
import ErrorMessage from "../components/errorMessage";

const Home = ({ ...props }) => {
  //local state datas
  const [searchText, onChangeSearchText] = React.useState("");
  const [jsonAPIdata, setAPIdata] = React.useState([]);
  const [isAPICardActive, setAPICardActive] = React.useState(false);
  const [flasMessage, setMessage] = React.useState(false);

  // api call to fetch the data, and print a error message
  // if the jsondata is empty
  const APIcall = () => {
    API(searchText).then(function (jsonData) {
      let data = [];
      setAPIdata((data = jsonData));
    });

    if (searchText.length > 0) {
      setAPICardActive(true);
    } else {
      setAPICardActive(false);
    }

    if (jsonAPIdata == null) {
      setMessage(true);
      setTimeout(() => {
        setMessage(false);
      }, 3700);
    }
  };

  // count all active cards an set the Sumnumber
  const countActiveGoals = () => {
    counter = 0;

    props.goalsData.forEach((element) => {
      if (element.isActive == true) {
        counter++;
      }
    });

    props.setGoalsDataActiveNumber(counter);
  };

  // update the state of the goals card with gifen index
  // and upgrade or decrease users credit Number
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

  // if city is not given, render message to put i an city
  // if city or jsonData is given render the ApiCards
  const renderAPICards = () => {
    if (
      isAPICardActive &&
      searchText.length > 0 &&
      jsonAPIdata instanceof Object
    ) {
      return (
        <>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 20,
              paddingBottom: 20,
            }}
          >
            <Text style={styles.subHeadterTitle}>{jsonAPIdata.name}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <ApiCard title="Cases" value={jsonAPIdata.cases} />
            <ApiCard title="Deaths" value={jsonAPIdata.deaths} />
            <ApiCard title="last 7 days" value={jsonAPIdata.cases7_p_1} />
            <ApiCard title="Population" value={Number(jsonAPIdata.ewz)} />
            <ApiCard
              title="Cases / Population"
              value={Number(jsonAPIdata.cases_per_population).toFixed(2) + "%"}
            />
            <ApiCard
              title="Death rate"
              value={Number(jsonAPIdata.death_rate).toFixed(2) + "%"}
            />
          </View>
        </>
      );
    } else {
      return (
        <View
          style={{
            justifyContent: "center",
            alignSelf: "center",
            marginTop: 30,
          }}
        >
          <Text style={styles.title}>Bitte gib deine Stadt ein!</Text>
        </View>
      );
    }
  };

  return (
    <>
      {flasMessage ? (
        <ErrorMessage
          message=" Bitte eine gültige Stadt eingeben!"
          description="Deine Suchanfrage hat leider keine Ergebnisse geliefert, probiere es noch einmal!"
        />
      ) : null}
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
            onPress={APIcall}
          >
            <Icons
              name="search"
              size={16}
              color={COLORS.primaryColor}
              style={{ padding: 20 }}
            />
          </TouchableNativeFeedback>
        </View>
        {renderAPICards()}
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
          <LinkCard
            linkTitle="Neue Maßnahmen"
            linkSource="land.nrw"
            link="Notification"
          />
        </View>
      </ScrollView>
    </>
  );
};

// take infos from the global state (store) and use it as props
const mapStateToProps = (state) => {
  return {
    goalsData: state.goalsData,
    goalsDataActiveNumber: state.goalsDataActiveNumber,
    userData: state.userData,
  };
};

// dispatch some states, to update the store with given data
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

// connect redux with this function to use the store
export default connect(mapStateToProps, mapDispatchToProps)(Home);

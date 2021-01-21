import React from "react";
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
import ShopCard from "../components/shopCard";

const Gift = ({ ...props }) => {
  const toggleActiveCard = (key) => {
    let copyshopData = [...props.shopData];
    let copyUserData = [...props.userData];

    let index = copyshopData.findIndex((data) => data.id == key);

    if (copyshopData[index].isActive == false) {
      copyshopData[index].isActive = true;
      if (!(copyUserData[0].shopCredits <= 0)) {
        copyUserData[0].shopCredits -= copyshopData[index].creditsNumber;
      }
    } else {
      copyshopData[index].isActive = false;
    }

    if (copyUserData[0].shopCredits <= 0) {
      copyUserData[0].shopCredits = 0;
    }

    props.setUserData(copyUserData);
    props.setshopData(copyshopData);
  };

  const rendershopCards = () =>
    props.shopData.map((data) => (
      <TouchableNativeFeedback
        disabled={
          data.creditsNumber > props.userData[0].shopCredits ? true : false
        }
        key={data.id}
        onPress={() => toggleActiveCard(data.id)}
        style={{
          opacity: data.creditsNumber > props.userData[0].shopCredits ? 0.2 : 1,
        }}
      >
        <ShopCard
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
      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          alignItems: "center",
          marginBottom: 30,
        }}
      >
        <Icons name="server" size={18} color={COLORS.primaryColor} />
        <Text style={[styles.title, { paddingLeft: 20 }]}>
          {props.userData[0].shopCredits} Credits
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {rendershopCards()}
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    shopData: state.shopData,
    userData: state.userData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setshopData: (shopData) =>
      dispatch({ type: "SET_SHOPDATA", shopData: shopData }),
    setUserData: (userData) =>
      dispatch({ type: "SET_USERDATA", userData: userData }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Gift);

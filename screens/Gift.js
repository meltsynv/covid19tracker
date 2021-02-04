import React, { useState } from "react";
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
import ModalShopForm from "../components/modalShopForm";
import ShopTinyCard from "../components/shopTinyCard";

const Gift = ({ ...props }) => {
  const [activeShopButton, setShopButton] = useState(true);
  const [activeTinyShopSection, setTinyShopSection] = useState(false);

  // toggle the actzive state of the Gift card
  // same logic is implementet in Home screen
  const toggleActiveCard = (key) => {
    let copyshopData = [...props.shopData];
    let copyUserData = [...props.userData];

    let index = copyshopData.findIndex((data) => data.id == key);

    if (copyshopData[index].isActive == false) {
      copyshopData[index].isActive = true;
      copyUserData[0].shopCredits -= copyshopData[index].creditsNumber;
    } else {
      copyshopData[index].isActive = false;
      copyUserData[0].shopCredits += copyshopData[index].creditsNumber;
    }

    if (copyUserData[0].shopCredits <= 0) {
      copyUserData[0].shopCredits = 0;
    }

    props.setUserData(copyUserData);
    props.setshopData(copyshopData);

    toggleShopCard();
  };

  // if item is selected show button and the tiny summery bar with active gifts
  const toggleShopCard = () => {
    let counter = 0;
    props.shopData.map((data) => {
      if (data.isActive == true) {
        counter++;
      }
    });

    if (counter >= 1) {
      setShopButton(false);
      setTinyShopSection(true);
    } else {
      setShopButton(true);
      setTinyShopSection(false);
    }
  };

  // reset the current selected items and bring the state to the previous version
  const resetCards = () => {
    let copyshopData = [...props.shopData];
    let copyUserData = [...props.userData];

    let array = [];

    props.shopData
      .filter((data) => data.isActive == true)
      .map((data) => {
        array = array.concat(data.id);
      });

    array.flatMap((elem) => {
      let index = copyshopData.findIndex((data) => data.id == elem);
      copyshopData[index].isActive = false;
      copyUserData[0].shopCredits += copyshopData[index].creditsNumber;
    });

    props.setUserData(copyUserData);
    props.setshopData(copyshopData);

    toggleShopCard();
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

  const rendershoptinyCard = () =>
    props.shopData
      .filter((data) => data.isActive == true)
      .map((data) => <ShopTinyCard key={data.id} imgPath={data.imgPath} />);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          alignItems: "center",
          paddingBottom: 15,
        }}
      >
        <Icons name="server" size={18} color={COLORS.primaryColor} />
        <Text style={[styles.title, { paddingLeft: 20 }]}>
          {props.userData[0].shopCredits} Credits
        </Text>
      </View>
      <ScrollView>
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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          display: activeTinyShopSection ? "flex" : "none",
        }}
      >
        <ScrollView horizontal={true}>{rendershoptinyCard()}</ScrollView>
        <TouchableNativeFeedback
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: 44,
            height: 44,
            backgroundColor: COLORS.bgColor,
          }}
          onPress={() => resetCards()}
        >
          <Icons name="trash" size={24} color={COLORS.primaryColor} />
        </TouchableNativeFeedback>
      </View>
      <View style={{ alignItems: "center", paddingTop: 15 }}>
        <ModalShopForm active={activeShopButton} />
      </View>
    </View>
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

import React, { useState } from "react";
import { connect } from "react-redux";
import { Text, View, StyleSheet, Dimensions, Image, Alert } from "react-native";
import {
  ScrollView,
  TouchableNativeFeedback,
} from "react-native-gesture-handler";
import Modal from "react-native-modal";
import Icons from "react-native-vector-icons/Ionicons";
import { COLORS } from "../styles/colors";

// components
import ShopMiniCard from "./shopMiniCard";

// images
import delivery from "../assets/images/delivery.png";

const ModalShopForm = ({ active, ...props }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const alertMessage = () => {
    Alert.alert(
      "Bestätigung",
      "Ihre Bestellung ist unterwegs, bleiben Sie gesund!",
      [
        {
          text: "Ok",
        },
      ]
    );

    toggleModal();
  };

  const rendershopCards = () =>
    props.shopData
      .filter((data) => data.isActive == true)
      .map((data) => (
        <ShopMiniCard
          key={data.id}
          id={data.id}
          imgPath={data.imgPath}
          creditsNumber={data.creditsNumber}
          title={data.title}
          done={data.isActive}
        />
      ));
  return (
    <>
      <TouchableNativeFeedback
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignSelf: "center",
          backgroundColor: COLORS.primaryColor,
          padding: 15,
          borderRadius: 5,
          width: Dimensions.get("window").width - 100,
          opacity: active ? 0.5 : 1,
        }}
        disabled={active}
        onPress={toggleModal}
      >
        <Text style={{ color: COLORS.white, fontSize: 16, fontWeight: "bold" }}>
          Bestellen
        </Text>
        <Icons name="gift" size={20} color={COLORS.white} />
      </TouchableNativeFeedback>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        animationIn="fadeInRightBig"
      >
        <View style={styles.container}>
          <View style={{ marginBottom: 20 }}>
            <Text style={[styles.title, { marginBottom: 15 }]}>
              Vielen Dank
            </Text>
            <Text style={styles.p}>
              Deine Bestellung ist soeben eingegangen und wird an deine
              angegebene Adresse geliefert. Vielen Dank, dass du uns dabei
              hilfst die Pandemie einzudämmen.
            </Text>
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text
              style={[styles.title, { textAlign: "left", marginBottom: 15 }]}
            >
              Zusammenfassung der Bestellung
            </Text>
            <ScrollView horizontal={true}>{rendershopCards()}</ScrollView>
          </View>
          <View style={{ marginBottom: "auto" }}>
            <Text
              style={[styles.title, { textAlign: "left", marginBottom: 15 }]}
            >
              Adresse
            </Text>
            <View>
              <Text style={styles.p}>{props.userData[0].userName}</Text>
              <Text
                style={styles.p}
              >{`${props.userData[0].street} ${props.userData[0].homeNumber}`}</Text>
              <Text
                style={styles.p}
              >{`${props.userData[0].zip} ${props.userData[0].city}`}</Text>
              <Text style={styles.p}>{props.userData[0].country}</Text>
            </View>
            <View style={{ alignItems: "center", marginTop: 30 }}>
              <Image source={delivery} />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: 20,
    borderColor: COLORS.primaryColor,
    borderWidth: 1,
  },
  title: {
    fontSize: 20,
    color: COLORS.primaryColor,
    textAlign: "center",
    fontWeight: "bold",
  },
  p: {
    color: "#7F7F7F",
    fontSize: 14,
    lineHeight: 24,
  },
});

const mapStateToProps = (state) => {
  return {
    shopData: state.shopData,
    userData: state.userData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalShopForm);

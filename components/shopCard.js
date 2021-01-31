import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
import Icons from "react-native-vector-icons/Ionicons";
import { COLORS } from "../styles/colors";

const ShopCard = ({ imgPath, creditsNumber, title, done }) => (
  <View style={styles.shopCardWrapper}>
    <View style={styles.shopImageWrapper}>
      <ImageBackground source={imgPath} style={styles.shopImage} />
    </View>
    <View style={styles.shopCoinsWrapper}>
      <Text
        style={{
          color: "#111111",
          fontSize: 14,
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          color: COLORS.primaryColor,
          fontSize: 16,
        }}
      >
        {creditsNumber} Credits
      </Text>
    </View>
    <View style={[styles.shopCheckWrapper, { opacity: done ? 1 : 0 }]}>
      <Icons name="checkmark" size={22} color={COLORS.primaryColor} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  shopCardWrapper: {
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: COLORS.bgColor,
    borderWidth: 2,
    borderColor: COLORS.primaryColor,
    borderRadius: 15,
    width: Dimensions.get("window").width / 2 - 30,
    marginBottom: 15,
    overflow: "hidden",
  },
  shopImageWrapper: {
    alignSelf: "center",
    width: "100%",
  },
  shopImage: {
    alignSelf: "center",
    width: "100%",
    height: 150,
  },
  shopCoinsWrapper: {
    padding: 10,
  },
  shopCheckWrapper: {
    position: "absolute",
    right: 10,
    top: 10,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    padding: 10,
    width: 40,
    height: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 7.65,
    elevation: 3,
  },
});

export default ShopCard;

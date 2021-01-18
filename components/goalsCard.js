import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import Icons from "react-native-vector-icons/Ionicons";
import { COLORS } from "../styles/colors";

const GoalsCard = ({ imgPath, creditsNumber, title, done }) => (
  <View style={styles.goalsCardWrapper}>
    <View style={styles.goalsImageWrapper}>
      <Image source={imgPath} style={styles.goalsImage} />
    </View>
    <View style={styles.goalsCoinsWrapper}>
      <Text
        style={{ color: COLORS.primaryColor, fontSize: 18, fontWeight: "bold" }}
      >
        {creditsNumber}
        <Icons name="server" size={16} color={COLORS.primaryColor} />
      </Text>
    </View>
    <Text
      style={{ color: COLORS.primaryColor, fontSize: 16, alignSelf: "center" }}
    >
      {title}
    </Text>
    <View style={[styles.goalsCheckWrapper, { opacity: done ? 1 : 0 }]}>
      <Icons name="checkmark" size={24} color={COLORS.primaryColor} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  goalsCardWrapper: {
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: COLORS.bgColor,
    borderWidth: 2,
    borderColor: COLORS.primaryColor,
    borderRadius: 5,
    padding: 5,
    width: Dimensions.get("window").width / 2 - 30,
    marginBottom: 15,
  },
  goalsImageWrapper: {
    alignSelf: "center",
    width: "55%",
  },
  goalsImage: {
    resizeMode: "contain",
    alignSelf: "center",
    width: "100%",
    height: 90,
  },
  goalsCoinsWrapper: {
    alignSelf: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },
  goalsCheckWrapper: {
    position: "absolute",
    right: 10,
    top: 10,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    padding: 10,
    width: 44,
    height: 44,
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

export default GoalsCard;

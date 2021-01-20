import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import Icons from "react-native-vector-icons/Ionicons";
import { COLORS } from "../styles/colors";

const LinkCard = ({ linkTitle, linkSource }) => (
  <View
    style={{ backgroundColor: COLORS.bgColor, padding: 10, borderRadius: 5 }}
  >
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Icons
          name="earth"
          size={14}
          color={COLORS.primaryColor}
          style={{ paddingRight: 5 }}
        />
        <Text style={styles.linkSource}>{linkSource}</Text>
      </View>
      <TouchableNativeFeedback style={styles.linkButton}>
        <View>
          <Icons
            name="arrow-forward-outline"
            size={16}
            color={COLORS.primaryColor}
          />
        </View>
      </TouchableNativeFeedback>
    </View>
    <Text style={styles.linkTitle}>{linkTitle}</Text>
  </View>
);

const styles = StyleSheet.create({
  linkSource: {
    color: COLORS.primaryColor,
    fontSize: 14,
  },
  linkButton: {
    backgroundColor: COLORS.white,
    borderRadius: 5,
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    paddingBottom: 10,
  },
  linkTitle: {
    fontSize: 30,
    color: COLORS.primaryColor,
  },
});

export default LinkCard;

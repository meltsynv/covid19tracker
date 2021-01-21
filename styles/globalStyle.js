import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { COLORS } from "./colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  textInputWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: COLORS.secondaryColor,
    borderWidth: 1,
    paddingLeft: 20,
    borderRadius: 5,
  },
  textInput: {
    fontSize: 14,
    color: COLORS.primaryColor,
  },
  subHeadterTitle: {
    color: COLORS.primaryColor,
    fontWeight: "bold",
    fontSize: 18,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.primaryColor,
  },
  touchableButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.primaryColor,
    padding: 15,
    borderRadius: 5,
    width: Dimensions.get("window").width - 100,
  },
});

export default styles;

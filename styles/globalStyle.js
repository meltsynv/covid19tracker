import { StyleSheet } from "react-native";
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
    borderColor: COLORS.secondaryColor,
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
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
});

export default styles;

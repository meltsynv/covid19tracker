import React from "react";
import { connect } from "react-redux";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, StatusBar } from "react-native";
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import FAIcons from "react-native-vector-icons/FontAwesome";
import { ImpressumStackNav, DatenschutzStackNav } from "./StackNavigation";
import MainNavigation from "./TabNavigation";
import { COLORS } from "../styles/colors";

// screens
import Login from "../screens/Login";
import Onboarding from "../screens/Onboarding";
import Signup from "../screens/Signup";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const NestedNavigation = ({ setLogin, userData, ...props }) => {
  return (
    <NavigationContainer>
      {props.loginState ? (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={Signup} />
          <Stack.Screen name="Onboarding" component={Onboarding} />
        </Stack.Navigator>
      ) : (
        <Drawer.Navigator
          drawerContent={(props) => {
            return (
              <View style={{ flex: 1 }}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    backgroundColor: COLORS.secondaryColor,
                    paddingTop: StatusBar.currentHeight,
                    borderBottomEndRadius: 20,
                    borderBottomStartRadius: 20,
                    marginBottom: 5,
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={{ paddingRight: 10, paddingLeft: 5 }}>
                      <Ionicons
                        name="person-circle"
                        size={60}
                        color={COLORS.primaryColor}
                      />
                    </View>
                    <View>
                      <Text>{userData[0].userName}</Text>
                      <Text>{userData[0].mail}</Text>
                    </View>
                  </View>
                </View>
                <View style={{ flex: 6 }}>
                  <DrawerItemList {...props} />
                </View>
                <View style={{ flex: 1 }}>
                  <DrawerItem
                    label="Logout"
                    icon={({ focused, size }) => (
                      <Ionicons
                        name="log-out"
                        size={size}
                        color={focused ? COLORS.primaryColor : "#ccc"}
                      />
                    )}
                    onPress={() => setLogin(true)}
                  />
                  <Text
                    style={{ textAlign: "center", color: COLORS.primaryColor }}
                  >
                    <FAIcons
                      name="copyright"
                      size={14}
                      color={COLORS.primaryColor}
                    />{" "}
                    Covid-19 Tracker 2021
                  </Text>
                </View>
              </View>
            );
          }}
        >
          <Drawer.Screen
            name="Home"
            component={MainNavigation}
            options={{
              title: "Home",
              drawerIcon: ({ focused, size }) => (
                <Ionicons
                  name="home"
                  size={size}
                  color={focused ? COLORS.primaryColor : "#ccc"}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Impressum"
            component={ImpressumStackNav}
            options={{
              title: "Impressum",
              drawerIcon: ({ focused, size }) => (
                <Ionicons
                  name="document"
                  size={size}
                  color={focused ? COLORS.primaryColor : "#ccc"}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Datenschutz"
            component={DatenschutzStackNav}
            options={{
              title: "Datenschutz",
              drawerIcon: ({ focused, size }) => (
                <Ionicons
                  name="document"
                  size={size}
                  color={focused ? COLORS.primaryColor : "#ccc"}
                />
              ),
            }}
          />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    loginState: state.loginState,
    userData: state.userData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLogin: (loginState) =>
      dispatch({ type: "SET_LOGIN", loginState: loginState }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NestedNavigation);

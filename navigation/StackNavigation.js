import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS } from "../styles/colors";

//screens
import Home from "../screens/Home";
import Notification from "../screens/Notification";
import Gift from "../screens/Gift";
import Profile from "../screens/Profile";

const navHeaderStyle = {
  headerStyle: {
    backgroundColor: COLORS.secondaryColor,
  },
  headerTintColor: COLORS.primaryColor,
  headerTitleStyle: {
    fontSize: 16,
    textTransform: "uppercase",
  },
  headerTitleAlign: "center",
};

const HomeStack = createStackNavigator();
const HomeStackNav = ({ navigation }) => (
  <HomeStack.Navigator screenOptions={navHeaderStyle}>
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{
        title: "Willkommen, John Doe",
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={24}
            backgroundColor={COLORS.secondaryColor}
            style={{ paddingLeft: 16 }}
            color={COLORS.primaryColor}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </HomeStack.Navigator>
);

const NotificationStack = createStackNavigator();
const NotificationStackNav = ({ navigation }) => (
  <NotificationStack.Navigator screenOptions={navHeaderStyle}>
    <NotificationStack.Screen
      name="Notification"
      component={Notification}
      options={{
        title: "Notification",
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={24}
            backgroundColor={COLORS.secondaryColor}
            style={{ paddingLeft: 16 }}
            color={COLORS.primaryColor}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </NotificationStack.Navigator>
);

const GiftStack = createStackNavigator();
const GiftStackNav = ({ navigation }) => (
  <GiftStack.Navigator screenOptions={navHeaderStyle}>
    <GiftStack.Screen
      name="Gift"
      component={Gift}
      options={{
        title: "Deine erreichten Ziele",
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={24}
            backgroundColor={COLORS.secondaryColor}
            style={{ paddingLeft: 16 }}
            color={COLORS.primaryColor}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </GiftStack.Navigator>
);

const ProfileStack = createStackNavigator();
const ProfileStackNav = ({ navigation }) => (
  <ProfileStack.Navigator screenOptions={navHeaderStyle}>
    <ProfileStack.Screen
      name="Profile"
      component={Profile}
      options={{
        title: "Profile",
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={24}
            backgroundColor={COLORS.secondaryColor}
            style={{ paddingLeft: 16 }}
            color={COLORS.primaryColor}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </ProfileStack.Navigator>
);

export { HomeStackNav, NotificationStackNav, GiftStackNav, ProfileStackNav };

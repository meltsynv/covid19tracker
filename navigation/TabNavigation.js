import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  GiftStackNav,
  HomeStackNav,
  NotificationStackNav,
  ProfileStackNav,
} from "./StackNavigation";
import { COLORS } from "../styles/colors";

const Tab = createMaterialBottomTabNavigator();

const MainNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Notification"
      activeColor={COLORS.secondaryColor}
      style={{ backgroundColor: COLORS.secondaryColor }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNav}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationStackNav}
        options={{
          tabBarLabel: "Notify",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Gift"
        component={GiftStackNav}
        options={{
          tabBarLabel: "Gift",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="gift" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackNav}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigation;

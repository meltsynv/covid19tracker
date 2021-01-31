import React from "react";
import { connect } from "react-redux";
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

const MainNavigation = ({ userData, shopData, ...props }) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={COLORS.secondaryColor}
      style={{ backgroundColor: COLORS.secondaryColor }}
    >
      <Tab.Screen
        name="Home"
        children={() => (
          <HomeStackNav title={userData[0].userName} {...props} />
        )}
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
        children={() => (
          <GiftStackNav
            credits={userData[0].shopCredits}
            shopData={shopData}
            {...props}
          />
        )}
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

const mapStateToProps = (state) => {
  return {
    userData: state.userData,
    shopData: state.shopData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainNavigation);

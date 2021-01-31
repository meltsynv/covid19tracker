import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS } from "../styles/colors";

//screens
import Home from "../screens/Home";
import Notification from "../screens/Notification";
import Gift from "../screens/Gift";
import Profile from "../screens/Profile";
import Impressum from "../screens/Impressum";
import Datenschutz from "../screens/Datenschutz";

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
const HomeStackNav = ({ navigation, title }) => (
  <HomeStack.Navigator screenOptions={navHeaderStyle}>
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{
        title: `Willkommen ${title}`,
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
const GiftStackNav = ({ navigation, credits, shopData }) => {
  const activeShopItemsCounter = () => {
    let counter = 0;
    shopData.forEach((element) => {
      if (element.isActive == true) {
        counter++;
      }
    });
    return counter;
  };

  return (
    <GiftStack.Navigator screenOptions={navHeaderStyle}>
      <GiftStack.Screen
        name="Gift"
        component={Gift}
        options={{
          title: `Shop Credits ${credits}`,
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
          headerRight: () => (
            <View style={{ flexDirection: "row" }}>
              <Icon.Button
                name="basket"
                size={24}
                backgroundColor={COLORS.secondaryColor}
                style={{ paddingRight: 16 }}
                color={COLORS.primaryColor}
              />
              <View
                style={{
                  position: "absolute",
                  right: 14,
                  top: 0,
                  backgroundColor: COLORS.primaryColor,
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: COLORS.secondaryColor,
                  borderWidth: 3,
                }}
              >
                <Text
                  style={{
                    color: COLORS.secondaryColor,
                  }}
                >
                  {activeShopItemsCounter()}
                </Text>
              </View>
            </View>
          ),
        }}
      />
    </GiftStack.Navigator>
  );
};

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

const ImpressumStack = createStackNavigator();
const ImpressumStackNav = ({ navigation }) => (
  <ImpressumStack.Navigator screenOptions={navHeaderStyle}>
    <ImpressumStack.Screen
      name="Impressum"
      component={Impressum}
      options={{
        title: "Impressum",
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
  </ImpressumStack.Navigator>
);

const DatenschutzStack = createStackNavigator();
const DatenschutzStackNav = ({ navigation }) => (
  <DatenschutzStack.Navigator screenOptions={navHeaderStyle}>
    <DatenschutzStack.Screen
      name="Datenschutz"
      component={Datenschutz}
      options={{
        title: "Datenschutzerklärung",
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
  </DatenschutzStack.Navigator>
);

export {
  HomeStackNav,
  NotificationStackNav,
  GiftStackNav,
  ProfileStackNav,
  ImpressumStackNav,
  DatenschutzStackNav,
};

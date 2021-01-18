import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainNavigation from "./TabNavigation";

import Impressum from "../screens/Impressum";
import Datenschutz from "../screens/Datenscutz";

const Drawer = createDrawerNavigator();
const NestedNavigation = () => (
  <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MainNavigation} />
      <Drawer.Screen name="Impressum" component={Impressum} />
      <Drawer.Screen name="Datenschutz" component={Datenschutz} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default NestedNavigation;

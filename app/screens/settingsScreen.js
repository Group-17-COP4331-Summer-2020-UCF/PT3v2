import React from "react";
import { Text, View, TextInput, Image } from "react-native";
import { CheckBox } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { mdiCogOutline } from "@mdi/js";

import { styles } from "../styles/styles.js";

import { FancyButton } from "../components/fancyButton.js";

export const SettingsScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={["#20E9A9", "#5762D5"]} style={styles.screen}>
      <Text>This is the settings screen</Text>
      <FancyButton text="Logout" onPress={() => navigation.navigate("Login")} />
    </LinearGradient>
  );
};

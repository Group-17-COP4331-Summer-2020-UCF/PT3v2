import "react-native-gesture-handler";
import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  StartupScreen,
  LoginScreen,
  HomeScreen,
  SignUpScreen,
} from "./Screens.js";
// Imports ----------------------------------------------------------------------------------------------

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Startup" component={StartupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import MeetingRoom from "./Screens/MeetingRoom";

const Navigation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Home}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Room" component={MeetingRoom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

import React from "react";
import CreateAccount from "../screens/CreateAccount";
import Login from "../screens/Login";
import Welcome from "../screens/Welcome";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function LoggedOutNav() {
  return (
    <Stack.Navigator screenOptions={{
      headerBackTitleVisible: false,
      headerTintColor: "black"
    }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
    </Stack.Navigator>
  )
}
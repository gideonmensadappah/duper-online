import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import * as Expo from "expo";
import { View, Text, TouchableOpacity, Button } from "react-native";
import HomeScreen from "./Screens/Home";
import ShoppingList from "./Screens/ShoppingList";
import Logo from "./Assets/Logo";
import Icon from "./Components/Icon";

export type RootStackParamList = {
  Home: undefined;
  ShoppingList: { listId: string; title: string; subtitle?: string };
};
const Stack = createStackNavigator<RootStackParamList>();

const HeaderLogo: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Logo />
    </View>
  );
};

const SearchButton: React.FC = () => {
  return (
    <TouchableOpacity
      style={{
        width: "30px",
        height: "30px",
        marginVertical: "3px",
        marginHorizontal: "11px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Icon name="search" primary />
    </TouchableOpacity>
  );
};

const screenOptions: StackNavigationOptions = {
  headerTitle: () => <HeaderLogo />,
  headerRight: () => <SearchButton />,
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={screenOptions}
        />
        <Stack.Screen
          name="ShoppingList"
          component={ShoppingList}
          options={screenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Expo.registerRootComponent(App);

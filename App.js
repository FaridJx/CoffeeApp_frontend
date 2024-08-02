import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import BasketScreen from "./screens/BasketScreen";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import user from "./reducers/user";

const store = configureStore({
  reducer: { user },
});

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
          <Stack.Screen
            name="Product"
            component={ProductScreen}
            options={{ headerShown: false, animation: "slide_from_bottom" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = "";

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Basket") {
            iconName = "shopping-bag";
          }

          return (
            <FontAwesome
              name={iconName}
              size={size}
              color={color}
              style={styles.customIcon}
            />
          );
        },
        tabBarActiveTintColor: "#D4A574",
        tabBarInactiveTintColor: "#b2b2b2",
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          marginBottom: 10,
          borderRadius: 50,
          backgroundColor: "#D4A574",
          height: 60,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false, animation: "slide_from_left" }}
      />
      <Tab.Screen name="Basket" component={BasketScreen} options={{tabBarBadge: useSelector((state) => state.user.value.basket.length)}}/>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  customIcon: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: 10,
  },
});

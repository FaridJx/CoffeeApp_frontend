import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import BasketScreen from './screens/BasketScreen';

export default function App() {

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const TabNavigator = () => {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Basket" component={BasketScreen} />
      </Tab.Navigator>
    );
   }

  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}


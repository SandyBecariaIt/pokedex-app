import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen } from "./../screens/Home";
import { ListApp } from "./../screens/ListApp";

export function AppStackNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    // Container for tabs
    <NavigationContainer>
      { /* Tab Navigation content */ }
      <Tab.Navigator>
      { /* Tab For Home screen */ }
        <Tab.Screen
          name="Home"
          component={HomeScreen}
        />
        { /* Tab For List App screen */ }
        <Tab.Screen
          name="List App"
          component={ListApp}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

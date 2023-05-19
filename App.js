import React from "react";
import CurrentWeather from "./src/screens/CurrentWeather";
import UpComingWeather from "./src/screens/UpcomingWeather";
import City from "./src/screens/City";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "grey",
        }}
      >
        <Tab.Screen
          name={"Atual"}
          component={CurrentWeather}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name={"droplet"}
                size={25}
                color={focused ? "tomato" : "black"}
              />
            ),
          }}
        />
        <Tab.Screen name={"Amanhã"} component={UpComingWeather} />
        <Tab.Screen name={"Cidade"} component={City} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

/// 2:44:20

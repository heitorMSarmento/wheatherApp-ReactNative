import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import CurrentWeather from "./src/screens/CurrentWeather";
import UpComingWeather from "./src/screens/UpcomingWeather";

const App = () => {
  return (
    <View style={styles.container}>
      <UpComingWeather />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

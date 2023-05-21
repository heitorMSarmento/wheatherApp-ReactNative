import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  StatusBar,
  ImageBackground,
} from "react-native";
import ListItem from "../components/ListItem";

const UpComingWeather = ({ weatherData }) => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );
  const { wrapper, container, image } = styles;
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <ImageBackground
          source={require("../../assets/upcoming-background.jpg")}
          style={image}
        >
          <FlatList
            data={weatherData}
            renderItem={renderItem}
            keyExtractor={(ListItem) => ListItem.dt_txt}
          />
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "royalblue",
  },
  image: {
    flex: 1,
  },
});

export default UpComingWeather;

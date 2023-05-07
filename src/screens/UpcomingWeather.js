import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  StatusBar,
  ImageBackground,
} from "react-native";
import ListItem from "../components/ListItem";


const DATA = [
  {
    dt_txt: "2022-08-30 15:00:10",
    main: {
      temp_min: 7.55,
      temp_max: 8.55,
    },
    weather: [
      {
        main: "Rain",
      },
    ],
  },
  {
    dt_txt: "2022-08-30 15:00:20",
    main: {
      temp_min: 7.55,
      temp_max: 8.55,
    },
    weather: [
      {
        main: "Rain",
      },
    ],
  },
  {
    dt_txt: "2022-08-30 15:00:30",
    main: {
      temp_min: 7.55,
      temp_max: 8.55,
    },
    weather: [
      {
        main: "Rain",
      },
    ],
  },
];

const UpComingWeather = () => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );
  const { container, image } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/upcoming-background.jpg")}
        style={image}
      >
        <Text>Previsão do tempo</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(ListItem) => ListItem.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "royalblue",
  },
  image: {
    flex: 1
  },
});

export default UpComingWeather;

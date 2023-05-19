import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";
import { weatherType } from "../utilities/wheatherType";

const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    container,
    bodyWrapper,
    tempStyle,
    feels,
    highLowWrapper,
    highLow,
    description,
    message,
  } = styles;

  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData;
  const weatherCondition = weather[0].main;

  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition].backgroundColor },
      ]}
    >
      <View style={container}>
        <Feather
          name={weatherType[weatherCondition].icon}
          size={100}
          color="white"
        />
        <Text style={tempStyle}>{(temp - 273.15).toFixed(1)}ºC</Text>
        <Text style={feels}>{`Sensação de ${(feels_like - 273.15).toFixed(1)}ºC`}</Text>
        <RowText
          message1={`Máxima: ${(temp_max - 273.15).toFixed(1)}ºC`}
          message2={`Mínima: ${(temp_min - 273.15).toFixed(1)}ºC`}
          containerStyles={highLowWrapper}
          message1Styles={highLow}
          message2Styles={highLow}
        />
      </View>
      <RowText
        message1={weather[0].description}
        message2={weatherType[weatherCondition].message}
        containerStyles={bodyWrapper}
        message1Styles={description}
        message2Styles={message}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "pink",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tempStyle: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    color: "black",
    fontSize: 30,
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
  highLow: {
    color: "black",
    fontSize: 20,
  },
});

export default CurrentWeather;

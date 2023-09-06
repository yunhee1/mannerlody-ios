import React, { useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Text,
  Image,
  Vibration,
} from "react-native";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import SoundManager from "../components/SoundManager";
import { Video } from "expo-av";

const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;

const Container = styled.View`
  background-color: white;
  align-items: center;
  flex: 1;
  justify-content: center;
`;

const MainContainer = styled.SafeAreaView``;
const StyledText = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`;
const BarImg = styled.Image`
  margin-top: 125px;
  height: 2px;
`;

const PATTERN = [
    9000,
    1000,
    1000,
    1000,
    1000,
    1000,
    1000,
    1000,
    1000,
    1000,
    1000,
    1000,
    1000,
];
const SongPlay = () => {
   useEffect(() => {
     Vibration.vibrate(PATTERN, true);
   }, []);
  const [data, setData] = useState(
    "https://res.cloudinary.com/detbhtvwc/video/upload/v1693973156/video-appa_dnrobs.mp4"
  );
  return (
    <Container>
      <Video
        source={{ uri: data }}
        shouldPlay
        resizeMode="contain"
        volume={1.0}
        style={styles.fullScreen}
        videoStyle={styles.video}
      ></Video>
      <Button
              title="Stop vibration pattern"
              onPress={() => Vibration.cancel()}
              color="#FF0000"
            />
    </Container>
  );
};

var styles = StyleSheet.create({
  linearGradient: {
    width: Width,
    height: Height,
  },
  avoid: {
    height: "20px",
  },

  vertical: {
    width: "28%",
    height: "5%",
    transform: [{ rotate: "90deg" }],
    marginTop: "70%",
    marginLeft: "80%",
    justifyContent: "center",
    fontSize: 23,
    color: "white",
    alignSelf: "center",
    fontWeight: 600,
  },

  fullScreen: {
    width: "218%",
    height: "100%",
    position: "absolute",
  },
  video: {
    width: "100%",
    height: "100%",
    transform: [{ rotate: "90deg" }],
  },
});

export default SongPlay;

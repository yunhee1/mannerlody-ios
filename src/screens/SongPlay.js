import React, { useEffect } from "react";
import {
  Button,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Text,
  Image,
} from "react-native";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import SoundManager from "../components/SoundManager";
import Video from "react-native-video";

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

// const VerticalText = styled.Text`
//   text-align-vertical: true;
// `;

const SongPlay = () => {
  useEffect(() => {
    SoundManager.loadSound(require("../../assets/songs/baemin_song.mp3"));
  }, []);

  return (
    <Container>
      <LinearGradient
        colors={["#9D41FF", "#6635FA"]}
        style={styles.linearGradient}
      >
        {/* <MainContainer> */}
        <BarImg source={require("../../assets/images/line_img.png")} />

        <Text style={styles.vertical}>멋쟁이 토마토</Text>
        {/* </MainContainer> */}
      </LinearGradient>
      {/* <StyledText>songPlay</StyledText> */}
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
});

export default SongPlay;

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

const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;

const Container = styled.View`
  background-color: white;
  align-items: center;
  flex: 1;
  justify-content: center;
`;

const MainContainer = styled.SafeAreaView`
  flex: 1;
`;
const StyledText = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`;
const BarImg = styled.Image`
  margin-top: 125px;
  height: 2px;
`;

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
        <MainContainer>
          <BarImg source={require("../../assets/images/line_img.png")} />
        </MainContainer>
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
});

export default SongPlay;

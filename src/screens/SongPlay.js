import React, { useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Dimensions,
  Vibration,
  Text,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import { Video } from "expo-av";

const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;

const Container = styled.View`
  background-color: rgba(255, 255, 255, 0);
  align-items: center;
  flex: 1;
  justify-content: center;
`;

const Backbtn = styled.TouchableOpacity`
  margin-bottom: 720px;
  margin-left: 300px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 15px;
`;
const PATTERN = [
  9700, //딩동댕
  1200, //초인종
  900, //소리에
  1400, //얼른
  800, //문을 열었더니
  3000, //그토록
  1000, //기다리던
  2000, //아빠가
  1500, //문앞에
  1500, //서계셨죠
];

const SongPlay = ({ navigation, route, navigate }) => {
  useEffect(() => {
    if (
      data ===
      "https://res.cloudinary.com/detbhtvwc/video/upload/v1693975170/video-appa_dnrobs-a_90_ufqsoy.mp4"
    ) {
      Vibration.vibrate(PATTERN, true);
    }
  }, [data]);

  const [data, setData] = useState(
    "https://res.cloudinary.com/detbhtvwc/video/upload/v1693975170/video-appa_dnrobs-a_90_ufqsoy.mp4"
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
      {/* <TouchableOpacity>
      </TouchableOpacity> */}
      <Backbtn
        // title="Stop vibration pattern"
        onPress={() => {
          Vibration.cancel();
          navigation.navigate("SongInfo"),
            navigation.reset({ routes: [{ name: "SongInfo" }] });
        }}
      >
        <ButtonText>뒤로가기</ButtonText>
      </Backbtn>
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
    // transform: [{ rotate: "90deg" }],
  },
  video: {
    width: "100%",
    height: "100%",
    // transform: [{ rotate: "90deg" }],
  },
});

export default SongPlay;

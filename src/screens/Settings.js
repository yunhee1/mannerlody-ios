import React, { useEffect } from "react";
import styled from "styled-components/native";
import { TouchableOpacity, Button } from "react-native";

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-start;
  background-color: #ffffff;
`;

const Title = styled.Text`
  margin-left: 20px;
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 25px;
  font-weight: 700;
`;

const StyledBackground = styled.ImageBackground`
  flex: 1;
`;

const Settings = ({ navigation }) => {
  return (
    <Container>
      <StyledBackground
        source={require("../../assets/images/setting_screen_image.png")}
      />
    </Container>
  );
};

export default Settings;

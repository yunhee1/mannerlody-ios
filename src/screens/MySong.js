import React, { useEffect } from "react";
import styled from "styled-components/native";
import { TouchableOpacity, Button } from "react-native";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

const Title = styled.Text`
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: 700;
`;

const StyledBackground = styled.ImageBackground`
  flex: 1;
`;

const MySong = ({ navigation }) => {
  return (
    <Container>
      <StyledBackground
        source={require("../../assets/images/mysong_screen_image.png")}
      />
    </Container>
  );
};

export default MySong;

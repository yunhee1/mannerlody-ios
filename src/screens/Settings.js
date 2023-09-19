import React, { useEffect } from "react";
import styled from "styled-components/native";
import { TouchableOpacity, Button } from "react-native";

const Container = styled.SafeAreaView`
  flex: 1;
  margin-left: 20px;
  justify-content: flex-start;
`;

const Title = styled.Text`
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: 700;
`;
const Tab = styled.Image`
  width: 100%;
  height: 90px;
  margin-top: 0px;
  margin-bottom: 20px;
  object-fit: contain;
  align-self: flex-end;
`;

const Settings = ({ navigation }) => {
  return (
    <>
      <Container>
        <Title>설정 페이지</Title>
      </Container>
      <Tab source={require("../../assets/images/tab_bar.png")} />
    </>
  );
};

export default Settings;

import React from "react";
import { Button } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  background-color: white;
  align-items: center;
  flex: 1;
  justify-content: center;
`;

const TitleImg = styled.Image`
  border-radius: 8px;
  width: 180px;
  height: 180px;
  object-fit: cover;
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`;

const SubTitle = styled.Text`
  font-size: 25px;
  color: #6635fa;
  margin-top: 10px;
  margin-bottom: 70px;
  font-weight: 800;
`;

const Type = styled.Text`
  margin-top: 10px;
  margin-left: 10px;
  font-size: 20px;
  color: #6635fa;
  font-weight: 700;
`;

const StyledView = styled.View`
  width: 150px;
  height: 100px;
  padding: 10px;
  margin: 50px 5px 5px 5px;
  background-color: #f5f5f5;
  border-radius: 5px;
`;

const SongWriterContainer = styled.View`
  flex-direction: row;
`;

const ThisSongContainer = styled.View`
  width: 310px;
  height: 100px;
  padding: 10px;
  margin: 5px;
  background-color: #f5f5f5;
  border-radius: 5px;
`;

const StyledButton = styled.TouchableOpacity`
  margin-top: 50px;
  width: 80%;
  height: 50px;
  border-radius: 10px;
  background-color: #6635fa;
  border: 3px solid #6635fa;
`;

const ButtonText = styled.Text`
  color: white;
  align-self: center;
  justify-content: center;
  margin-top: 15px;
  font-weight: 800;
  font-size: 18px;
`;

const SubText = styled.Text`
  color: #7f7f7f;
  font-size: 18px;
  margin-top: 5px;
  margin-left: 10px;
  font-weight: 600;
`;

const SubTextt = styled.Text`
  color: #7f7f7f;
  font-size: 18px;
  margin-left: 10px;
  font-weight: 600;
`;

const SongInfo = ({ navigation }) => {
  return (
    <Container>
      <SubTitle>멋쟁이 토마토</SubTitle>
      <TitleImg source={require("../../assets/images/tomato_album.jpg")} />
      <SongWriterContainer>
        <StyledView>
          <Type>작사</Type>
          <SubText>김영광</SubText>
        </StyledView>
        <StyledView>
          <Type>작곡</Type>
          <SubText>김영광</SubText>
        </StyledView>
      </SongWriterContainer>

      <ThisSongContainer>
        <Type>이 노래는</Type>
        <SubText>되고 싶은 것이 무엇인지 다짐하는 내용의 곡</SubText>
        <SubTextt>#경쾌한 #신나는</SubTextt>
      </ThisSongContainer>

      <StyledButton onPress={() => navigation.navigate("SongPlay")}>
        <ButtonText>음악 재생하기</ButtonText>
      </StyledButton>
    </Container>
  );
};

export default SongInfo;

import React, { useEffect } from "react";
import styled from "styled-components/native";
import { Text, TextInput, Dimensions } from "react-native";
// Dimensions.get("window").width;
const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
  padding-left: 20px;
  justify-content: flex-start;
`;

const Title = styled.Text`
  margin-top: 60px;
  margin-left: 20px;
  margin-bottom: 20px;
  font-size: 25px;
  font-weight: 700;
`;

const SubTitle = styled.Text`
  font-size: 23px;
  color: #6635fa;
  margin-top: 18px;
  margin-left: 15px;
  margin-bottom: 15px;
  font-weight: 700;
`;

const ChartText = styled.Text`
  font-size: 21px;
  margin-top: 10px;
  font-weight: 600;
  margin-left: 15px;
`;

const StyledInput = styled.View`
  margin-top: 15px;
  margin-bottom: 25px;
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 20px;
  padding-right: 10px;
  flex-direction: row;
  background-color: #f5f5f5;
  height: 50px;
  align-items: center;
  border-radius: 50px;
`;

const IconContainer = styled.Image`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const HistoryElement = styled.TouchableOpacity`
  padding: 10px;
  width: 120px;
  border: 1.5px solid #6635fa;
  border-radius: 50px;
  align-items: center;
  text-align: center;
  margin: 3px;
`;

const HistoryElementText = styled.Text`
  color: #6635fa;
  font-size: 18px;
  font-weight: bold;
`;

const HistoryContainer = styled.View`
  flex-direction: row;
  width: 100%;
  margin-left: 10px;
`;

const Search = ({ navigation }) => {
  return (
    <Container>
      <Title>어떤 곡을 찾으세요?</Title>
      <StyledInput>
        <IconContainer source={require("../../assets/images/search_img.png")} />
        <TextInput placeholder="곡명을 검색해주세요" />
      </StyledInput>

      <SubTitle>최근 검색 기록</SubTitle>
      <HistoryContainer>
        <HistoryElement>
          <HistoryElementText>어머님은혜</HistoryElementText>
        </HistoryElement>
        <HistoryElement>
          <HistoryElementText>스승의 은혜</HistoryElementText>
        </HistoryElement>
        <HistoryElement>
          <HistoryElementText>해바라기</HistoryElementText>
        </HistoryElement>
      </HistoryContainer>
      <HistoryContainer>
        <HistoryElement>
          <HistoryElementText>악어떼</HistoryElementText>
        </HistoryElement>
        <HistoryElement>
          <HistoryElementText>작은 세상</HistoryElementText>
        </HistoryElement>
      </HistoryContainer>

      <SubTitle style={{ marginTop: 40 }}>인기검색어</SubTitle>
      <ChartText>
        <Text style={{ color: "#6635FA", fontSize: 17 }}>1 </Text> 어머님 은혜
      </ChartText>
      <ChartText>
        <Text style={{ color: "#6635FA", fontSize: 17 }}>2 </Text> 아기상어
      </ChartText>
      <ChartText>
        <Text style={{ color: "#6635FA", fontSize: 17 }}>3 </Text> 솜사탕
      </ChartText>
      <ChartText>
        <Text style={{ color: "#6635FA", fontSize: 17 }}>4 </Text> 소풍
      </ChartText>
      <ChartText>
        <Text style={{ color: "#6635FA", fontSize: 17 }}>5 </Text> 작은 세상
      </ChartText>
    </Container>
  );
};

export default Search;

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
//import 할 때 폴더까지만 입력하면 폴더에 담겨있는 index.js 파일을 불러옴
import { Home, SongInfo, SongPlay, MySong, Search, Settings } from "../screens";
import Tab from "./Tab";
//screen 컴포넌트의 name속성은 screen 컴포넌트 식별하기 위한 id처럼 작동하기 때문에 중복 불허
//화면을 잘 구분할 수 있는 이름을 쓰는 것 추천

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      {/* initialRouteName="Home" */}
      {/* 스택 쌓은 순서대로 화면에 나옴, 맨 위에 있는 게 첫 화면 */}

      {/* <Stack.Screen name="Main" component={Tab} /> */}
      <Stack.Screen name="Home" component={Tab} />
      <Stack.Screen name="SongInfo" component={SongInfo} />
      <Stack.Screen name="SongPlay" component={SongPlay} />
    </Stack.Navigator>
  );
};

export default StackNav;

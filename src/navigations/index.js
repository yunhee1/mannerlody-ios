import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNav from "./Stack";

const Navigation = () => {
  return (
    <NavigationContainer>
      <StackNav />
      {/* navigation코드는 항상 네비게이션 컨테이너의 자식으로 사용되어야 함 */}
    </NavigationContainer>
  );
};

export default Navigation;

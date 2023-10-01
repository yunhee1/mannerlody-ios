import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNav from "./Stack";
import TabNav from "./Tab";
import { createStackNavigator } from "@react-navigation/stack";

const Navigation = () => {
  return (
    <NavigationContainer>
      <StackNav
        screenOptions={{
          headerShown: false,
        }}
      >
        <TabNav></TabNav>
      </StackNav>
      {/* <TabNav>
        <StackNav />
      </TabNav> */}
    </NavigationContainer>
  );
};

export default Navigation;

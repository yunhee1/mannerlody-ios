import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Search, MySong, Settings } from "../screens";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="홈"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={{ resizeMode: "contain", width: 25, height: 25 }}
              source={require("../../assets/images/tab_home.png")}
            />
          ),
          tabBarActiveTintColor: "#6635FA",
        }}
      />
      <Tab.Screen
        name="검색"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={{ resizeMode: "contain", width: 25, height: 25 }}
              source={require("../../assets/images/tab_search.png")}
            />
          ),
          tabBarActiveTintColor: "#6635FA",
        }}
      />
      <Tab.Screen
        name="내 음악"
        component={MySong}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={{ resizeMode: "contain", width: 25, height: 25 }}
              source={require("../../assets/images/tab_like.png")}
            />
          ),
          tabBarActiveTintColor: "#6635FA",
        }}
      />
      <Tab.Screen
        name="설정"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={{ resizeMode: "contain", width: 25, height: 25 }}
              source={require("../../assets/images/tab_settings.png")}
            />
          ),
          tabBarActiveTintColor: "#6635FA",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;

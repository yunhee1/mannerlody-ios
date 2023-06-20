import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-component/native";
import PropTypes from "prop-types";
import { image } from "react-native";
import { Touchable } from "react-native";

const Icon = styled.Image`
  width: 30px;
  height: 30px;
  margin: 10px;
`;

const IconButton = ({ type, onPressOut }) => {
  return <TouchableOpacity onPressOut={onPressOut}></TouchableOpacity>;
};

import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import { ComponentProps } from ".";

export const ContentButton = styled.View<ComponentProps>`
  width: ${RFValue(150)}px;
  height: ${RFValue(50)}px;

  justify-content: center;
  align-items: center;

  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#fff")};

  border-radius: 4px;
  border-color: #e6e6e6;
  border-width: 3px;
  margin: 10px 10px 0px;
`;

export const TextProducView = styled.Text<ComponentProps>`
  color: ${({ color }) => (color ? color : "#dddddd")};
  font-size: ${RFValue(16)}px;
  text-align: center;
`;

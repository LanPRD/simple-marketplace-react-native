import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface DotProps {
  color: string;
}

export const DotContent = styled.View<DotProps>`
  width: ${RFValue(24)}px;
  height: ${RFValue(24)}px;
  border-radius: ${RFValue(100)}px;
  background-color: ${({ color }) => color};
  margin: 0px 2.5%;
`;

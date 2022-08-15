import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const FooterContent = styled.View``;

export const FooterText = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin: 2% 0px;
  padding: 0px 2%;
`;

import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const ButtonContent = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ButtonTouchable = styled.TouchableOpacity`
  width: 90%;
  height: ${RFValue(52)}px;
  background-color: #17181a;
  border-radius: 4px;
  margin: 5% 0px;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  font-size: ${RFValue(18)}px;
  color: #fff;
`;

import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const ProductContent = styled.TouchableOpacity`
  padding: 2% 0px;
  align-items: center;
  justify-content: center;
`;

export const ProductImage = styled.Image`
  width: ${RFValue(152)}px;
  height: ${RFValue(152)}px;
`;

export const ProductTitle = styled.Text`
  font-size: ${RFValue(16)}px;
`;

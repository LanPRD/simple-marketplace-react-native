import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const DetailScreenContent = styled.ScrollView`
  width: 100%;

  flex: 1;
  background-color: #fff;
`;

export const ProductImage = styled.Image`
  width: 100%;
`;

export const ProductPrice = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  padding: 0px 2%;
`;

export const ProductName = styled.Text`
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  opacity: 0.4;
  padding: 0px 2%;
`;

export const DotContainer = styled.View`
  flex-direction: row;
  align-items: center;

  height: ${RFValue(32)}px;
`;

export const ProductViews = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const TextDetails = styled.View`
  padding: 0px 2%;
  margin: 2% 0px;
`;

export const TextTitle = styled.Text`
  font-size: ${RFValue(22)}px;
  margin: 2% 0px;
`;

export const TextDescription = styled.Text`
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(24)}px;
  margin: 2% 0px;
`;

export const TextList = styled.Text`
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(24)}px;
`;

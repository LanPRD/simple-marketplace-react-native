import { ScrollView } from "react-native";
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface TitleProps {
  hasOpacity: boolean;
}

export const HomeContent = styled.View`
  flex: 1;
  width: 100%;
  background-color: #fff;
`;

export const Header = styled.View`
  margin-bottom: 8px;
`;

export const Image = styled.Image`
  width: 100%;
`;

export const TitleWrapper = styled.View`
  flex-direction: row;

  margin: 5%;
`;

export const Title = styled.Text<TitleProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(26)}px;
  margin: 0px 1%;

  color: ${({ hasOpacity }) => (hasOpacity ? "#CECECE" : "#000000")};
`;

export const Separator = styled.View`
  width: 100%;
  border-bottom-width: 2px;
  border-bottom-color: #d8d8d8;
`;

export const Showcases = styled(ScrollView)``;

export const ShowcaseRow = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

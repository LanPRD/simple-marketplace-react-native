import { ScrollView, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Dot } from "../../components/Dot";
import { SelectProductViewButton } from "../../components/SelectProductViewButton";
import { Button } from "../../components/Button";
import { Separator } from "../Home/styles";
import { Footer } from "../../components/Footer";

import {
  DetailScreenContent,
  DotContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductViews,
  TextDescription,
  TextDetails,
  TextList,
  TextTitle
} from "./styles";

type RootStackParamList = {
  Detail: undefined;
};

type DetailScreenProps = NativeStackScreenProps<RootStackParamList, "Detail">;

export function Detail({ navigation }: DetailScreenProps) {
  navigation.setOptions({
    headerTitle: "Nike Downshifter 10"
  });

  return (
    <DetailScreenContent>
      <ProductImage source={require("../../assets/detail.png")} resizeMode="cover" />

      <View>
        <View>
          <ProductPrice>R$ 280,90</ProductPrice>
        </View>

        <View>
          <ProductName>Nike Downshifter 10</ProductName>
        </View>

        <DotContainer>
          <Dot color="#2379F4" />
          <Dot color="#FB6E53" />
          <Dot color="#DDD" />
          <Dot color="#000" />
        </DotContainer>
      </View>

      <ProductViews>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <SelectProductViewButton bgColor="#17181A" color="#FFF">
            40
          </SelectProductViewButton>
          <SelectProductViewButton>37</SelectProductViewButton>
          <SelectProductViewButton>39</SelectProductViewButton>
          <SelectProductViewButton>42</SelectProductViewButton>
        </ScrollView>
      </ProductViews>

      <TextDetails>
        <TextTitle>Nike Downshifter 10</TextTitle>

        <TextDescription>
          O Tênis Nike Masculino Downshifter 10 traz amortecimento e suporte atualizados, para garantir uma corrida
          estável e confortável.
        </TextDescription>

        <TextList>- Categoria: Amortecimento</TextList>

        <TextList>- Material: Mesh</TextList>

        <Button />

        <Separator />
      </TextDetails>

      <Footer />
    </DetailScreenContent>
  );
}

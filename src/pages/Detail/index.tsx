import { ScrollView, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Dot } from "../../components/Dot";
import { SelectProductViewButton } from "../../components/SelectProductViewButton";

import { DetailScreenContent, DotContainer, ProductImage, ProductName, ProductPrice, ProductViews } from "./styles";

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
    </DetailScreenContent>
  );
}

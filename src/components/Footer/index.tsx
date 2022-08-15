import { Alert, ScrollView, View } from "react-native";

import { Product } from "../Product";
import { FooterContent, FooterText } from "./styles";

export function Footer() {
  return (
    <FooterContent>
      <FooterText>VOCÊ TAMBÉM PODE GOSTAR</FooterText>
      <View style={{ flexDirection: "row" }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ marginHorizontal: 8 }}>
            <Product
              onPress={() => Alert.alert("Clicou")}
              description="Nike Squidward Tentacles"
              price="560,90"
              linkImage={require("../../assets/3.png")}
            />
          </View>

          <View style={{ marginHorizontal: 8 }}>
            <Product
              onPress={() => Alert.alert("Clicou")}
              description="Nike Joyride Run Flynit"
              price="120,90"
              linkImage={require("../../assets/5.png")}
            />
          </View>

          <View style={{ marginHorizontal: 8 }}>
            <Product
              onPress={() => Alert.alert("Clicou")}
              description="Nike Air Max 12 Dia"
              price="920,00"
              linkImage={require("../../assets/6.png")}
            />
          </View>

          <View style={{ marginHorizontal: 8 }}>
            <Product
              onPress={() => Alert.alert("Clicou")}
              description="Nike Epic React Flynit 2"
              price="220,00"
              linkImage={require("../../assets/4.png")}
            />
          </View>
        </ScrollView>
      </View>
    </FooterContent>
  );
}

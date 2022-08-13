import { Alert, TouchableOpacity } from "react-native";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

import { Product } from "../../components/Product";

import { Header, HomeContent, Image, Separator, ShowcaseRow, Showcases, Title, TitleWrapper } from "./styles";

export function Home() {
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();

  return (
    <HomeContent>
      <Header>
        <Image source={require("../../assets/banner.png")} />

        <TitleWrapper>
          <Title>TÊNIS</Title>
          <Title hasOpacity>•</Title>
          <Title hasOpacity>MASCULINO</Title>

          <TouchableOpacity style={{ position: "absolute", right: 0, alignSelf: "center" }}>
            <MaterialIcons name="filter-list" size={24} color="#000" />
          </TouchableOpacity>
        </TitleWrapper>
      </Header>

      <Separator />

      <Showcases>
        <Title>Lancamentos</Title>

        <ShowcaseRow>
          <Product
            onPress={() => navigate("Detail")}
            description="Nike Air Max Dia"
            price="140,90"
            linkImage={require("../../assets/1.png")}
          />
          <Product
            onPress={() => navigate("Detail")}
            description="Nike Downshifter 10"
            price="280,90"
            linkImage={require("../../assets/2.png")}
          />
        </ShowcaseRow>

        <ShowcaseRow>
          <Product
            onPress={() => Alert.alert("Clicou")}
            description="Nike Squidward Tentacles"
            price="560,90"
            linkImage={require("../../assets/3.png")}
          />
          <Product
            onPress={() => Alert.alert("Clicou")}
            description="Nike Epic React Flynit 2"
            price="220,00"
            linkImage={require("../../assets/4.png")}
          />
        </ShowcaseRow>

        <ShowcaseRow>
          <Product
            onPress={() => Alert.alert("Clicou")}
            description="Nike Joyride Run Flynit"
            price="120,90"
            linkImage={require("../../assets/5.png")}
          />
          <Product
            onPress={() => Alert.alert("Clicou")}
            description="Nike Air Max 12 Dia"
            price="920,00"
            linkImage={require("../../assets/6.png")}
          />
        </ShowcaseRow>
      </Showcases>
    </HomeContent>
  );
}

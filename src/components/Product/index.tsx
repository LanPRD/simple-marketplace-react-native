import { View } from "react-native";
import { ProductContent, ProductImage, ProductTitle } from "./styles";

interface ProductProps {
  description: string;
  price: string;
  linkImage: string;
  onPress: () => void;
}

export function Product({ description, price, linkImage, ...rest }: ProductProps) {
  function filterDescription(description: string) {
    if (description.length < 20) {
      return description;
    }

    return `${description.substring(0, 16)}...`;
  }

  return (
    <ProductContent {...rest}>
      <ProductImage source={linkImage} />
      <ProductTitle>{filterDescription(description)}</ProductTitle>

      <View style={{ opacity: 0.4 }}>
        <ProductTitle>R$ {price}</ProductTitle>
      </View>
    </ProductContent>
  );
}

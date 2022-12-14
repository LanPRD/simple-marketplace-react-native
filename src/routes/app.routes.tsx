import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feather } from "@expo/vector-icons";

import { Home } from "../pages/Home";
import { Detail } from "../pages/Detail";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 16 }}>
                <Feather name="shopping-cart" size={24} color="black" />
              </TouchableOpacity>
            )
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

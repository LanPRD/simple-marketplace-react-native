import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useFonts, Anton_400Regular } from "@expo-google-fonts/anton";

import { AppRoutes } from "./src/routes/app.routes";
import { ThemeProvider } from "styled-components";

import theme from "./src/global/styles/theme";

export default function App() {
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = useFonts({
    Anton_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" backgroundColor="#000" translucent={true} />
      <AppRoutes />
    </ThemeProvider>
  );
}

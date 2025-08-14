import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { ActivityIndicator, View } from "react-native";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Poppins=Regular": require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins/Poppins-Bold.ttf")
  })

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large"/>=
      </View>
    )
  }

  // return <Stack />;
  return (
    // Desativando o nome padrão que fica lá no alto. "Index", no caso.
    <Stack>
      <Stack.Screen name="index" options={{ title: '', headerTransparent: true, headerShown: false }} />
    </Stack>

    // Segunda possível forma de desativar o nome padrão.    // return <Stack screenOptions={{ headerShown: false}} />;
  )
}

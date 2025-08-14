import { Stack } from "expo-router";

export default function RootLayout() {
  // return <Stack />;
  return (
    // Desativando o nome padrão que fica lá no alto. "Index", no caso.
    <Stack>
      <Stack.Screen name="index" options={{ title: '', headerTransparent: true, headerShown: false }} />
    </Stack>

    // Segunda possível forma de desativar o nome padrão.
    // return <Stack screenOptions={{ headerShown: false}} />;
  )
}

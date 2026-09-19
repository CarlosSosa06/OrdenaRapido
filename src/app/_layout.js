import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen 
        name="restaurant/[id]" 
        options={{ title: 'Detalle Rest', headerBackTitle: 'Atrás' }} 
      />
    </Stack>
  );
}
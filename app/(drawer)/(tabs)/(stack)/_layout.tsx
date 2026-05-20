import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { router, Stack, useNavigation } from "expo-router";

const StackLayout = () => {
  const navigation = useNavigation();

  const onHeaderLeftClick = (canGoBack: boolean) => {
    if (canGoBack) {
      router.back();
      return;
    }
    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        contentStyle: { backgroundColor: "white" },
        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons
            name={canGoBack ? "arrow-back" : "grid-outline"}
            className="mr-5"
            size={20}
            onPress={() => onHeaderLeftClick(canGoBack ?? false)}
          />
        ),
      }}
    >
      <Stack.Screen name="home/index" options={{ title: "Inicio" }} />
      <Stack.Screen name="products/index" options={{ title: "Productos" }} />
      <Stack.Screen name="profile/index" options={{ title: "Perfil" }} />
      <Stack.Screen name="settings/index" options={{ title: "Ajustes" }} />
    </Stack>
  );
};

export default StackLayout;

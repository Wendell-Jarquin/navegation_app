import { View, Text, Switch } from "react-native";
import { useState } from "react";

const SettingsScreen = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [biometric, setBiometric] = useState(true);

  return (
    <View className="flex-1 p-5">
      <View className="bg-gray-100 rounded-xl p-4 mb-4">
        <View className="flex-row justify-between items-center mb-4 pb-4 border-b border-gray-200">
          <View>
            <Text className="font-work-black text-base">Notificaciones</Text>
            <Text className="text-gray-500 text-sm">Recibir alertas</Text>
          </View>
          <Switch value={notifications} onValueChange={setNotifications} />
        </View>

        <View className="flex-row justify-between items-center mb-4 pb-4 border-b border-gray-200">
          <View>
            <Text className="font-work-black text-base">Modo oscuro</Text>
            <Text className="text-gray-500 text-sm">Fondo oscuro</Text>
          </View>
          <Switch value={darkMode} onValueChange={setDarkMode} />
        </View>

        <View className="flex-row justify-between items-center">
          <View>
            <Text className="font-work-black text-base">Biométrico</Text>
            <Text className="text-gray-500 text-sm">Acceso con huella</Text>
          </View>
          <Switch value={biometric} onValueChange={setBiometric} />
        </View>
      </View>

      <View className="bg-gray-100 rounded-xl p-4">
        <View className="mb-4 pb-4 border-b border-gray-200">
          <Text className="font-work-black text-base">Idioma</Text>
          <Text className="text-gray-500 text-sm">Español</Text>
        </View>
        <View className="mb-4 pb-4 border-b border-gray-200">
          <Text className="font-work-black text-base">Versión</Text>
          <Text className="text-gray-500 text-sm">1.0.0</Text>
        </View>
        <View>
          <Text className="font-work-black text-base">Cerrar sesión</Text>
        </View>
      </View>
    </View>
  );
};

export default SettingsScreen;

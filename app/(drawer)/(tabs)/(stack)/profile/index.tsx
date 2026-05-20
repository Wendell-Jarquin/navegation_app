import { View, Text } from "react-native";

const ProfileScreen = () => {
  return (
    <View className="flex-1 items-center p-5">
      <View className="bg-primary rounded-full h-24 w-24 items-center justify-center mb-4">
        <Text className="text-white font-work-black text-4xl">JD</Text>
      </View>
      <Text className="font-work-black text-2xl">John Doe</Text>
      <Text className="text-gray-500 mb-6">john.doe@email.com</Text>

      <View className="flex-row justify-around w-full bg-gray-100 rounded-xl p-4">
        <View className="items-center">
          <Text className="font-work-black text-xl">42</Text>
          <Text className="text-gray-500">Pedidos</Text>
        </View>
        <View className="items-center">
          <Text className="font-work-black text-xl">15</Text>
          <Text className="text-gray-500">Favoritos</Text>
        </View>
        <View className="items-center">
          <Text className="font-work-black text-xl">4.8</Text>
          <Text className="text-gray-500">Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

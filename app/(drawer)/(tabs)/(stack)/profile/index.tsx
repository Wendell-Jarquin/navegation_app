import { View, Text, Image } from "react-native";

const ProfileScreen = () => {
  return (
    <View className="flex-1 items-center p-5">
      <View className="bg-white rounded-full h-24 w-24 items-center justify-center mb-4 overflow-hidden border-2 border-primary">
        <Image
          source={require("@/assets/images/logow.png")}
          className="h-full w-full"
          resizeMode="cover"
        />
      </View>
      <Text className="font-work-black text-2xl">Wendell Jarquin</Text>
      <Text className="text-gray-500 mb-6">wendelljarquin@gmail.com</Text>

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

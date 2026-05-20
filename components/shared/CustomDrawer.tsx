import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Image, View } from "react-native";

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>

      <View className="flex justify-center items-center mx-3 p-10 mb-10 h-[150px] rounded-xl bg-primary">
        <View className="flex justify-center items-center bg-white rounded-full h-24 w-24 overflow-hidden">
          <Image
            source={require("@/assets/images/logow.png")}
            className="h-full w-full"
            resizeMode="cover"
          />
        </View>
      </View>

      <DrawerItemList {...props} />

    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

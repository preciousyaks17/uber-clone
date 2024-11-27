import { Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { onboarding } from "./constants";
import { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity
        onPress={() => {
          router.replace("/sign-up");
        }}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="text-black text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View className="w-[32px] h-[4px] bg-[#E2E8F0] rounded-full" />}
        activeDot={
          <View className="w-[32px] h-[4px] bg-[#0286FF] rounded-full" />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item) => (
          <View>
            <Text>{item.title}</Text>{" "}
          </View>
        ))}
      </Swiper>
    </SafeAreaView>
  );
};

export default Onboarding;

import { View, Text, Image } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import React from "react";

export function CoffeeCard({ item }) {
  return (
    <View
      style={{
        borderRadius: 40,
        backgroundColor: "#8c5319",
        height: 350,
        width: 250,
        marginTop: 55,
      }}
    >
      <View className="flex-row justify-center -mt-14">
        <Image source={item.image} className="h-40 w-40 " />
      </View>
      <View className="px-5 mt-5">
        <Text className="text-white font-semibold text-2xl">{item.name}</Text>
        <View>
          <FontAwesome name={"star"} size={15} color={"white"} />
        </View>
      </View>
    </View>
  );
}

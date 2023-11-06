import { View, Text, Image, TouchableOpacity } from "react-native";
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
      <View className="px-5 mt-5 space-y-3">
        <Text className="text-white font-semibold text-2xl">{item.name}</Text>
        <View
          style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
          className="flex-row items-center rounded-3xl p-1 px-2 space-x-2 w-16"
        >
          <FontAwesome name={"star"} size={15} color={"white"} />
          <Text className="text-white">{item.stars}</Text>
        </View>
        <View className="space-x-1 flex-row z-10 mb-6">
          <Text className="text-base font-semibold text-white opacity-60">
            Volume
          </Text>
          <Text className="text-base text-white font-semibold">
            {item.volume}
          </Text>
        </View>
        <View style={{elevation: 5}} className='flex-row justify-between items-center'>
          <Text className='font-bold text-white text-lg'>{item.price}€</Text>
          <TouchableOpacity className='bg-white rounded-full p-4'>
            <FontAwesome name={"plus"} size={15} color={"#D4A574"} />

          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

import {
  View,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import React, { useState } from "react";
import { Badge } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { addBasket } from "../reducers/user";

export default function ProductScreen(props) {
  const item = props.route.params;
  const navigation = useNavigation();
  const [size, setSize] = useState("small");
  const [counter, setCounter] = useState(1)
  const [isLike, setIsLike] = useState(false)

  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.value)

  const totalPrice = item.price*counter

  function decrement() {
    setCounter(function (prevCount){
      if(prevCount > 1){
        return (prevCount -=1);
      } else {
        return (prevCount = 1)
      }
    });
  }

  let colorLike =''
    if(isLike){
      colorLike = "#ff0000"
    } else{
      colorLike = "#ffffff"
    }

    const handleAddBasket = () => {
      dispatch(addBasket({image: item.image, totalPrice: totalPrice, quantity: counter, name: item.name, price: item.price, size: size}))
    }


  return (
    <View className="flex-1">
      {/* HEADER */}
      <Image
        source={require("../assets/images/beansBackground2.png")}
        style={{
          height: 300,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}
        className="w-full absolute opacity-90"
      />
      <View className="m-6 flex-row justify-between items-center">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name={"arrow-circle-left"} size={40} color={"white"} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setIsLike(!isLike)}>
          <FontAwesome name={"heart"} size={35} color={colorLike} />
        </TouchableOpacity>
      </View>
      {/* Ajout de l'image */}
      <View className="flex-row justify-center">
        <Image source={item.image} className="h-60 w-60" />
      </View>
      <ScrollView>
        <SafeAreaView className="space-y-4">
          <View
            style={{ backgroundColor: "#D4A574" }}
            className="flex-row mx-4 items-center rounded-3xl p-1 px-2 space-x-2 w-16"
          >
            <FontAwesome name={"star"} size={15} color={"white"} />
            <Text className="text-white">{item.stars}</Text>
          </View>

          <View className="mx-4 flex-row justify-between">
            <Text className="text-3xl font-semibold">{item.name}</Text>
            <Text className="text-lg font-semibold">{Number(totalPrice).toFixed(2)}€</Text>
          </View>

          <View className="mx-4 space-y-2">
            <Text className="text-lg font-semibold">Coffee size</Text>
            <View className="flex-row justify-between">
              <TouchableOpacity
                className="p-3 px-8 rounded-full"
                style={{
                  backgroundColor:
                    size == "small" ? "#D4A574" : "rgba(0,0,0,0.2)",
                }}
                onPress={() => setSize("small")}
              >
                <Text className={size == "small" ? "text-white" : "text-gray"}>
                  Small
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="p-3 px-8 rounded-full"
                style={{
                  backgroundColor:
                    size == "medium" ? "#D4A574" : "rgba(0,0,0,0.2)",
                }}
                onPress={() => setSize("medium")}
              >
                <Text className={size == "medium" ? "text-white" : "text-gray"}>
                  Medium
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="p-3 px-8 rounded-full"
                style={{
                  backgroundColor:
                    size == "large" ? "#D4A574" : "rgba(0,0,0,0.2)",
                }}
                onPress={() => setSize("large")}
              >
                <Text className={size == "large" ? "text-white" : "text-gray"}>
                  Large
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className="mx-4 space-y-2 h-28">
            <Text className="text-lg font-bold">About</Text>
            <Text className="text-gray-600">{item.desc}</Text>
          </View>

          <View className="flex-row justify-between items-center mx-4 mb-2">
            <View className="space-x-1 flex-row z-10 items-center">
              <Text className="text-base font-semibold text-gray-700 opacity-60">
                Volume
              </Text>
              <Text className="text-base text-black font-semibold opacity-60">
                {item.volume}
              </Text>
            </View>
            <View className="flex-row items-center border space-x-5 border-gray-500 rounded-full p-1 px-4">
              <TouchableOpacity onPress={() => decrement()}>
                <FontAwesome name={"minus"} size={20} color={"black"} />
              </TouchableOpacity>
              <Text className="font-extrabold text-lg">{counter}</Text>
              <TouchableOpacity onPress={() => setCounter(counter+1)}>
                <FontAwesome name={"plus"} size={20} color={"black"} />
              </TouchableOpacity>
            </View>
          </View>

          <View className="flex-row justify-between mx-4">
              <View>

            <TouchableOpacity onPress={() => navigation.navigate("Basket")} className=" p-4 rounded-full border border-gray-400">
              <FontAwesome name={"shopping-bag"} size={30} color={"grey"} />
            </TouchableOpacity>
              <Badge value={user.basket.length} status="error" containerStyle={{ position: 'absolute', top: -4, right: -1 }}/>
              </View>
            <TouchableOpacity
              style={{ backgroundColor: "#D4A574" }}
              className="p-4 rounded-full flex-1 ml-3"
              onPress={() => handleAddBasket()}
            >
              <Text className="text-center text-white text-base font-semibold">
                Buy now !
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

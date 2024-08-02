import { View, Text, Image, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeBasket } from "../reducers/user"

export default function BasketCard(props) {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(props.quantity);
  const newPrice = props.price*quantity

  function decrement() {
    setQuantity((prevCount) => {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }

  useEffect(() => {
    props.handleAdditionTotal(props.id, newPrice)
  },[newPrice])

  return (
    <View className="justify-between bg-yellow-700 h-24 p-4 mt-6 items-center flex-row w-11/12 rounded-full">
      <View className="flex-row items-center">
        <Image source={props.image} className="h-14 w-14 mr-2" />
        <Text className="text-white">{props.name}</Text>
      </View>
      <View>
        <Text className="font-semibold text-xl">{Number(newPrice).toFixed(2)}€</Text>
      </View>
      <View className="flex-row items-center mr-2">
        <View className="flex-row justify-between w-10 mr-6 items-center">
          <TouchableOpacity onPress={() => decrement()}>
            <Text className="font-semibold text-xl">-</Text>
          </TouchableOpacity>
          <Text className="font-bold text-xl mx-2">{quantity}</Text>
          <TouchableOpacity onPress={() => setQuantity(quantity+1)}>
            <Text className="font-semibold text-xl">+</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => dispatch(removeBasket(props))}>
            <FontAwesome name="trash-o" size={25} color="white"  />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

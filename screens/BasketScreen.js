import { Text, View, ImageBackground, Dimensions, Image, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import React, { Component, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BasketCard from "../components/BasketCard";
const { width, height } = Dimensions.get("window");


export default function BasketScreen() {

  const [total, setTotal] = useState({})

  handleAdditionTotal = (id, addition) => {
    setTotal(prevTotal => ({...prevTotal, [id]: addition }))
  }

  let cumulPrice = Object.values(total).reduce((accumul, current) => accumul + current, 0)

  const allBasket = useSelector((state) => state.user.value.basket)
  
  if(allBasket.length < 1){
    cumulPrice = 0
  }
  
  const balls = allBasket.map((coffee, i) => (
    <BasketCard key={i} id={i} {...coffee} handleAdditionTotal={handleAdditionTotal}/>
  ));

  return (
    <SafeAreaView className="flex-1 bg-white justify-between">
      <View className="h-5/6 pb-2">
        <View
          className="flex items-center justify-center"
          style={{ height: height * 0.2 }}
        >
          <ImageBackground
            className="w-full h-full absolute -top-5 opacity-10"
            source={require("../assets/images/beansBackground1.png")}
          />
          <Text className="text-3xl font-bold" style={{ color: "#D4A574" }}>
            Panier
          </Text>
        </View>
        <View className="w-full items-center mb-32 -mt-6">
          <ScrollView showsVerticalScrollIndicator={false} className="w-full ml-6">
          {balls}
          </ScrollView>
        </View>
      </View>
      <View>
        <View className="w-full bg-slate-200 rounded-2xl p-4 mb-1 flex-row justify-between items-center h-20">
          <View className="flex-row">
            <Text >TOTAL:  </Text> 
            <Text className="font-bold">{Number(cumulPrice).toFixed(2)}€</Text>
          </View>
          <View>
            <TouchableOpacity style={{ backgroundColor: "#D4A574" }} className="p-3 rounded-full w-44 ">
              <Text className="text-center text-white text-base font-semibold">Valider !</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </SafeAreaView>
  )
}

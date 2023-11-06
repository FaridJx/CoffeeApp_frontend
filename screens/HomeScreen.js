import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { CoffeeCard } from "../components/CoffeeCard";
import { categories } from "../constants/categories";
import { coffeeItems } from "../constants/coffeeitems";
import { useState } from "react";
import Carousel from "react-native-snap-carousel";
import React from "react";

const { width, height } = Dimensions.get("window");

export default function HomeScreen({ navigation }) {
  const [activeCategory, setActiveCategory] = useState(1);

  const renderItem = ({ item, index }) => {
    return <CoffeeCard item={item} />;
  };

  return (
    <View className="flex-1 relative bg-white ">
      <ImageBackground
        style={{ height: height * 0.2 }}
        className="w-full absolute -top-5 opacity-10"
        source={require("../assets/images/beansBackground1.png")}
      />
      <SafeAreaView>
          <View className="mx-4 flex-row justify-between items-center">
            <Image
              className="h-9 w-9 rounded-full"
              source={require("../assets/images/avatar.png")}
            ></Image>
            <View className="flex-row items-center space-x-2">
              <FontAwesome name={"map-marker"} size={30} color={"#D4A574"} />
              <Text style={styles.spaceLocation}>Asnières-sur-seine, ASN</Text>
            </View>
            <FontAwesome name={"bell-o"} size={25} color={"#D4A574"} />
          </View>
          {/* search bar */}
        <View className="mx-5 shadow" style={{ marginTop: height * 0.06 }}>
          <View className="flex-row items-center rounded-full p-1 bg-[#e6e6e6]">
            <TextInput
              placeholder="Search"
              className="p-4 flex-1 font-semibold text-gray-700"
            />
            <TouchableOpacity
              className="rounded-full p-2"
              style={{ backgroundColor: "#D4A574" }}
            >
              <FontAwesome name={"search"} size={25} color={"white"} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Catégorie */}
        <View className='px-5 mt-6'>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            // keyExtractor = Pour extraire une clé à partir des données de la liste
            keyExtractor={(item) => item.id}
            // renderItem = définit comment chaque élément de la liste doit être rendu à l'écran
            renderItem={({ item }) => {
              // declaration d'une variable pour comparé l'ID avec la valeur stocké dans l'état
              let isActive = item.id == activeCategory;
              return (
                <TouchableOpacity
                  onPress={() => setActiveCategory(item.id)}
                  style={isActive ? styles.btnSelected : styles.btnCateg}
                >
                  <Text style={isActive ? styles.txtSelected : styles.txtCateg}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        {/* Coffee card */}
        <View className="mt-4 py-2 ">
          {/* <Carousel
           containerCustomStyle={{overflow:'visible'}}
            data={coffeeItems}
            renderItem={({item}) => <CoffeeCard item={item} />}
            firstItem={1}
            inactiveSlideOpacity={0.75}
            inactiveSlideScale={0.77}
            sliderWidth={400}
            itemWidth={260}
            slideStyle={{display: "flex", alignItems: "center"}}
           /> */}
          <Carousel
            data={coffeeItems}
            loop={true}
            renderItem={({ item }) => <CoffeeCard item={item} />}
            firstItem={1}
            inactiveSlideOpacity={0.75} // opacité de la slide inactif
            inactiveSlideScale={0.77} // taille de la slide inactif
            sliderWidth={400}
            itemWidth={260} // largeur de la carte
            slideStyle={{display: "flex", alignItems: "center"}}
            />
          
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  imgAvatar: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
  },
  spaceLocation: {
    marginLeft: 10,
    fontWeight: "bold",
  },
  headerBottom: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 48,
  },

  categ: {
    marginTop: 20,
  },
  btnCateg: {
    backgroundColor: "#DEDEDE",
    borderRadius: 50,
    padding: 15,
    marginRight: 2,
    marginLeft: 5,
  },
  btnSelected: {
    backgroundColor: "#D4A574",
    borderRadius: 50,
    padding: 15,
    marginRight: 2,
    marginLeft: 5,
  },
  txtCateg: {
    fontWeight: "500",
  },
  txtSelected: {
    color: "white",
  },
});

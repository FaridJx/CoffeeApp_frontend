import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { CoffeeCard } from "../components/CoffeeCard";
import { categories, coffeeItems } from "../constants/index";
import { useState } from "react";
import Carousel from "react-native-snap-carousel";
import React from "react";

const {width, height} = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
  const [activeCategory, setActiveCategory] = useState(1);

  return (
    <View className='flex-1 relative bg-white'>
      <ImageBackground
        style={{height: height*0.2}}
        className="w-full absolute -top-5 opacity-10"
        source={require("../assets/images/beansBackground1.png")}
      />
      <SafeAreaView >
        <View >
          <View className="mx-4 flex-row justify-between items-center">
            <Image
              className="h-9 w-9 rounded-full"
              source={require("../assets/images/avatar.png")}
            ></Image>
            <View className="flex-row items-center space-x-2">
              <FontAwesome name={"map-marker"} size={30} color={"red"} />
              <Text style={styles.spaceLocation}>Asnières-sur-seine, ASN</Text>
            </View>
            <FontAwesome name={"bell"} size={30} color={"red"} />
          </View>
          <View style={styles.headerBottom}>
            <TextInput style={styles.input} placeholder="Search"></TextInput>
          </View>
        </View>

        {/* Catégorie */}
        <View style={styles.categ}>
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
          ></FlatList>
        </View>

        {/* Coffee card */}
        <View>
           

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
  input: {
    borderRadius: 30,
    width: "80%",
    padding: 12,
    backgroundColor: "#DEDEDE",
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

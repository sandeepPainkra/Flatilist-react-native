import { StatusBar } from "expo-status-bar";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import Demo from "./Demo";

const apiData = [
  {
    id: 1,
    title: "The Simpsons",
    year: 1989,
    image: require("./assets/slider1.png"),
  },
  {
    id: 2,
    title: "SpongeBob SquarePants ",
    year: 1999,
    image: require("./assets/slider2.png"),
  },
  {
    id: 3,
    title: "third ",
    year: 1999,
    image: require("./assets/slider3.png"),
  },
  {
    id: 2,
    title: "fourth ",
    year: 1999,
    image: require("./assets/slider4.jpg"),
  },
];
export default function App() {
  const renderItem = ({ item, index }) => (
    <View>
      <Image
        style={{ height: 300, width: 300 }}
        source={item.image}
        resizeMode="contain"
      />
      <Text>{item.title} </Text>
      <Text> {item.year}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={apiData}
        keyExtractor={(item, index) => index}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    width: 300,
    backgroundColor: "grey",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyle: {
    width: 100,
    height: 100,
  },
});

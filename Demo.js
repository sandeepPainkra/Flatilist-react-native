import { View, Text, Image } from "react-native";
import React from "react";

const Demo = ({ src, title }) => {
  return (
    <View>
      <Image source={{ uri: src }} style={{ width: 100, height: 100 }} />
      <Text>{title}</Text>
    </View>
  );
};

export default Demo;

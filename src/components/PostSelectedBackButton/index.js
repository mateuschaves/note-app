import React from "react";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function PostSelectedBackButton({ handleBackClick }) {
  return (
    <MaterialCommunityIcons
      name="arrow-left"
      size={25}
      color="#fff"
      onPress={() => handleBackClick()}
    />
  );
}

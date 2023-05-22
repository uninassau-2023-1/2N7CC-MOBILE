import { ReactNode } from "react";
import { StyleSheet, ImageBackground, Platform } from "react-native";

import { getStatusBarHeight } from "react-native-iphone-x-helper";

interface BackgroundProps {
  children?: ReactNode;
}

export default function Background({ children }: BackgroundProps) {
  const sourceImage = require("../../assets/background.png");

  return (
    <ImageBackground
      defaultSource={sourceImage}
      source={sourceImage}
      style={styles.container}
    >
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? getStatusBarHeight() : 0,
  },
});

import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import Carousel from "react-native-reanimated-carousel";
import { SIZES, COLORS } from "../constant/style";
import { AntDesign } from "@expo/vector-icons";
import ViewShot, { captureRef } from "react-native-view-shot";
import * as Sharing from "expo-sharing";
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from 'react-native-reanimated';

// This is the default configuration
configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false, // Reanimated runs in strict mode by default
});

const themes = [
  { id: 1, image: require("../assets/sharetheme/share1.png") },
  { id: 2, image: require("../assets/sharetheme/share2.png") },
  { id: 3, image: require("../assets/sharetheme/share3.png") },
  { id: 4, image: require("../assets/sharetheme/share4.png") },
];

const ShareScreen = ({ route, navigation }) => {
  const { doa } = route.params;
  const [currentIndex, setCurrentIndex] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerLeft: () => (
        <TouchableOpacity
          style={styles.headerButton}
          onPressIn={() => navigation.goBack()}
        >
          <AntDesign name="close" size={24} color={COLORS.primary} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity style={styles.headerButton} onPressIn={shareImage}>
          <Text style={styles.headerText}>Bagikan</Text>
        </TouchableOpacity>
      ),
      headerShadowVisible: false,
    });
  }, [navigation, currentIndex]);

  async function shareImage() {
    try {
      const currentRef = refs.current[currentIndex];
      if (!currentRef) {
        console.log("Ref tidak ditemukan");
        return;
      }

      const uri = await captureRef(currentRef, {
        format: "png",
        quality: 0.7,
      });

      console.log("uri", uri);
      await Sharing.shareAsync(uri);
    } catch (error) {
      console.log(error);
    }
  }

  const renderItem = ({ item, index }) => (
    <ViewShot ref={(el) => (refs.current[index] = el)} key={item.id}>
      <View style={styles.container}>
        <Image source={item.image} style={styles.backgroundImage} />
        <View style={styles.overlay}>
          <Text style={styles.arabText}>{doa.arab}</Text>
          <Text style={styles.translation}>{`"${doa.translation}"`}</Text>
          <Text style={styles.reference}>{doa.reference}</Text>
        </View>
      </View>
    </ViewShot>
  );

  return (
    <View style={styles.carouselContainer}>
      <View style={styles.dotContainer}>
        {themes.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              currentIndex === i ? styles.dotActive : null,
            ]}
          />
        ))}
      </View>

      <Carousel
        loop
        width={SIZES.width * 0.9}
        height={SIZES.height * 1}
        data={themes}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => setCurrentIndex(index)}
        renderItem={({ item, index }) => renderItem({ item, index })}
      />
    </View>
  );
};

export default ShareScreen;

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  container: {
    width: SIZES.width * 0.9,
    height: SIZES.height * 0.8,
    backgroundColor: "white",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  backgroundImage: {
    borderRadius: 30,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  arabText: {
    fontSize: SIZES.xxxLarge,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 10,
  },
  translation: {
    fontSize: SIZES.medium,
    fontWeight: "400",
    color: "white",
    textAlign: "center",
    marginBottom: 10,
  },
  reference: {
    marginTop: 10,
    fontSize: SIZES.medium,
    fontWeight: "400",
    color: "white",
    textAlign: "center",
  },
  headerButton: {
    padding: 10,
  },
  headerText: {
    color: COLORS.primary,
    fontSize: SIZES.medium,
    fontWeight: "700",
  },
  dotContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: "15%", 
    alignSelf: "center",
    zIndex: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    marginHorizontal: 5,
  },
  dotActive: {
    backgroundColor: "white",
  },
});

import React, { useEffect, useState } from "react";
// import {
//   addFavoriteDoa,
//   removeFavoriteDoa,
//   isDoaFavorite,
// } from "../constant/storage"; //asyncstorage
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign, Fontisto } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constant/style";
import { LinearGradient } from "expo-linear-gradient";
import Slider from "@react-native-community/slider";
import doaQueries from "../database/doaQueries";

const DetailDoaScreen = ({ route, navigation }) => {
  const { doa } = route.params;
  const { getFavorites, addFavorite, removeFavorite } = doaQueries();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const checkFavoriteStatus = async () => {
      const favorites = await getFavorites();
      const isDoaInFavorites = favorites.some(favDoa => favDoa.id === doa.id);
      setIsFavorite(isDoaInFavorites);
      // const favorite = await isDoaFavorite(doa.id); //Async storage
    };
    checkFavoriteStatus();
  }, [doa.id, getFavorites]);

  const toggleFavorite = async () => {
    try {
      if (isFavorite) {
        await removeFavorite(doa.id);
        // await removeFavoriteDoa(doa.id); //Async storage
      } else {
        await addFavorite(doa.id);
        // await addFavoriteDoa(doa); //Async storage
      }
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error("Error toggling favorite:", error);
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#E2FFFC", "	rgba(226, 255, 252, 0.5)", "white"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.card}
      >
        <View style={styles.numberCircle}>
          <Text style={styles.numberText}>1</Text>
        </View>
        <Text style={styles.cardTitle}>{doa.title}</Text>
      </LinearGradient>

      <Text style={styles.arabText}>{doa.arab}</Text>
      <Text style={styles.transliteration}>{doa.transliteration}</Text>
      <Text style={styles.translation}>{`"${doa.translation}"`}</Text>
      <Text style={styles.reference}>{doa.reference}</Text>

      <TouchableOpacity onPress={toggleFavorite} style={styles.favoriteIcon}>
        <Fontisto
          name="heart"
          size={24}
          color={isFavorite ? "red" : COLORS.font}
        />
      </TouchableOpacity>

      <View style={styles.seekBarContainer}>
        <Slider
          style={{ width: "100%", height: 20 }}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor={COLORS.primary}
          maximumTrackTintColor="#EDEDED"
          thumbTintColor={COLORS.primary}
          onValueChange={(value) => console.log("Seek Bar Moved:", value)}
        />
      </View>

      <View style={{ width: "100%", alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => setIsPlaying(!isPlaying)}
          style={styles.audioButton}
        >
          <Fontisto
            name={isPlaying ? "pause" : "play"}
            size={16}
            color="white"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.shareButton} 
            onPress={() => navigation.navigate("ShareDoa", { doa })}>
        <Text style={styles.shareText}>Bagikan Doa</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailDoaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontWeight: "bold",
    color: COLORS.primary,
    marginLeft: 15,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    backgroundColor: "white",
    borderRadius: 30,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#EDEDED",
  },
  numberCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  numberText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  cardTitle: {
    fontWeight: "500",
    color: COLORS.font,
  },

  arabText: {
    fontSize: SIZES.xxLarge,
    textAlign: "right",
    color: COLORS.primary,
    marginBottom: 10,
  },
  transliteration: {
    fontSize: SIZES.medium,
    color: COLORS.font2,
    marginBottom: 8,
  },
  translation: {
    fontSize: SIZES.medium,
    color: COLORS.primary,
    marginBottom: 10,
  },
  reference: {
    marginTop: 10,
    fontSize: SIZES.medium,
    color: COLORS.primary,
  },
  favoriteIcon: {
    alignSelf: "flex-end",
    marginTop: -20,
  },

  audioButton: {
    width: 45,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    borderRadius: 50,
    marginVertical: 30,
  },
  seekBarContainer: {
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },

  shareButton: {
    backgroundColor: COLORS.button,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  shareText: {
    color: "white",
    fontSize: SIZES.large,
    fontWeight: "500",
  },
});

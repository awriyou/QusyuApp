import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, SIZES } from "../constant/style";
import doaQueries from "../database/doaQueries";

const ContentEachScreen = ({ route, navigation }) => { 
  const { getDoasByCategory } = doaQueries();
  const { category: categoryId } = route.params;
  const [doas, setDoas] = useState([]);

  useEffect(() => {
    async function loadDoas() {
      try {
        const fetchedDoas = await getDoasByCategory(categoryId);
        setDoas(fetchedDoas);
      } catch (err) {
        console.error("Error getting doas:", err);
      }
    }

    loadDoas();
  }, [categoryId, getDoasByCategory]);

  return (
    <View style={styles.container}>
      <FlatList
        data={doas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("DoaDetail", { doa: item })}
          >
            <LinearGradient
              colors={["#E2FFFC", " rgba(226, 255, 252, 0.5)", "white"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.card}
            >
              <View style={styles.numberCircle}>
                <Text style={styles.numberText}>{index + 1}</Text>
              </View>
              <Text style={styles.cardTitle}>{item.title}</Text>
            </LinearGradient>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ContentEachScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
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
});

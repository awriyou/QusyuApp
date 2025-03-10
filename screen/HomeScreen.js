import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { COLORS, SIZES } from "../constant/style";
import { Feather, MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";
import doaQueries from "../database/doaQueries";
import { useFocusEffect } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const HomeScreen = ({ navigation }) => {
  const { getCategories, initializeData, resetDatabase } = doaQueries();
  const [categories, setCategories] = useState([]);
  const [isMenuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    async function setupData() {
      await initializeData();
    }
    setupData();
  
    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: "row", gap: 10 }}>
        <TouchableOpacity onPressIn={() => navigation.navigate("favorite")}>
          <Fontisto name="heart-alt" size={24} color={COLORS.font} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setMenuVisible((prev) => !prev)}>
          <Feather name="more-vertical" size={24} color={COLORS.font} style={{ marginRight: 5 }} />
        </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  useFocusEffect(
    useCallback(() => {
      async function loadData() {
        try {
          const fetchedCategories = await getCategories();
          setCategories(fetchedCategories);
        } catch (err) {
          console.log("error get ", err);
        }
      }

      loadData();

      return () => {

      };
    }, [getCategories])
  );

  const handleMenuPress = (screen) => {
    setMenuVisible(false); 
    navigation.navigate(screen);
  };

  const iconMap = {
    petunjuk: require("../assets/iconCategory/petunjuk.png"),
    keberkahan: require("../assets/iconCategory/keberkahan.png"),
    ampunan: require("../assets/iconCategory/ampunan.png"),
    keluarga: require("../assets/iconCategory/keluarga.png"),
    keamanan: require("../assets/iconCategory/keamanan.png"),
  };

  const renderCategoryItem = ({ item }) => {
    const iconSource = iconMap[item.icon];
    return (
      <TouchableOpacity
        style={styles.categoryCard}
        onPress={() =>
          navigation.navigate("ContentEach", {
            category: item.id,
            title: item.title,
          })
        }
      >
        <View style={styles.iconContainer}>
          <Image
            source={iconSource}
            style={styles.icon}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.categoryTitle}>{item.title}</Text>
        <Text style={styles.categoryDescription}>{item.description}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent/>
      {isMenuVisible && (
        <View style={styles.dropdownMenu}>
          <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuPress("About")}>
            <Text style={styles.menuText}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Report")}>
            <Text style={styles.menuText}>Report</Text>
          </TouchableOpacity>
        </View>
      )}
      
      <Pressable
        style={styles.searchContainer}
        onPress={() => navigation.navigate("Search")}
      >
        <Feather
          name="search"
          size={30}
          color={COLORS.font}
          style={styles.searchIcon}
        />
        <TextInput
          editable={false}
          placeholder="Cari di Qusyu..."
          placeholderTextColor={COLORS.gray}
        />
      </Pressable>

      <View style={styles.lastReadContainer}>
        <View>
          <View style={styles.lastReadTitleContainer}>
            <MaterialCommunityIcons
              name="clock-time-four"
              size={24}
              color={COLORS.primary}
            />
            <Text style={styles.lastReadTitle}>Terakhir dibaca</Text>
          </View>
          <View style={styles.lastReadCard}>
            <Text style={styles.lastReadSubtitle}>
              Petunjuk dan Keselamatan
            </Text>
            <Text style={styles.lastReadDescription}>
              Mohon ditunjukkan jalan {"\n"}yang lurus
            </Text>
            <Text style={styles.lastReadDate}>Senin, 04 Desember</Text>
          </View>
        </View>
        <View style={styles.imageSabit}>
          <Image
            source={require("../assets/iconCategory/sabit.png")}
            style={{ width: 200, height: 200 }}
          />
        </View>
      </View>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCategoryItem}
        numColumns={2}
        contentContainerStyle={styles.categoryList}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 6,
    marginBottom: 30,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10, // Android
  },
  searchIcon: {
    marginRight: 10,
  },

  lastReadContainer: {
    marginBottom: 10,
    backgroundColor: COLORS.secondary,
    borderRadius: 30,
    padding: 20,
    flexDirection: "row",
    height: 160,
    shadowColor: "gray",
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10, // Android
  },
  lastReadTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  lastReadTitle: {
    fontSize: SIZES.medium,
    fontWeight: "400",
    color: COLORS.primary,
  },
  lastReadCard: {
    marginTop: 10,
    gap: 5,
  },
  lastReadSubtitle: {
    fontSize: SIZES.font,
    fontWeight: "600",
    color: COLORS.primary,
  },
  lastReadDescription: {
    fontSize: SIZES.small,
    fontWeight: "400",
    color: COLORS.primary,
  },
  lastReadDate: {
    fontSize: SIZES.xSmall,
    fontWeight: "400",
    color: COLORS.primary,
  },
  imageSabit: {
    position: "absolute",
    right: -15,
    top: -10,
  },

  icon:{
    width: 70,
    height: 80,
  },
  categoryList: {
    justifyContent: "flex-start",
    paddingVertical: 20,
  },
  categoryCard: {
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    flex: 1,
    backgroundColor: "#F6FFFE",
    alignItems: "center",
    shadowColor: "gray",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    borderRadius: 30,
    elevation: 10, // Android
  },
  categoryTitle: {
    textAlign: "center",
    color: COLORS.font,
    fontWeight: "700",
  },
  categoryDescription: {
    color: COLORS.font,
    fontWeight: "400",
  },

  dropdownMenu: {
    position: "absolute",
    top: 10, 
    right: 20,
    zIndex: 99,
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 10,
    width: 180,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  menuItem: {
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  menuText: {
    fontSize: SIZES.medium,
    fontWeight: "500",
    color: COLORS.primary,
  },
});

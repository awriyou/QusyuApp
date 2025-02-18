import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Keyboard,  // Import Keyboard dari React Native
  } from "react-native";
  import React, { useEffect, useRef } from "react";
  import { COLORS, SIZES } from "../constant/style";
  import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
  import dummyData from "../constant/store";
  
  const SearchScreen = () => {
    const searchInputRef = useRef(null); 
  
    useEffect(() => {
      if (searchInputRef.current) {
        searchInputRef.current.focus(); 
      }
    }, []);  
  
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <Feather
            name="search"
            size={30}
            color={COLORS.font}
            style={styles.searchIcon}
          />
          <TextInput
            ref={searchInputRef}  
            style={styles.searchInput}
            placeholder="Cari di Qusyu..."
            placeholderTextColor={COLORS.gray}
          />
        </View>
      </View>
    );
  };
  
  export default SearchScreen;
  
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
    searchInput: {
      flex: 1,
      fontSize: SIZES.medium,
      color: COLORS.primary,
    },
  });
  
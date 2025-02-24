import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { COLORS, SIZES } from "../constant/style";
import { Feather } from "@expo/vector-icons";
import doaQueries from "../database/doaQueries"; 

const SearchScreen = ({navigation}) => {
  const { searchDoas } = doaQueries(); 
  const searchInputRef = useRef(null);
  const [searchText, setSearchText] = useState(""); 
  const [searchResults, setSearchResults] = useState([]); 
  const [error, setError] = useState(null); 


  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  const handleSearch = async (text) => {
    setSearchText(text); 

    try {
      const results = await searchDoas(text);
      setSearchResults(results);
    } catch (err) {
      setError(err);
      console.error("Error searching:", err)
    } 
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.searchResultItem}
      onPress={() => {
        Keyboard.dismiss(); 
        navigation.navigate("DoaDetail", { doa: item }); 
      }}
    >
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );


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
          onChangeText={handleSearch} 
          value={searchText} 
        />
      </View>

      {error && <Text style={styles.errorText}>Error: {error.message}</Text>}

      <FlatList
        data={searchResults}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.searchResultList}
      />
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
    searchResultList: {
      flex: 1, // Agar FlatList memenuhi ruang yang tersedia
    },
    searchResultItem: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#eee",
    },
    errorText: {
      color: 'red',
      marginTop: 10,
      textAlign: 'center'
    }
  });
  
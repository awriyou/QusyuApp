import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screen/HomeScreen";
import ContentEachScreen from "./screen/ContentEachScreen";
import DetailDoaScreen from "./screen/DetailDoaScreen";
import ShareScreen from "./screen/ShareScreen";
import { COLORS, SIZES } from "./constant/style";
import { Fontisto, Entypo, AntDesign } from "@expo/vector-icons";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import FavoritesScreen from "./screen/FavoritesScreen";
import SearchScreen from "./screen/SearchScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: "Qusyu",
            headerStyle: { backgroundColor: "white" },
            headerTitleAlign: "left",
            headerTitleStyle: {
              fontSize: SIZES.large,
              fontWeight: "bold",
              textAlign: "left",
              color: COLORS.primary,
            },
            headerShadowVisible: false,
            headerRight: () => (
              <View style={{ flexDirection: "row", gap: 10 }}>
                <TouchableOpacity
                  onPressIn={() => {navigation.navigate("favorite")
                  }}
                  style={{}}
                >
                  <Fontisto name="heart-alt" size={24} color={COLORS.font} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPressIn={() => console.log("Search Pressed")}
                  style={{ flexDirection: "row" }}
                >
                  <Entypo
                    name="dots-three-vertical"
                    size={24}
                    color={COLORS.font}
                  />
                </TouchableOpacity>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="DoaDetail"
          component={DetailDoaScreen}
          options={({ navigation }) => ({
            headerStyle: { backgroundColor: "white" },
            headerTitle: () => (
              <Text
                style={{
                  fontSize: SIZES.large,
                  fontWeight: "bold",
                  color: COLORS.primary,
                  marginLeft: 20,
                }}
              >
                Detail Doa
              </Text>
            ),
            headerLeft: () => (
              <TouchableOpacity onPressIn={() => navigation.goBack()}>
                <AntDesign name="left" size={24} color={COLORS.primary} />
              </TouchableOpacity>
            ),
            headerShadowVisible: false,
          })}
        />
        <Stack.Screen
          name="ShareDoa"
          component={ShareScreen}
        />
        <Stack.Screen
          name="favorite"
          component={FavoritesScreen}
          options={({ navigation }) => ({
            headerStyle: { backgroundColor: "white" },
            headerTitle: () => (
              <Text
                style={{
                  fontSize: SIZES.large,
                  fontWeight: "bold",
                  color: COLORS.primary,
                  marginLeft: 20,
                }}
              >
                Disukai
              </Text>
            ),
            headerLeft: () => (
              <TouchableOpacity onPressIn={() => navigation.goBack()}>
                <AntDesign name="left" size={24} color={COLORS.primary} />
              </TouchableOpacity>
            ),
            headerShadowVisible: false,
          })}
        />
        <Stack.Screen
          name="ContentEach"
          component={ContentEachScreen}
          options={({ navigation, route }) => ({
            headerStyle: { backgroundColor: "white" },
            headerTitle: () => (
              <Text
                style={{
                  fontSize: SIZES.large,
                  fontWeight: "bold",
                  color: COLORS.primary,
                  marginLeft: 20,
                }}
              >
                {route.params?.title || "Petunjuk dan Keselamatan"}
              </Text>
            ),
            headerLeft: () => (
              <TouchableOpacity onPressIn={() => navigation.goBack()}>
                <AntDesign name="left" size={24} color={COLORS.primary} />
              </TouchableOpacity>
            ),
            headerShadowVisible: false,
          })}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={({ navigation, route }) => ({
            headerStyle: { backgroundColor: "white" },
            headerTitle: '',
            headerLeft: () => (
              <TouchableOpacity onPressIn={() => navigation.goBack()}>
                <AntDesign name="left" size={24} color={COLORS.primary} />
              </TouchableOpacity>
            ),
            headerShadowVisible: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

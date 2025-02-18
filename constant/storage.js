import AsyncStorage from '@react-native-async-storage/async-storage';
const FAVORITE_DOA_KEY = 'favoriteDoas';

export const getFavoriteDoas = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(FAVORITE_DOA_KEY);
    return jsonValue ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error("Gagal mengambil data favorit", error);
    return [];
  }
};

export const addFavoriteDoa = async (doa) => {
  try {
    const favorites = await getFavoriteDoas();
    const updatedFavorites = [...favorites, doa];
    await AsyncStorage.setItem(FAVORITE_DOA_KEY, JSON.stringify(updatedFavorites));
  } catch (error) {
    console.error("Gagal menyimpan favorit", error);
  }
};

export const removeFavoriteDoa = async (doaId) => {
  try {
    const favorites = await getFavoriteDoas();
    const updatedFavorites = favorites.filter(doa => doa.id !== doaId);
    await AsyncStorage.setItem(FAVORITE_DOA_KEY, JSON.stringify(updatedFavorites));
  } catch (error) {
    console.error("Gagal menghapus favorit", error);
  }
};

export const isDoaFavorite = async (doaId) => {
  const favorites = await getFavoriteDoas();
  return favorites.some(doa => doa.id === doaId);
};

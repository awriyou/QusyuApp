import { useSQLiteContext } from "expo-sqlite";

const doaQueries = () => {
  const db = useSQLiteContext();

  const getCategories = async () => {
    try {
      return await db.getAllAsync("SELECT * FROM categories;");
    } catch (error) {
      console.error("Error getting categories:", error);
      return [];
    }
  };

  const getDoasByCategory = async (categoryId) => {
    try {
      return await db.getAllAsync("SELECT * FROM doas WHERE category_id = ?;", [categoryId]);
    } catch (error) {
      console.error("Error getting doas:", error);
      return [];
    }
  };

  const getFavorites = async () => {
    try {
      return await db.getAllAsync(`
        SELECT doas.* FROM doas 
        JOIN favorites ON doas.id = favorites.doa_id;
      `);
    } catch (error) {
      console.error("Error getting favorites:", error);
      return [];
    }
  };

  const addFavorite = async (doaId) => {
    try {
      await db.runAsync("INSERT INTO favorites (doa_id) VALUES (?);", [doaId]);
      return { success: true };
    } catch (error) {
      console.error("Error adding favorite:", error);
      return { success: false, error };
    }
  };

  const removeFavorite = async (doaId) => {
    try {
      await db.runAsync("DELETE FROM favorites WHERE doa_id = ?;", [doaId]);
      return { success: true };
    } catch (error) {
      console.error("Error removing favorite:", error);
      return { success: false, error };
    }
  };

  const searchDoas = async (query) => {
    try {
      const results = await db.getAllAsync(
        `SELECT * FROM doas WHERE title LIKE ? OR arab LIKE ? OR transliteration LIKE ? OR translation LIKE ?`,
        [`%${query}%`, `%${query}%`, `%${query}%`, `%${query}%`] 
      );
      return results;
    } catch (error) {
      console.error("Error searching doas:", error);
      return [];
    }
  };

  // const insertCategory = async (id, title, description, icon) => {
  //   try {
  //     await db.runAsync(
  //       `INSERT INTO categories (id, title, description, icon) 
  //        VALUES (?, ?, ?, ?) 
  //        ON CONFLICT(id) DO NOTHING;`,
  //       [id, title, description, icon]
  //     );
  //     // console.log(`Kategori "${title}" berhasil dimasukkan`);
  //   } catch (error) {
  //     console.error("Error inserting category:", error);
  //   }
  // };

  // // Memasukkan doa ke database
  // const insertDoa = async (id, categoryId, title, arab, transliteration, translation, reference) => {
  //   try {
  //     await db.runAsync(
  //       `INSERT INTO doas (id, category_id, title, arab, transliteration, translation, reference) 
  //        VALUES (?, ?, ?, ?, ?, ?, ?) 
  //        ON CONFLICT(id) DO NOTHING;`,
  //       [id, categoryId, title, arab, transliteration, translation, reference]
  //     );
  //     // console.log(`Doa "${title}" berhasil dimasukkan`);
  //   } catch (error) {
  //     console.error("Error inserting doa:", error);
  //   }
  // };

  const categories = [
    { id: 1, title: "Petunjuk dan Keselamatan", description: "3 Bacaan", icon: "petunjuk" },
    { id: 2, title: "Keberkahan dan Kebahagiaan", description: "4 Bacaan", icon: "keberkahan" },
    { id: 3, title: "Ampunan dan Istighfar", description: "3 Bacaan", icon: "ampunan" },
    { id: 4, title: "Keluarga dan Keturunan", description: "3 Bacaan", icon: "keluarga" },
    { id: 5, title: "Perlindungan dan Penjagaan", description: "4 Bacaan", icon: "keamanan" },
  ];

  // Dummy data doa
  const doas = [
    { id: 101, category_id: 1, title: "Doa Mohon Petunjuk", arab: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ", transliteration: "Ihdina al-shirata al-mustaqim", translation: "Tunjukilah kami jalan yang lurus.", reference: "QS Al-Fatihah: 6" },
    { id: 102, category_id: 1, title: "Doa Mohon Keselamatan", arab: "اللَّهُمَّ احْفَظْنَا فِيْ طَرِيْقِنَا", transliteration: "Allahumma ihfazna fi tarīqina", translation: "Ya Allah, lindungilah kami dalam perjalanan kami.", reference: "Hadits Shahih" },
    { id: 103, category_id: 1, title: "Doa Perlindungan dari Bahaya", arab: "اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ شَرِّ مَا خَلَقْتَ", transliteration: "Allahumma inna na'udhu bika min sharri ma khalaqt", translation: "Ya Allah, kami berlindung kepada-Mu dari keburukan makhluk-Mu.", reference: "Hadits Shahih" },

    { id: 201, category_id: 2, title: "Doa Bahagia Dunia Akhirat", arab: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً", transliteration: "Rabbana atina fid-dunya hasanah wa fil-akhirati hasanah", translation: "Ya Tuhan kami, berikanlah kami kebaikan di dunia dan di akhirat.", reference: "QS Al-Baqarah: 201" },
    { id: 202, category_id: 2, title: "Doa Mencari Keberkahan", arab: "اللَّهُمَّ بَارِكْ لَنَا فِي رِزْقِنَا", transliteration: "Allahumma barik lana fi rizqina", translation: "Ya Allah, berkahilah kami dalam rezeki kami.", reference: "Hadits Shahih" },
    { id: 203, category_id: 2, title: "Doa untuk Kebaikan Dunia", arab: "رَبَّنَا وَآتِنَا فِي الدُّنْيَا حَسَنَةً", transliteration: "Rabbana atina fid-dunya hasanah", translation: "Ya Tuhan kami, berikanlah kami kebaikan di dunia.", reference: "QS Al-Baqarah: 201" },
    { id: 204, category_id: 2, title: "Doa untuk Kebaikan Akhirat", arab: "رَبَّنَا وَفِي الْآخِرَةِ حَسَنَةً", transliteration: "Rabbana wa fil-akhirati hasanah", translation: "Ya Tuhan kami, berikanlah kami kebaikan di akhirat.", reference: "QS Al-Baqarah: 201" },

    { id: 301, category_id: 3, title: "Doa Istighfar", arab: "أَسْتَغْفِرُ اللَّهَ رَبَّي مِنْ كُلِّ ذَنْبٍ", transliteration: "Astaghfirullaha rabbi min kulli dhambin", translation: "Aku memohon ampun kepada Allah, Tuhan-ku, dari segala dosa.", reference: "Hadits Shahih" },

    { id: 402, category_id: 4, title: "Doa untuk Keturunan yang Baik", arab: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ", transliteration: "Rabbana hab lana min azwajina wa dhurriyatina qurrata a'yunin", translation: "Ya Tuhan kami, anugerahkanlah kepada kami pasangan hidup dan keturunan yang menyenangkan hati.", reference: "QS Al-Furqan: 74" },

    { id: 501, category_id: 5, title: "Doa Perlindungan dari Kejahatan", arab: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ", transliteration: "Qul a'udhu birabbinnas", translation: "Katakanlah: 'Aku berlindung kepada Tuhan manusia.'", reference: "QS An-Nas: 1" },
  ];

  const insertCategory = async (id, title, description, icon) => {
    try {
      await db.runAsync(
        `INSERT INTO categories (id, title, description, icon) 
         VALUES (?, ?, ?, ?) 
         ON CONFLICT(id) DO NOTHING;`,
        [id, title, description, icon]
      );
    } catch (error) {
      console.error("Error inserting category:", error);
    }
  };

  const insertDoa = async (id, categoryId, title, arab, transliteration, translation, reference) => {
    try {
      await db.runAsync(
        `INSERT INTO doas (id, category_id, title, arab, transliteration, translation, reference) 
         VALUES (?, ?, ?, ?, ?, ?, ?) 
         ON CONFLICT(id) DO NOTHING;`,
        [id, categoryId, title, arab, transliteration, translation, reference]
      );
    } catch (error) {
      console.error("Error inserting doa:", error);
    }
  };

  const initializeData = async () => {
    try {
      const existingCategories = await db.getAllAsync("SELECT id FROM categories LIMIT 1;");
      if (existingCategories.length === 0) {
        console.log("Memasukkan data awal...");

        for (const category of categories) {
          await insertCategory(category.id, category.title, category.description, category.icon);
        }

        for (const doa of doas) {
          await insertDoa(doa.id, doa.category_id, doa.title, doa.arab, doa.transliteration, doa.translation, doa.reference);
        }

        console.log("Data awal berhasil dimasukkan.");
      } else {
        console.log("Data sudah ada, tidak perlu mengisi ulang.");
      }
    } catch (error) {
      console.error("Error initializing data:", error);
    }
  };

  const resetDatabase = async () => {
    try {
      await db.execAsync(`
        DROP TABLE IF EXISTS categories;
        DROP TABLE IF EXISTS doas;
        DROP TABLE IF EXISTS favorites;
      `);
      console.log("Database berhasil direset.");
    } catch (error) {
      console.error("Error resetting database:", error);
    }
  };
  

  return {
    getCategories,
    getDoasByCategory,
    getFavorites,
    addFavorite,
    removeFavorite,
    initializeData,
    resetDatabase,
    searchDoas
  };
};

export default doaQueries;

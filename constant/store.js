const dummyData = {
  categories: [
    {
      id: 1,
      title: "Petunjuk dan Keselamatan",
      description: "3 Bacaan",
      count: 3,
      icon: require('../assets/Icon/petunjuk.png'),
      doas: [
        {
          id: 101,
          title: "Doa Mohon Petunjuk",
          arab: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
          transliteration: "Ihdina al-shirata al-mustaqim",
          translation: "Tunjukilah kami jalan yang lurus.",
          reference: "QS Al-Fatihah: 6",
        },
        {
          id: 102,
          title: "Doa Mohon Keselamatan",
          arab: "اللَّهُمَّ احْفَظْنَا فِيْ طَرِيْقِنَا",
          transliteration: "Allahumma ihfazna fi tarīqina",
          translation: "Ya Allah, lindungilah kami dalam perjalanan kami.",
          reference: "Hadits Shahih",
        },
        {
          id: 103, 
          title: "Doa Perlindungan dari Bahaya",
          arab: "اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ شَرِّ مَا خَلَقْتَ",
          transliteration: "Allahumma inna na'udhu bika min sharri ma khalaqt",
          translation: "Ya Allah, kami berlindung kepada-Mu dari keburukan makhluk-Mu.",
          reference: "Hadits Shahih",
        },
      ],
    },
    {
      id: 2,
      title: "Keberkahan dan Kebahagiaan",
      description: "4 Bacaan",
      count: 4,
      icon: require('../assets/Icon/keberkahan.png'),
      doas: [
        {
          id: 201,
          title: "Doa Bahagia Dunia Akhirat",
          arab: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً",
          transliteration: "Rabbana atina fid-dunya hasanah wa fil-akhirati hasanah",
          translation: "Ya Tuhan kami, berikanlah kami kebaikan di dunia dan di akhirat.",
          reference: "QS Al-Baqarah: 201",
        },
        {
          id: 202, // Changed duplicate to new doa
          title: "Doa Mencari Keberkahan",
          arab: "اللَّهُمَّ بَارِكْ لَنَا فِي رِزْقِنَا",
          transliteration: "Allahumma barik lana fi rizqina",
          translation: "Ya Allah, berkahilah kami dalam rezeki kami.",
          reference: "Hadits Shahih",
        },
        {
          id: 203,
          title: "Doa untuk Kebaikan Dunia",
          arab: "رَبَّنَا وَآتِنَا فِي الدُّنْيَا حَسَنَةً",
          transliteration: "Rabbana atina fid-dunya hasanah",
          translation: "Ya Tuhan kami, berikanlah kami kebaikan di dunia.",
          reference: "QS Al-Baqarah: 201",
        },
        {
          id: 204,
          title: "Doa untuk Kebaikan Akhirat",
          arab: "رَبَّنَا وَفِي الْآخِرَةِ حَسَنَةً",
          transliteration: "Rabbana wa fil-akhirati hasanah",
          translation: "Ya Tuhan kami, berikanlah kami kebaikan di akhirat.",
          reference: "QS Al-Baqarah: 201",
        },
      ],
    },
    {
      id: 3,
      title: "Ampunan dan Istighfar",
      description: "3 Bacaan",
      count: 3,
      icon: require('../assets/Icon/ampunan.png'),
      doas: [
        {
          id: 301,
          title: "Doa Bahagia Dunia Akhirat",
          arab: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً",
          transliteration: "Rabbana atina fid-dunya hasanah wa fil-akhirati hasanah",
          translation: "Ya Tuhan kami, berikanlah kami kebaikan di dunia dan di akhirat.",
          reference: "QS Al-Baqarah: 201",
        },
        {
          id: 302, // Added new doa to make it even
          title: "Doa Istighfar",
          arab: "أَسْتَغْفِرُ اللَّهَ رَبَّي مِنْ كُلِّ ذَنْبٍ",
          transliteration: "Astaghfirullaha rabbi min kulli dhambin",
          translation: "Aku memohon ampun kepada Allah, Tuhan-ku, dari segala dosa.",
          reference: "Hadits Shahih",
        },
      ],
    },
    {
      id: 4,
      title: "Keluarga dan Keturunan",
      description: "3 Bacaan",
      count: 3,
      icon: require('../assets/Icon/keluarga.png'),
      doas: [
        {
          id: 401,
          title: "Doa Bahagia Dunia Akhirat",
          arab: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً",
          transliteration: "Rabbana atina fid-dunya hasanah wa fil-akhirati hasanah",
          translation: "Ya Tuhan kami, berikanlah kami kebaikan di dunia dan di akhirat.",
          reference: "QS Al-Baqarah: 201",
        },
        {
          id: 402, // Added new doa to make it even
          title: "Doa untuk Keturunan yang Baik",
          arab: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ",
          transliteration: "Rabbana hab lana min azwajina wa dhurriyatina qurrata a'yunin",
          translation: "Ya Tuhan kami, anugerahkanlah kepada kami pasangan hidup dan keturunan yang menyenangkan hati.",
          reference: "QS Al-Furqan: 74",
        },
      ],
    },
    {
      id: 5,
      title: "Perlindungan dan Penjagaan",
      description: "4 Bacaan",
      count: 4,
      icon: require('../assets/Icon/keamanan.png'),
      doas: [
        {
          id: 501,
          title: "Doa Bahagia Dunia Akhirat",
          arab: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً",
          transliteration: "Rabbana atina fid-dunya hasanah wa fil-akhirati hasanah",
          translation: "Ya Tuhan kami, berikanlah kami kebaikan di dunia dan di akhirat.",
          reference: "QS Al-Baqarah: 201",
        },
        {
          id: 502,
          title: "Doa Perlindungan dari Kejahatan",
          arab: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
          transliteration: "Qul a'udhu birabbinnas",
          translation: "Katakanlah: 'Aku berlindung kepada Tuhan manusia.'",
          reference: "QS An-Nas: 1",
        },
      ],
    },
    {
      id: 6,
      title: "Keluarga dan Keturunan",
      description: "3 Bacaan",
      count: 3,
      icon: require('../assets/Icon/keluarga.png'),
      doas: [
        {
          id: 601,
          title: "Doa Bahagia Dunia Akhirat",
          arab: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً",
          transliteration: "Rabbana atina fid-dunya hasanah wa fil-akhirati hasanah",
          translation: "Ya Tuhan kami, berikanlah kami kebaikan di dunia dan di akhirat.",
          reference: "QS Al-Baqarah: 201",
        },
        {
          id: 602, // Added new doa to make it even
          title: "Doa untuk Keturunan yang Baik",
          arab: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ",
          transliteration: "Rabbana hab lana min azwajina wa dhurriyatina qurrata a'yunin",
          translation: "Ya Tuhan kami, anugerahkanlah kepada kami pasangan hidup dan keturunan yang menyenangkan hati.",
          reference: "QS Al-Furqan: 74",
        },
      ],
    }
  ],
};

export default dummyData;



// CREATE TABLE users (
//   id INTEGER PRIMARY KEY AUTOINCREMENT,
//   name TEXT NOT NULL,
//   email TEXT UNIQUE NOT NULL,
//   password TEXT NOT NULL,
//   verified INTEGER DEFAULT 0,
// );

// CREATE TABLE categories (
//   id INTEGER PRIMARY KEY AUTOINCREMENT,
//   title TEXT NOT NULL,
//   description TEXT,
//   icon TEXT
// );

// CREATE TABLE doas (
//   id INTEGER PRIMARY KEY AUTOINCREMENT,
//   category_id INTEGER,
//   title TEXT NOT NULL,
//   arab TEXT NOT NULL,
//   transliteration TEXT,
//   translation TEXT NOT NULL,
//   reference TEXT,
//   FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
// );

// CREATE TABLE user_favorite_doas (
//   id INTEGER PRIMARY KEY AUTOINCREMENT,
//   user_id INTEGER,
//   doa_id INTEGER,
//   created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
//   FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
//   FOREIGN KEY (doa_id) REFERENCES doas(id) ON DELETE CASCADE
// );

// CREATE TABLE email_verifications (
//   id INTEGER PRIMARY KEY AUTOINCREMENT,
//   user_id INTEGER,
//   code TEXT NOT NULL,
//   expires_at DATETIME NOT NULL,
//   created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
//   FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
// );

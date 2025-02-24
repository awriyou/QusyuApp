
const initializeDatabase = async (db) => {

try {
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS categories (
        id INTEGER PRIMARY KEY NOT NULL,
        title TEXT NOT NULL,
        description TEXT,
        icon TEXT
      );
    `);
  
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS doas (
        id INTEGER PRIMARY KEY NOT NULL,
        category_id INTEGER NOT NULL,
        title TEXT NOT NULL,
        arab TEXT NOT NULL,
        transliteration TEXT,
        translation TEXT,
        reference TEXT,
        FOREIGN KEY (category_id) REFERENCES categories (id)
      );
    `);
  
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS favorites (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        doa_id INTEGER UNIQUE NOT NULL,
        FOREIGN KEY (doa_id) REFERENCES doas (id)
      );
    `);
    console.log("DB INTIALIZED")
} catch (error) {
    console.log("Error While Initialize : ", error);
}
};

export { initializeDatabase };

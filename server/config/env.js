function getEnv(name, required = true, fallback) {
  const value = process.env[name];
  if (!value && required && fallback === undefined) {
    throw new Error(`❌ Missing environment variable: ${name}`);
  }
  return value || fallback;
}

export const config = {
  server: {
    port: Number(getEnv("PORT", false, 4200)),
  },
  database: {
    user: getEnv("DB_USER"),
    password: getEnv("DB_PASS"),
    name: getEnv("DB_NAME"),
    host: getEnv("DB_HOST"),
    port: Number(getEnv("DB_PORT", false, "5432")),
  },
};

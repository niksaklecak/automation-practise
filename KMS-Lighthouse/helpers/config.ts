import dotenv from "dotenv";
import path from "path";

if (process.env.NODE_ENV !== "ci") {
  const envFilePath = path.resolve(__dirname, "..", ".env");
  dotenv.config({ path: envFilePath });
}

/**
 * Retrieves an environment variable strictly.
 * @param key The key of the environment variable.
 * @returns The value of the environment variable.
 * @throws Error if the variable is not set in process.env (e.g., not in the .env file).
 */
function getEnv(key: string): string {
  const value = process.env[key];

  if (value === undefined) {
    throw new Error(`Environment variable '${key}' is not set in the .env file.`);
  }
  return value;
}

export const config = {
  baseUrl: getEnv("BASE_URL"),
};

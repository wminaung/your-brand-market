interface Configs {
  GOOGLE_ID: string;
  GOOGLE_SECRET: string;
  apiBaseUrl: string;
  authBaseUrl: string;
}

export const configs: Configs = {
  GOOGLE_ID: process.env.GOOGLE_ID || "",
  GOOGLE_SECRET: process.env.GOOGLE_SECRET || "",

  apiBaseUrl:
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001/api",
  authBaseUrl: process.env.NEXT_PUBLIC_AUTH_BASE_URL || "http://localhost:3001",
};

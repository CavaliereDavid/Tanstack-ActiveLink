// Dev token with 1 year expiration
const DEV_TOKEN = import.meta.env.VITE_JWT;
export const injectFakeToken = () => {
  console.log("🔧 injectFakeToken called");
  if (process.env.NODE_ENV === "development") {
    console.log("💻 Running in development mode");
    if (!window.location.hash.includes("access_token")) {
      console.log("💉 Injecting fake token");
      window.location.hash = `access_token=${DEV_TOKEN}`;
    } else {
      console.log("🔄 Token already exists in URL");
    }
  } else {
    console.log("🏭 Running in production mode - no token injection");
  }
};

export const DEV_TOKEN = "dev-fake-token-123";

export const injectFakeToken = () => {
  if (process.env.NODE_ENV === "development") {
    if (!window.location.hash.includes("access_token")) {
      window.location.hash = `access_token=${DEV_TOKEN}`;
    }
  }
};

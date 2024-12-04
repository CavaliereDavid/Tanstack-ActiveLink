import { jwtDecode, JwtPayload } from "jwt-decode";

export interface DecodedToken {
  sub: string;
  exp: number;
}

export const validateToken = (token: string | undefined): boolean => {
  if (!token) {
    console.log("❌ No token provided");
    return false;
  }

  try {
    const decoded = jwtDecode<JwtPayload>(token);
    const currentTime = Math.floor(Date.now() / 1000);

    // Skip expiration check in development
    if (process.env.NODE_ENV === "development") {
      console.log("✅ Dev mode: skipping expiration check");
      return true;
    }

    if (decoded.exp && decoded.exp < currentTime) {
      console.log("❌ Token expired");
      return false;
    }

    console.log("✅ Token validated successfully:", decoded);
    return true;
  } catch (error) {
    console.log("❌ Invalid token:", error);
    return false;
  }
};

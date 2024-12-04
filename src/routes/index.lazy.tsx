import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import HeaderNav from "../HeaderNav";
import { useEffect } from "react";
import { validateToken } from "../utils/token";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  console.log("🏁 Index component rendered");
  const navigate = useNavigate();
  const token = window.location.hash.split("access_token=")[1];
  console.log("🎫 Extracted token:", token?.substring(0, 20) + "...");

  useEffect(() => {
    console.log("⚡ Index useEffect triggered");
    const isValidToken = validateToken(token);
    console.log("🔑 Token validation result:", isValidToken);

    if (isValidToken) {
      console.log("🚀 Navigating to /rta");
      navigate({ to: "/rta" });
    }
  }, [token, navigate]);

  if (!validateToken(token)) {
    console.log("⛔ Rendering error state due to invalid token");
    return <div>Invalid token. Please log in again.</div>;
  }

  console.log("✨ Rendering HeaderNav");
  return <HeaderNav />;
}

export default Index;

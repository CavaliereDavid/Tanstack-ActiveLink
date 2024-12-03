import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import HeaderNav from "../HeaderNav";
import { useEffect } from "react";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  console.log("Index component rendered");
  const navigate = useNavigate();
  const token = window.location.hash.split("access_token=")[1];
  console.log("Extracted token:", token);

  const validateToken = (token: string | undefined) => {
    console.log("Validating token...");
    if (!token) {
      console.error("Token is missing");
      return false;
    }
    console.log("Token is valid");
    return true;
  };

  useEffect(() => {
    console.log("useEffect triggered");
    const isValidToken = validateToken(token);
    console.log("Token validation result:", isValidToken);

    if (isValidToken) {
      console.log("Attempting navigation to /rta");
      navigate({ to: "/rta" });
    }
  }, [token, navigate]);

  if (!validateToken(token)) {
    console.log("Rendering error state");
    return <div>Invalid token. Please log in again.</div>;
  }

  console.log("Rendering HeaderNav");
  return <HeaderNav />;
}

export default Index;

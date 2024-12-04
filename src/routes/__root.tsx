import { createRootRoute, Outlet } from "@tanstack/react-router";
import { injectFakeToken } from "../utils/devAuth";

export const Route = createRootRoute({
  component: RootComponent,
  beforeLoad: async () => {
    console.log("🌱 Root route beforeLoad triggered");
    if (process.env.NODE_ENV === "development") {
      console.log("🔧 Development mode detected, injecting fake token");
      injectFakeToken();
    }
  },
  errorComponent: ({ error }) => {
    console.error("💥 Root error component rendered:", error);
    return <div>An error occurred: {error.message}</div>;
  },
});

function RootComponent() {
  console.log("🌲 Root component rendered");
  return <Outlet />;
}

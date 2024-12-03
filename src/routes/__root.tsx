import { createRootRoute, Outlet } from "@tanstack/react-router";
import { injectFakeToken } from "../utils/devAuth";

export const Route = createRootRoute({
  component: RootComponent,
  beforeLoad: async () => {
    if (process.env.NODE_ENV === "development") {
      injectFakeToken();
    }
  },
  errorComponent: ({ error }) => {
    return <div>An error occurred: {error.message}</div>;
  },
});

function RootComponent() {
  return <Outlet />;
}

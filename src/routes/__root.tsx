import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Layout } from "antd";

export const Route = createRootRoute({
  component: () => (
    <>
      <Layout>
        <Layout>
          <Outlet />
        </Layout>
      </Layout>
    </>
  ),
});

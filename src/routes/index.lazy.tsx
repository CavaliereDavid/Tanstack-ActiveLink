import { createLazyFileRoute } from "@tanstack/react-router";
import NavHeader from "../HeaderNav";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <NavHeader />
    </>
  );
}

export default Index;

import { createLazyFileRoute } from "@tanstack/react-router";
import HeaderNav from "../HeaderNav";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <HeaderNav />
    </>
  );
}

export default Index;

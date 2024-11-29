import { createLazyFileRoute } from "@tanstack/react-router";
import HeaderNav from "../HeaderNav";

export const Route = createLazyFileRoute("/contratti")({
  component: Contract,
});

function Contract() {
  return (
    <>
      <HeaderNav />
    </>
  );
}

export default Contract;

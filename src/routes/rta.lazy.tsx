import { createLazyFileRoute } from "@tanstack/react-router";
import HeaderNav from "../HeaderNav";

export const Route = createLazyFileRoute("/rta")({
  component: RTA,
});

function RTA() {
  return (
    <>
      <HeaderNav />
    </>
  );
}

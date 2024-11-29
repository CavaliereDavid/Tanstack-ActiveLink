import { createLazyFileRoute } from "@tanstack/react-router";
import HeaderNav from "../HeaderNav";

export const Route = createLazyFileRoute("/ricambi")({
  component: Spare,
});

function Spare() {
  return (
    <>
      <HeaderNav />
    </>
  );
}

export default Spare;

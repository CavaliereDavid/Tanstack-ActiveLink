import { useLocation } from "@tanstack/react-router";
import { ActiveLink } from "./ActiveLink";
import { FakeIcon } from "./Icons";

const HeaderNav = () => {
  const location = useLocation();
  console.log("HeaderNav rendered, current location:", location.pathname);

  const handleClick = (e: React.MouseEvent, to: string) => {
    e.preventDefault();
    console.log(`Navigating to ${to}`);
    window.location.href = to;
  };

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        height: "100px",
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      <FakeIcon />
      <ActiveLink
        to="/rta"
        onClick={(e) => handleClick(e, "/contratti")}
        activeProps={{
          style: {
            padding: "0px 16px",
            backgroundColor: "#CC0000",
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "4px",
            transition: "background-color 0.3s, color 0.3s",
          },
        }}
        inactiveProps={{
          style: {
            padding: "0px 16px",
            borderRadius: "4px",
            textDecoration: "none",
            color: "#000",
            backgroundColor: "transparent",
            fontWeight: "normal",
            transition: "background-color 0.3s, color 0.3s",
          },
        }}
      >
        <h1>RTA</h1>
      </ActiveLink>
      <ActiveLink
        to="/contratti"
        activeProps={{
          style: {
            padding: "0px 16px",
            backgroundColor: "#CC0000",
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "4px",
            transition: "background-color 0.3s, color 0.3s",
          },
        }}
        inactiveProps={{
          style: {
            padding: "0px 16px",
            borderRadius: "4px",
            textDecoration: "none",
            color: "#000",
            backgroundColor: "transparent",
            fontWeight: "normal",
            transition: "background-color 0.3s, color 0.3s",
          },
        }}
      >
        <h1>Contracts</h1>
      </ActiveLink>
      <ActiveLink
        to="/ricambi"
        activeProps={{
          style: {
            padding: "0px 16px",
            backgroundColor: "#CC0000",
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "4px",
            transition: "background-color 0.3s, color 0.3s",
          },
        }}
        inactiveProps={{
          style: {
            padding: "0px 16px",
            borderRadius: "4px",
            textDecoration: "none",
            color: "#000",
            backgroundColor: "transparent",
            fontWeight: "normal",
            transition: "background-color 0.3s, color 0.3s",
          },
        }}
      >
        <h1>Spare</h1>
      </ActiveLink>
    </nav>
  );
};

export default HeaderNav;

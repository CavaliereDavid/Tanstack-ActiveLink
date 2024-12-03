import { Link, LinkProps } from "@tanstack/react-router";
import React from "react";
import { useLocation } from "@tanstack/react-router";

type ActiveLinkOptions = LinkProps & {
  activeProps?:
    | React.AnchorHTMLAttributes<HTMLAnchorElement>
    | (() => React.AnchorHTMLAttributes<HTMLAnchorElement>);
  inactiveProps?:
    | React.AnchorHTMLAttributes<HTMLAnchorElement>
    | (() => React.AnchorHTMLAttributes<HTMLAnchorElement>);
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

export const ActiveLink: React.FC<ActiveLinkOptions> = ({
  activeProps,
  inactiveProps,
  onClick,
  ...props
}) => {
  const location = useLocation();
  const isActive = location.pathname === props.to;

  const appliedProps = isActive
    ? typeof activeProps === "function"
      ? activeProps()
      : activeProps
    : typeof inactiveProps === "function"
      ? inactiveProps()
      : inactiveProps;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    console.log("Clicked URL:", props.to);
    console.log("Current location:", location.pathname);
    if (onClick) {
      onClick(e);
    }
  };

  return <Link {...props} {...appliedProps} onClick={handleClick} />;
};

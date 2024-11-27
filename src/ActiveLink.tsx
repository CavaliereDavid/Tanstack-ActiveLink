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
};

export const ActiveLink: React.FC<ActiveLinkOptions> = ({
  activeProps,
  inactiveProps,
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

  return <Link {...props} {...appliedProps} />;
};

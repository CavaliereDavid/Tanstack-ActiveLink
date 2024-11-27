import Icon from "@ant-design/icons";
import { type GetProps } from "antd";
import React from "react";

type CustomIconComponentProps = GetProps<typeof Icon>;

const FakeSvg: React.FC = () => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="5em"
      width="5em"
    >
      <circle cx="512" cy="512" r="512" fill="#FFD700" />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".3em"
        fontSize="300"
        fill="#000"
      >
        F
      </text>
    </svg>
  );
};

export const FakeIcon = (props: Partial<CustomIconComponentProps>) => {
  return (
    <Icon
      className="fake-logo"
      style={{ width: "100px", paddingBottom: "25px" }}
      component={FakeSvg}
      {...props}
    />
  );
};

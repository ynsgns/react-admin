import React from "react";
import "./styles.scss";
type HeaderProps = {
  title: string;
};
const Header = ({ title }: HeaderProps) => {
  return <h1 className=".title">{title}</h1>;
};

export default Header;

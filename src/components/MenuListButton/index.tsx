import React from "react";
import { Icon, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import "./styles.scss";

type MenuListButtonProps = {
  key: string;
  to: string;
  title: string;
  icon: string;
  isActive: Boolean;
  setSelectedRote: () => void;
  onClick: () => void;
};

const MenuListButton = ({
  key,
  to,
  title,
  icon,
  isActive,
  setSelectedRote,
  onClick,
}: MenuListButtonProps) => {
  const _onClick = () => {
    if (onClick) {
      onClick();
    }
    if (setSelectedRote) {
      setSelectedRote();
    }
  };

  return (
    <ListItem
      onClick={_onClick}
      className=".btnContainer"
      style={{ backgroundColor: isActive ? "#0BAC73" : "#2A75B4" }}
      button
      key={key}
      component={Link}
      to={to}
    >
      <ListItemIcon>
        <Icon className=".iconWhite">{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
  );
};

export default MenuListButton;

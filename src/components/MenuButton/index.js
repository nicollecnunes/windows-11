import { Button } from "@mui/material";
import React from "react";

const MenuButton = ({ children, ...props }) => {
  return (
    <Button
      sx={{
        height: 40,
        minWidth: 40,
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        },
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default MenuButton;
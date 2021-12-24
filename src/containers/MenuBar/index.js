import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import MenuButton from "../../components/MenuButton";
import Menu from "../Menu";
import { cortanaIcon, menuIcon, taskbarApps } from "../../utils/apps";

const MenuBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={(theme) => ({
        width: "100vw",
        height: 50,
        backgroundColor: `${theme.palette.background.dark}D9`,
        backdropFilter: "blur(2px)",
      })}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={0.5}
        sx={{ height: "100%", pl: 1.8 }}
      >
        <MenuButton onClick={handleClick}>
          <img src={menuIcon} alt="start" style={{ height: 23 }} />
        </MenuButton>

        <MenuButton>
          <img src={cortanaIcon} alt="cortana" style={{ height: 23 }} />
        </MenuButton>

        {taskbarApps.map((app, i) => (
          <MenuButton key={i}>
            <img src={app.icon} alt={app.name} style={{ height: 23 }} />
          </MenuButton>
        ))}
      </Stack>
      <Menu open={open} anchorEl={anchorEl} handleClose={handleClose} />
    </Box>
  );
};

export default MenuBar;

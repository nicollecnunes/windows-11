import {
  Avatar,
  Popover,
  Stack,
  Typography,
  useTheme,
  Button,
  IconButton,
  Box,
  TextField,
  InputAdornment,
} from "@mui/material";
import React from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import SearchIcon from "@mui/icons-material/Search";
import { pinnedApps } from "../../utils/apps";

const Menu = ({ open, anchorEl, handleClose }) => {
  const theme = useTheme();

  const MenuLabel = ({ title, buttonText }) => (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ px: { xs: 2, lg: 4 }, mb: 2 }}
    >
      <Typography variant="body2">{title}</Typography>
      <Button
        size="small"
        variant="contained"
        disableElevation
        sx={{
          ...theme.typography.caption,
          textTransform: "inherit",
          backgroundColor: "rgba(255,255,255,0.1)",
          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.2)",
          },
        }}
      >
        {buttonText}
      </Button>
    </Stack>
  );

  const MenuContent = () => (
    <Stack
      sx={{
        width: "93vw",
        height: "94vh",
        [theme.breakpoints.up("lg")]: {
          width: 480,
          height: 600,
        },
      }}
    >
      <Box
        sx={{
          p: 3,
          flex: 1,
          backgroundColor: `${theme.palette.background.grey}F7`,
          backdropFilter: "blur(5px)",
          border: "1px solid #525252",
          borderBottomTopRadius: 5,
          borderBottomBottomRadius: 5,
        }}
      >
        <TextField
          variant="filled"
          fullWidth
          size="small"
          hiddenLabel
          placeholder="Type here to search"
          sx={{
            pb: { xs: 2, lg: 4 },
            "&.MuiFilledInput.root": {
              background: "rgba(0,0,0,0.3)",
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />
        <MenuLabel title="Pinned" buttonText="All apps >" />
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="flex-start"
          sx={{ mb: 3 }}
        >
          {pinnedApps.map((app, i) => (
            <Button
              key={app.name}
              sx={{
                height: 85,
                minWidth: 98,
                width: 98,
                color: "#ffff",
                textTransform: "inherit",
								'&:hover': {
									backgroundColor: 'rgba(255,255,255,0.1)',
								},
              }}
            >
              <Stack
                spacing={1}
                direction="column"
                alignItems="center"
                justifyContent="center"
              >
                <img src={app.icon} alt={app.name} style={{ height: 30 }} />
                <Typography variant="caption">{app.name}</Typography>
              </Stack>
            </Button>
          ))}
        </Stack>
        <MenuLabel title="Recommended" buttonText="More >" />
      </Box>
      <Stack
        justifyContent="center"
        sx={{
          px: 3,
          height: 60,
          backgroundColor: theme.palette.background.darkgrey,
          border: `1px solid #525252`,
          borderTop: "none",
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ px: { xs: 2, lg: 4 } }}
        >
          <Button
            direction="row"
            spacing={1}
            alignContent="center"
            sx={{
              textTransform: "inherit",
              color: "#ffff",
              "&hover": { backgroundColor: "rgba(255,255,255,0.1)" },
            }}
          >
            <Avatar sx={{ mr: 1.5, width: 30, height: 30 }} />
            <Typography>Nicolle</Typography>
          </Button>
          <IconButton size="small">
            <PowerSettingsNewIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      transformOrigin={{ vertical: "bottom", horizontal: "left" }}
      PaperProps={{
        style: { backgroundColor: "transparent", boxShadow: "none" },
      }}
    >
      <MenuContent />
    </Popover>
  );
};

export default Menu;

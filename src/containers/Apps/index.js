import { Box } from "@mui/material";
import React, { useState, useEffect, useCallback } from "react";
import { useDrop } from "react-dnd";
import AppButton from "../../components/AppButton";
import { desktopApps } from "../../utils/apps";

const Apps = () => {
  const [apps, setApps] = useState({});

  useEffect(() => {
    const _apps = {};

    desktopApps.map((app, i) => {
      _apps[app.name] = {
        left: 20,
        top: i * 100 + 20,
        name: app.name,
        icon: app.icon,
      };
    });

    setApps(_apps);
  }, []);

  const moveBox = useCallback(
    (id, left, top) => {
      setApps((old) => {
        const _apps = { ...old };
        _apps[id] = { ..._apps[id], left, top };

        return _apps;
      });
    },
    [setApps]
  );

  const [, drop] = useDrop(
    () => ({
      accept: "box",
      drop(item, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset();
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);
        moveBox(item.id, left, top);
        return undefined;
      },
    }),
    [moveBox]
  );

  return (
    <Box
      ref={drop}
      sx={{ width: "100%", height: "100%", position: "relavite" }}
    >
      {Object.keys(apps).map((key) => {
        const { left, top, name, icon } = apps[key];

        console.log(apps[key]);

        return (
          <AppButton
            key={key}
            id={key}
            left={left}
            top={top}
            name={name}
            icon={icon}
          />
        );
      })}
    </Box>
  );
};

export default Apps;

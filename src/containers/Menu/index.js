import { Popover } from '@mui/material';
import React from 'react';

const Menu = ({ open, anchorEl, handleClose }) => {

    const MenuContent = () => (
        <div>hey</div>
    )

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
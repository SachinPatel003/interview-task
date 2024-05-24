import React, { useState } from "react";
import { IconButton, Box, Button, Avatar } from "@mui/material";
import Badge from "@mui/material/Badge";
import { WbSunnyRounded } from "@mui/icons-material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

// Internal
import useStyle from "./style";
import DialModal from "./DialModal";

const Header = ({ handleOpenNotificationMenu, drawerWidth, notifCount }) => {
  const classes = useStyle();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const badgeStyle = {
    "& .MuiBadge-badge": {
      width: 27,
      height: 17,
      borderRadius: "20px",
      right: "-8%",
    },
  };

  return (
    <Box component="header" className={classes.appBar}>
      <Box
        className={classes.headerNav}
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
        }}
      >
        <Box className={classes.navRight}>
          <IconButton color="inherit">
            <WbSunnyRounded />
          </IconButton>
          <IconButton
            className={classes.iconButton}
            color="inherit"
            onClick={handleOpenNotificationMenu}
            aria-label="notification"
          >
            <Badge sx={badgeStyle} badgeContent={notifCount} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            aria-label="delete"
            className={classes.callIconButton}
            sx={{ background: "rgb(49,43,105)" }}
            onClick={() => setIsDialogOpen(true)}
          >
            <PhoneRoundedIcon
              className={classes.emailIcon}
              sx={{ fill: "white" }}
            />
          </IconButton>
          <Button
            color="inherit"
            className={classes.profileImgHeader}
            aria-label="profile"
          >
            <Avatar alt="Remy Sharp" src="xyz.jpg" />
          </Button>
        </Box>
      </Box>
      <DialModal
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
      />
    </Box>
  );
};

export default React.memo(Header);

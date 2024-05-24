import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Drawer,
  Box,
  List,
  Link,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import logo from "../../../assets/images/ASTPP-logo.png";
import useStyle from "./style";

let sidebarMenu = [
  { mainMenu: "Team", path: "/team" },
  { mainMenu: "Team", path: "/team" },
  { mainMenu: "Team", path: "/team" },
  { mainMenu: "Team", path: "/team" },
  { mainMenu: "Team", path: "/team" },
];

const Sidebar = () => {
  const classes = useStyle();
  const navigate = useNavigate();

  const drawer = (
    <List component="nav">
      {sidebarMenu?.map((menu) => (
        <React.Fragment key={menu.path + menu.mainMenu}>
          <Link to={menu.path} className={classes.sidebarMenuItems}>
            <ListItemButton className={classes.active}>
              <ListItemText primary={menu.mainMenu} />
            </ListItemButton>
          </Link>
        </React.Fragment>
      ))}
    </List>
  );

  return (
    <aside className={classes.sidebarNav} style={{ width: 250 }}>
      <Drawer
        classes={{ paperAnchorDockedLeft: classes.docked }}
        variant="permanent"
        open
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { lg: "block", xl: "block" },
          ">.MuiDrawer-paper": {
            width: 250,
            background: "rgb(49,43,105)",
          },
        }}
      >
        <Box className={classes.temporaryLogo}>
          <img
            src={logo}
            width={100}
            height={40}
            alt="logo"
            role="presentation"
            onKeyUp={() => {}}
            onClick={() => navigate("/team")}
          />
        </Box>
        {drawer}
      </Drawer>
    </aside>
  );
};

export default Sidebar;

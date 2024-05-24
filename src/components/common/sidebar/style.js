import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
  sidebarNav: {
    color: theme.palette.primaryMain,
    position: "fixed",
    zIndex: 101,
    backgroundColor: "theme.palette.backgroundPrimary",
    height: "100vh",
  },
  docked: {
    background: "theme.palette.backgroundPrimary",
    overflowY: "auto",
  },
  temporaryLogo: {
    height: "38px",
    position: "sticky",
    padding: "19px",
    display: "flex",
    justifyContent: "center",
    "& img": {
      cursor: "pointer",
      height: "100%",
      width: "100%",
      objectFit: "contain",
    },
    background: "rgb(49,43,105)",
    zIndex: 1,
  },
  sidebarMenuItems: {
    cursor: "pointer",
    color: theme.palette.primaryMain,
    textDecoration: "none",
    "& .MuiTypography-root": {
      fontSize: theme.typography.pxToRem(14),
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.palette.inactiveColor,
    },
    "& .MuiListItemButton-root": {
      "&:hover": {
        backgroundColor: "rgb(75,67,124)",
      },
    },
    "& .MuiListItemIcon-root": {
      color: theme.palette.inactiveColor,
    },
  },
  active: {
    "& .MuiTypography-root": {
      color: "white",
    },
    textDecoration: "none",
  },
}));

export default useStyle;

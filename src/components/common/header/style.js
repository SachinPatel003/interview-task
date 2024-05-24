// Material UI
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
  appBar: {
    top: "0px",
    left: "250px",
    position: "sticky",
    zIndex: 100,
    display: "flex",
    width: "calc(100% - 250px)",
    height: "70px",
    lineHeight: "70px",
    padding: theme.spacing(0),
    backgroundColor: theme.palette.backgroundPrimary,
    boxShadow: `0px 0px 24px 0px ${theme.palette.shadowcolor}`,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      left: "0px",
    },
  },
  headerNav: {
    display: "flex",
    justifyContent: "end",
    transition: " all 0.2s ease 0s",
    width: "100%",
    background: theme.palette.backgroundPrimary,
    padding: "0 10px",
  },
  navRight: {
    paddingRight: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      paddingRight: theme.spacing(0.5),
    },
    "&.MuiButtonBase-root": {
      justifyContent: "flex-start",
      "&:hover": {
        backgroundColor: theme.palette.white,
      },
    },
  },
  iconButton: {
    "&.MuiButtonBase-root": {
      "& .MuiSvgIcon-root": {
        color: theme.palette.contrastTextPrimary,
      },
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  },
  callIconButton: {
    "&.MuiButtonBase-root": {
      "& .MuiSvgIcon-root": {
        color: theme.palette.contrastTextPrimary,
      },
      "&:hover": {
        backgroundColor: "rgb(49,43,105)",
      },
    },
  },
  profileImgHeader: {
    "&.MuiButtonBase-root": {
      "&:hover": {
        backgroundColor: "transparent",
      },
      "& .MuiTypography-root": {
        margin: "0px 10px",
        fontWeight: 700,
        textTransform: "capitalize",
      },
      "& .MuiSvgIcon-root": {
        marginLeft: "10px",
      },
    },
  },
}));

export default useStyle;

// Material UI
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
  mainContainer: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    backgroundColor: "rgb(85,85,134)",
  },
  displayCard: {
    width: "600px",
    borderRadius: "15px",
    backgroundColor: theme.palette.backgroundPrimary,
    padding: "20px",
  },
  loginPageContainer: {
    width: "50%",
    overflow: "hidden",
    objectFit: "contain",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.backgroundColorNavyBlue,
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "320px",
      borderBottomLeftRadius: "50%",
      borderBottomRightRadius: "50%",
      objectFit: "contain",
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: "100%",
      height: "50%",
      borderBottomLeftRadius: "50%",
      borderBottomRightRadius: "50%",
    },
    [theme.breakpoints.between("lg", "xl")]: {
      objectFit: "contain",
      flexDirection: "column",
      display: "flex",
    },
  },
  loginImg: {
    objectFit: "scale-down",
    width: "500px",
    height: "500px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
    },
  },
  loginForm: {
    position: "relative",
    flexGrow: 1,
    backgroundColor: theme.palette.backgroundPrimary,
    padding: theme.spacing(4),
    borderRadius: "25px",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    "& .MuiInputLabel-root": {
      fontWeight: theme.typography.h5.fontWeight,
      fontSize: theme.typography.pxToRem(14),
      color: theme.palette.contrastTextPrimary,
    },
    "& .MuiInputBase-root": {
      color: theme.palette.contrastTextPrimary,
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(6, 3),
      margin: theme.spacing(0, 2),
      backgroundColor: theme.palette.backgroundPrimary,
    },
    [theme.breakpoints.between("sm", "lg")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(6, 4),
    },
  },
  avatarLogo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  passwordIcon: {
    color: theme.palette.iconSecondaryColor,
  },
  loginBtn: {
    padding: "14px 7px",
  },
  emailContent: {
    padding: "10px",
  },
  passwordContent: {
    padding: "10px",
  },
  logoImg: {
    objectFit: "contain",
    width: "246px",
    height: "72px",
    [theme.breakpoints.down("sm")]: {
      width: "178px",
      height: "52px",
    },
  },
  loginTheme: {
    top: "0%",
    right: "5%",
    position: "absolute",
    "&.MuiButtonBase-root": {
      justifyContent: "flex-end",
      "&:hover": {
        backgroundColor: theme.palette.white,
      },
    },
  },
}));

export default useStyle;

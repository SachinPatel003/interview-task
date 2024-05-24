// Material UI
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
  appContent: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    minHeight: "calc(100vh - 133px)",
  },
  mainContent: {
    paddingLeft: theme.spacing(31.25),
    display: "flex",
    flex: "1",
    flexDirection: "column",
    minHeight: "0px",
  },
  footer: {
    "&.MuiBox-root": {
      height: "63px",
      display: "flex",
      padding: theme.spacing(0, 3),
      backgroundColor: theme.palette.backgroundSecondary,
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(0, 2),
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      },
      alignItems: "center",
      color: theme.palette.contrastTextPrimary,
    },
  },
}));

export default useStyle;

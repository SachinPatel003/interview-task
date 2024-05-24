import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  position: {
    zIndex: 999,
    "& .MuiDialogContent-root": {
      backgroundColor: "rgb(49,43,105)",
    },
  },
  dialogHeader: {
    "&.MuiGrid-root": {
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  closeModalButton: {
    marginTop: theme.spacing(1),
    alignContent: "flex-end",
    cursor: "pointer",
    color: theme.palette.contrastTextPrimary,
  },
  modalHeader: {
    "& .MuiTypography-root": {
      fontWeight: 900,
      fontSize: "18px",
      textTransform: "capitalize",
      color: theme.palette.contrastTextPrimary,
    },
  },
  dialogAction: {
    display: "flex",
    padding: theme.spacing(2),
    gap: theme.spacing(1),
  },
  backgroundAction: {
    backgroundColor: theme.palette.backgroundPrimary,
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  deleteContainer: {
    "& .MuiSvgIcon-root": {
      color: `${theme.palette.warningColor}!important`,
      fontSize: "63px",
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gridGap: "10px",
  },
  deleteInfo: {
    backgroundColor: theme.palette.backgroundPrimary,
    color: theme.palette.contrastTextPrimary,
    textAlign: "center",
    fontSize: "18px",
    fontWeight: "700",
  },
  deleteContent: {
    backgroundColor: theme.palette.backgroundPrimary,
  },
  deleteTitle: {
    backgroundColor: theme.palette.backgroundPrimary,
    boxShadow: "none",
  },
}));

export default useStyles;

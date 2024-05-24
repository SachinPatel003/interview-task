import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
  helperText: {
    "&.MuiFormHelperText-root": {
      lineHeight: 0.66,
      marginLeft: theme.spacing(0),
    },
  },
  inputLabel: {
    "&.MuiInputLabel-root": {
      color: theme.palette.contrastTextPrimary,
      fontWeight: 500,
      fontSize: "14px",
      paddingBottom: theme.spacing(0.5),
      lineHeight: "22px",
    },
  },
  labelAsterisk: {
    color: theme.palette.warningColor,
  },
  textField: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      fontSize: "14px",
      fontWeight: 500,
      borderColor: theme.palette.contrastTextSecondary,
      borderRadius: theme.shape.borderRadiusSecondary,
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.checkBoxBackgroundColor,
    },
    "& .Mui-disabled": {
      WebkitTextFillColor: theme.palette.contrastTextSecondary,
      "& .MuiSelect-icon": {
        color: theme.palette.contrastTextSecondary,
      },
    },
    "& .MuiSelect-icon": {
      color: theme.palette.contrastTextPrimary,
    },
    "& .MuiSvgIcon-root": {
      color: theme.palette.contrastTextPrimary,
      height: "20px",
      width: "20px",
    },
    "& .MuiOutlinedInput-root": {
      color: theme.palette.contrastTextPrimary,
      backgroundColor: theme.palette.backgroundPrimary,
      borderRadius: theme.shape.borderRadiusSecondary,
    },
  },
  selectMenu: {
    backgroundColor: theme.palette.backgroundPrimary,
    color: theme.palette.contrastTextPrimary,
    boxShadow: theme.palette.shadows,
    maxHeight: "220px",
  },
}));
export default useStyle;

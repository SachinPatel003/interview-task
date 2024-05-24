const { makeStyles } = require("@mui/styles");

const useStyle = makeStyles((theme) => ({
  mainCardContainer: {
    backgroundColor: theme.palette.backgroundPrimary,
    borderRadius: "20px",
    cursor: "pointer",
    boxShadow: `0px 0px 24px 0px ${theme.palette.shadowcolor}`,
    border: "none",
    position: "relative",
  },
  cardContent: {
    "&.MuiCardContent-root": {
      padding: "24px",
    },
  },
}));

export default useStyle;

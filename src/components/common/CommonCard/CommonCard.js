import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import useStyle from "./style";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";

const CommonCard = ({ data }) => {
  const classes = useStyle();

  return (
    <Card variant="outlined" className={classes.mainCardContainer}>
      <CardContent className={classes.cardContent}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Avatar alt="Jemy Sharp" src="xyz.jpg" />
            <Box className={classes.titleContainer}>
              <Typography className={classes.title} variant="h6">
                {data || "-"}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton aria-label="delete">
              <MailOutlineRoundedIcon className={classes.emailIcon} />
            </IconButton>
            <IconButton aria-label="delete">
              <PhoneRoundedIcon
                className={classes.emailIcon}
                sx={{ fill: "rgb(93,190,169)" }}
              />
            </IconButton>
            <IconButton aria-label="delete">
              <VideocamRoundedIcon
                className={classes.emailIcon}
                sx={{ fill: "gray" }}
              />
            </IconButton>
            <IconButton aria-label="delete">
              <StarRateRoundedIcon
                className={classes.emailIcon}
                sx={{ fill: "rgb(253,151,69)" }}
              />
            </IconButton>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

CommonCard.propTypes = {
  onClick: PropTypes.func,
  handleDelete: PropTypes.func,
  handleEdit: PropTypes.func,
  modulePath: PropTypes.string,
  children: PropTypes.node,
};

CommonCard.defaultProps = {
  onClick: () => {},
  handleDelete: () => {},
  handleEdit: () => {},
  modulePath: "",
  children: <div />,
};

export default CommonCard;

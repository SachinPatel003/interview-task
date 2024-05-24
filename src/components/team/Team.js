import { Box, Grid } from "@mui/material";
import React from "react";
import CommonCard from "../common/CommonCard/CommonCard";

const ApiData = [
  "John Doe",
  "John Doe",
  "John Doe",
  "John Doe",
  "John Doe",
  "John Doe",
  "John Doe",
  "John Doe",
  "John Doe",
  "John Doe",
];

const Team = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Grid container spacing={3}>
        {ApiData.map((data) => (
          <Grid item xs={12} md={6} lg={4} xl={2.4} key={data}>
            <CommonCard data={data} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Team;

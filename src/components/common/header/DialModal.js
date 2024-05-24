import React, { useState } from "react";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import DialogBox from "../DialogBox/DialogBoxMain";
import { Videocam } from "@mui/icons-material";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import BackspaceRoundedIcon from "@mui/icons-material/BackspaceRounded";
import CallEndIcon from "@mui/icons-material/CallEnd";
import MicIcon from "@mui/icons-material/Mic";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";

import PauseIcon from "@mui/icons-material/Pause";
import AltRouteIcon from "@mui/icons-material/AltRoute";
import DialpadIcon from "@mui/icons-material/Dialpad";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import MergeRoundedIcon from "@mui/icons-material/MergeRounded";

const dialIcon = [
  {
    icon: <MicIcon />,
    name: "video",
  },
  {
    icon: <AddTwoToneIcon />,
    name: "video",
  },
  {
    icon: <Videocam />,
    name: "video",
  },
  {
    icon: <GraphicEqIcon />,
    name: "video",
  },
  {
    icon: <AltRouteIcon />,
    name: "video",
  },
  {
    icon: <DialpadIcon />,
    name: "video",
  },
  {
    icon: <PauseIcon />,
    name: "video",
  },
  {
    icon: <MergeRoundedIcon />,
    name: "video",
  },
];

const numberFont = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"];

const DialModal = ({ isDialogOpen, setIsDialogOpen }) => {
  const [input, setInput] = useState("");
  const [isDialed, setIsDialed] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleCall = () => {
    setIsDialed(!isDialed);
  };

  return (
    <DialogBox
      isOpen={isDialogOpen}
      onClose={() => setIsDialogOpen(false)}
      maxWidth="xs"
    >
      <Box sx={{ height: "600px" }}>
        {isDialed ? (
          <>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                height: "200px",
                flexDirection: "column",
              }}
            >
              <Typography sx={{ fontSize: "40px", color: "white" }}>
                {input}
              </Typography>
              <Typography sx={{ fontSize: "20px", color: "gray" }}>
                0:01
              </Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 1,
                marginBottom: 2,
                alignItems: "center",
                justifyContent: "center",
                height: "303px",
              }}
            >
              {dialIcon.map((value) => (
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "50%",
                    width: "70px",
                    height: "70px",
                    fontSize: "1.5rem",
                    color: "white",
                    backgroundColor: "transparent",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                    display: "flex",
                    justifySelf: "center",
                    alignSelf: "center",
                    boxShadow: "none",
                  }}
                >
                  {value.icon}
                </Button>
              ))}
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <IconButton
                sx={{
                  borderRadius: "50%",
                  width: "70px",
                  height: "70px",
                  fontSize: "1.5rem",
                  color: "white",
                  display: "flex",
                }}
              >
                <Videocam />
              </IconButton>
              <IconButton
                sx={{
                  borderRadius: "50%",
                  width: "70px",
                  height: "70px",
                  fontSize: "1.5rem",
                  color: "white",
                  backgroundColor: "rgb(217,11,54)",
                  "&:hover": {
                    backgroundColor: "rgb(217,11,54)",
                  },
                  display: "flex",
                  justifySelf: "center",
                  alignSelf: "center",
                }}
                onClick={handleCall}
              >
                <CallEndIcon />
              </IconButton>
              <IconButton
                sx={{
                  borderRadius: "50%",
                  width: "70px",
                  height: "70px",
                  fontSize: "1.5rem",
                  color: "white",
                  display: "flex",
                }}
                onClick={() => setInput("")}
              >
                <BackspaceRoundedIcon />
              </IconButton>
            </Box>
          </>
        ) : (
          <>
            <Box sx={{ height: "200px" }}>
              <TextField
                value={input}
                onChange={handleInputChange}
                placeholder="Enter Name/Number"
                inputProps={{ min: 0, style: { textAlign: "center" } }}
                sx={{
                  width: "100%",
                  "& .MuiInputBase-input": {
                    color: "white",
                    fontSize: "25px",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
              />
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 1,
                marginBottom: 2,
                alignItems: "center",
                justifyContent: "center",
                height: "303px",
              }}
            >
              {numberFont.map((value) => (
                <Button
                  variant="contained"
                  onClick={() => handleButtonClick(value)}
                  sx={{
                    borderRadius: "50%",
                    width: "70px",
                    height: "70px",
                    fontSize: "1.5rem",
                    color: "white",
                    backgroundColor: "rgb(75,68,123)",
                    "&:hover": {
                      backgroundColor: "rgb(75,68,123)",
                    },
                    display: "flex",
                    justifySelf: "center",
                    alignSelf: "center",
                  }}
                >
                  {value}
                </Button>
              ))}
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <IconButton
                sx={{
                  borderRadius: "50%",
                  width: "70px",
                  height: "70px",
                  fontSize: "1.5rem",
                  color: "white",
                  display: "flex",
                }}
              >
                <Videocam />
              </IconButton>
              <IconButton
                sx={{
                  borderRadius: "50%",
                  width: "70px",
                  height: "70px",
                  fontSize: "1.5rem",
                  color: "white",
                  backgroundColor: "rgb(52,197,93)",
                  "&:hover": {
                    backgroundColor: "rgb(52,197,93)",
                  },
                  display: "flex",
                  justifySelf: "center",
                  alignSelf: "center",
                }}
                onClick={handleCall}
              >
                <PhoneRoundedIcon />
              </IconButton>
              <IconButton
                sx={{
                  borderRadius: "50%",
                  width: "70px",
                  height: "70px",
                  fontSize: "1.5rem",
                  color: "white",
                  display: "flex",
                }}
                onClick={() => setInput("")}
              >
                <BackspaceRoundedIcon />
              </IconButton>
            </Box>
          </>
        )}
      </Box>
    </DialogBox>
  );
};

export default DialModal;

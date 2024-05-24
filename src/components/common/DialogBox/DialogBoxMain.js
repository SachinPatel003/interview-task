import React from "react";
import PropTypes from "prop-types";
import { Dialog, DialogContent } from "@mui/material";
import useStyles from "./style";

const DialogBox = ({ isOpen, onClose, maxWidth, children }) => {
  const classes = useStyles();
  return (
    <Dialog
      className={classes.position}
      open={isOpen}
      onClose={onClose}
      scroll="paper"
      fullWidth
      maxWidth={maxWidth}
      sx={{
        "& .MuiPaper-root": {
          borderRadius: "20px",
        },
      }}
    >
      <>
        <DialogContent>{children}</DialogContent>
      </>
    </Dialog>
  );
};

DialogBox.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.node,
  handleSubmit: PropTypes.func,
  handleCancel: PropTypes.func,
  addAsEmployee: PropTypes.func,
  disable: PropTypes.bool,
  isFooter: PropTypes.bool,
  maxWidth: PropTypes.string,
  btnLabelSubmit: PropTypes.string,
  btnLabelCancel: PropTypes.string,
  isCancelVisible: PropTypes.bool,
  formType: PropTypes.string,
  isDeleteVisible: PropTypes.bool,
  OnboardingButton: PropTypes.bool,
  deleteTitle: PropTypes.string,
  isDeclinedVisible: PropTypes.bool,
  formikResetBtnLabel: PropTypes.string,
  formikRef: PropTypes.func,
  isPersonaliseSalary: PropTypes.bool,
  btnOne: PropTypes.bool,
  btnOneLabel: PropTypes.string,
  handleBtnOne: PropTypes.func,
};

DialogBox.defaultProps = {
  isOpen: false,
  onClose: () => {},
  title: "",
  children: <div />,
  handleSubmit: () => {},
  handleCancel: () => {},
  addAsEmployee: () => {},
  disable: false,
  isFooter: true,
  maxWidth: "lg",
  btnLabelSubmit: "Submit",
  btnLabelCancel: "Cancel",
  isCancelVisible: false,
  formType: "",
  isDeleteVisible: false,
  OnboardingButton: false,
  deleteTitle: "",
  isDeclinedVisible: false,
  formikResetBtnLabel: "",
  formikRef: () => {},
  isPersonaliseSalary: false,
  btnOne: false,
  btnOneLabel: "",
  handleBtnOne: () => {},
};

export default DialogBox;

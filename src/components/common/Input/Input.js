import React from "react";

// material UI
import { InputLabel, TextField } from "@mui/material";
// npm package
import { useField } from "formik";

// style
import useStyles from "./style";

const CustomTextField = ({
  name,
  label,
  type,
  Required,
  placeholder,
  ...rest
}) => {
  const classes = useStyles();
  const [field, meta] = useField(name);

  const configTextField = {
    ...field,
    value: field.value,
    ...rest,
    size: "small",
    type,
    className: classes.textField,
  };

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }

  return (
    <>
      {label && (
        <InputLabel
          required={Required}
          className={classes.inputLabel}
          classes={{
            asterisk: classes.labelAsterisk,
          }}
        >
          {label}
        </InputLabel>
      )}
      <TextField
        placeholder={placeholder}
        {...rest}
        className={classes.textField}
        FormHelperTextProps={{
          classes: {
            root: classes.helperText,
          },
        }}
        SelectProps={{
          MenuProps: {
            classes: { paper: classes.selectMenu },
          },
        }}
        {...configTextField}
        fullWidth
        type={type}
        inputProps={{
          ...configTextField.inputProps,
          "aria-label": `${name || label}-input`,
          autocomplete: "new-password",
          form: {
            autocomplete: "off",
          },
        }}
      />
    </>
  );
};

export default React.memo(CustomTextField);

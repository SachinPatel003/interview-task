import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Button } from '@mui/material';

// style
import useStyles from './style';

const CustomButton = ({
  btnLabel,
  className,
  type,
  onClick,
  disable,
  form,
  variant,
  width,
  position,
  right,
  top,
  fullWidth,
  ...rest
}) => {
  const classes = useStyles();
  return (
    <Button
      form={form}
      disabled={disable}
      type={type}
      className={clsx(
        className,
        { [classes.button]: !disable },
        { [classes.disableButton]: disable },
      )}
      variant={variant}
      onClick={onClick}
      sx={{
        width,
        position,
        right,
        top,
      }}
      fullWidth={fullWidth}
      {...rest}
      disableRipple
    >
      {btnLabel}
    </Button>
  );
};

CustomButton.propTypes = {
  btnLabel: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disable: PropTypes.bool,
  form: PropTypes.string,
  variant: PropTypes.string,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  position: PropTypes.number,
  right: PropTypes.number,
  top: PropTypes.number,
  fullWidth: PropTypes.bool,
};

CustomButton.defaultProps = {
  btnLabel: '',
  className: '',
  type: 'submit',
  onClick: () => {},
  disable: false,
  form: '',
  variant: 'contained',
  width: null,
  position: null,
  right: null,
  top: null,
  fullWidth: false,
};

export default CustomButton;

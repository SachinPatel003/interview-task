import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    '&.MuiButton-root': {
      whiteSpace: 'nowrap',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: theme.palette.whitePrimary,
      height: '40px',
      backgroundColor: theme.palette.buttonPrimary,
      borderRadius: theme.shape.borderRadiusPrimary,
      textTransform: 'capitalize',
      fontWeight: '500',
      textAlign: 'center',
      fontSize: '16px',
      lineHeight: '24px',
      border: '1px solid transparent',
      '&:hover': {
        backgroundColor: theme.palette.backgroundPrimary,
        border: `1px solid ${theme.palette.contrastTextPrimary}`,
        color: theme.palette.contrastTextPrimary,
      },
      '&:active': {
        backgroundColor: theme.palette.contrastTextPrimary,
        border: '1px solid transparent',
        color: theme.palette.backgroundPrimary,
      },
    },
    '&.cancelBtn': {
      backgroundColor: theme.palette.backgroundPrimary,
      border: `1px solid ${theme.palette.contrastTextPrimary}`,
      color: theme.palette.contrastTextPrimary,
      '&.MuiButton-root:hover': {
        backgroundColor: theme.palette.buttonPrimary,
        border: '1px solid transparent',
        color: theme.palette.backgroundColorWhite,
      },
    },
    '&.deleteBtn': {
      background: theme.palette.warningColor,
      color: theme.palette.white,
      '&.MuiButton-root:hover': {
        background: theme.palette.backgroundPrimary,
        border: `1px solid ${theme.palette.warningColor}`,
        color: theme.palette.warningColor,
      },
    },
  },
  disableButton: {
    '&.MuiButton-root': {
      whiteSpace: 'nowrap',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: theme.palette.whitePrimary,
      height: '40px',
      backgroundColor: theme.palette.contrastTextSecondary,
      borderRadius: theme.shape.borderRadiusPrimary,
      textTransform: 'capitalize',
      fontWeight: '500',
      textAlign: 'center',
      fontSize: '16px',
      lineHeight: '24px',
    },
  },
}));

export default useStyles;

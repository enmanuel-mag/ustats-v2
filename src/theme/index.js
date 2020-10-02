import { createMuiTheme } from '@material-ui/core';
import { colors } from '@material-ui/core';

const white = '#FFFFFF';

const theme = createMuiTheme({
  palette: {
    primary: {
      contrastText: white,
      dark: colors.red[700],
      main: colors.red[500],
      light: colors.red[100],
    },
    secondary: {
      main: '#fff',
    },
  },
  typography: {
    h6: {
      fontSize: '18px',
      fontWeight: 'normal',
    },
  },
});

export default theme;

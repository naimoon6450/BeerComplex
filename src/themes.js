import { createMuiTheme } from '@material-ui/core/styles';

// for overriding custom themes
const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#7FDBFF',
      contrastText: 'white',
    },
  },
});

export default theme;

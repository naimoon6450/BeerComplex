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

// settings for particle effect
export const partOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    line_linked: {
      color: '#708090',
    },
    shape: {
      type: 'image',
      image: {
        src:
          'http://www.shejiye.com/uploadfile/icon/2017/0203/shejiyeiconwr5ig3wbda5.png',
      },
    },
    size: {
      value: 10,
    },
    interactivity: {
      detect_on: 'window',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse',
        },
      },
      modes: {
        repulse: {
          distance: 50,
          duration: 0.4,
        },
      },
    },
  },
};

export default theme;

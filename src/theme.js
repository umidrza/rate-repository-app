import { Platform } from 'react-native';

const theme = {
  colors: {
    primary: '#0366d6',
    textPrimary: '#24292e',
    textSecondary: '#586069',
    backgroundPrimary: '#ffffff',
    backgroundSecondary: '#24292e',
    white: '#ffffff',
    error: '#d73a4a',
    borderColor: '#e1e4e8',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    heading: 20,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  spacing: {
    small: 5,
    medium: 8,
    large: 15,
  },
  borderRadius: {
    small: 4,
    medium: 5,
  },
};

export default theme;
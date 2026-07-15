import { Platform } from 'react-native';

const theme = {
  colors: {
    primary: '#0366d6',
    textPrimary: '#24292e',
    textSecondary: '#586069',
    backgroundPrimary: '#ffffff',
    backgroundSecondary: '#24292e',
    white: '#ffffff',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
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
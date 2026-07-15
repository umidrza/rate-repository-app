import { Text as NativeText, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.normal,
    fontFamily: theme.fonts.main,
  },
  colorPrimary: {
    color: theme.colors.textPrimary,
  },
  colorSecondary: {
    color: theme.colors.textSecondary,
  },
  subheading: {
    fontSize: theme.fontSizes.subheading,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
});

const Text = ({
  color = 'primary',
  fontWeight,
  fontSize,
  style,
  ...props
}) => {
  const textStyle = [
    styles.text,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    color === 'white' && { color: theme.colors.white },
    fontSize === 'subheading' && styles.subheading,
    fontWeight === 'bold' && styles.bold,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
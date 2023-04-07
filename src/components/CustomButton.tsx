import React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

interface CustomButtonProps {
  onPress: any;
  title: any;
  disabled?: boolean;
  buttonStyles?: ViewStyle | ViewStyle[];
  textStyles?: TextStyle | TextStyle[];
}
const CustomButton: React.FC<CustomButtonProps> = props => {
  const {onPress, title, buttonStyles, disabled, textStyles} = props;
  return (
    <TouchableOpacity
      style={[styles.buttonStyle, buttonStyles]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={[styles.textStyle, textStyles]}>{title}</Text>
    </TouchableOpacity>
  );
};

CustomButton.defaultProps = {
  disabled: false,
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: 'blue',
    borderRadius: 5,
    width: 120,
    height: 40,
  },
  textStyle: {
    textAlign: 'center',
    color: 'white',
    padding: 10,
  },
});

export default CustomButton;

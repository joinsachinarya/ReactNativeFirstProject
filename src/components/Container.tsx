import React from 'react';
import {SafeAreaView, StyleSheet, ViewStyle} from 'react-native';
interface ContainerProps {
  children: any;
  containerStyles?: ViewStyle | ViewStyle[];
}
const Container: React.FC<ContainerProps> = props => {
  const {children, containerStyles} = props;
  return (
    <SafeAreaView style={[styles.container, containerStyles]}>
      {children}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Container;

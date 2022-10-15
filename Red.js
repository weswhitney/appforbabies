import React from 'react';
import {StyleSheet, View} from 'react-native';

const Red = () => {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'red',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Red;

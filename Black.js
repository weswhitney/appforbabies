import React from 'react';
import {StyleSheet, View} from 'react-native';

const Black = () => {
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
          backgroundColor: 'black',
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

export default Black;

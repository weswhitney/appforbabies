import React from 'react';
import {StyleSheet, View} from 'react-native';
import DraggyFunBox from './DraggyFunBox';

const App = () => {
  return (
    <View style={styles.container}>
      <DraggyFunBox />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { jsonToCSV } from 'react-native-csv';

export default function App() {
  React.useEffect(() => {
    const jsonData = `[
      {
          "Column 1": "1-1",
          "Column 2": "1-2",
          "Column 3": "1-3",
          "Column 4": "1-4"
      },
      {
          "Column 1": "2-1",
          "Column 2": "2-2",
          "Column 3": "2-3",
          "Column 4": "2-4"
      },
      {
          "Column 1": "3-1",
          "Column 2": "3-2",
          "Column 3": "3-3",
          "Column 4": "3-4"
      },
      {
          "Column 1": 4,
          "Column 2": 5,
          "Column 3": 6,
          "Column 4": 7
      }
    ]`;
    const results = jsonToCSV(jsonData);
    console.log('======================');
    console.log(results);
    console.log('======================');
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

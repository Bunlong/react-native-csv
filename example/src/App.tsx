import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { jsonToCSV, readRemoteFile, readString } from 'react-native-csv';

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
    console.log('1111111111111111111111');
    console.log(results);
    console.log('1111111111111111111111');

    readRemoteFile('https://react-papaparse.js.org/static/csv/normal.csv', {
      complete: (results: any) => {
        console.log('2222222222222222222222');
        console.log(results);
        console.log('2222222222222222222222');
      },
    });

    const str = `Column 1,Column 2,Column 3,Column 4
1-1,1-2,1-3,1-4
2-1,2-2,2-3,2-4
3-1,3-2,3-3,3-4
4,5,6,7`;
    const result = readString(str);
    console.log('3333333333333333333333');
    console.log(result);
    console.log('3333333333333333333333');
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
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

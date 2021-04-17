<p align="center">
  ⭐️ Please support us by giving a star! Thanks! ⭐️
</p>

# react-native-csv

react-native-csv is the fastest CSV (or delimited text) parser for React Native.

## 🔧 Installation

react-native-csv is available on npm. It can be installed with the following command:

```
npm install react-native-csv --save
```

react-native-csv is available on yarn as well. It can be installed with the following command:

```
yarn add react-native-csv --save
```

## 💡 Usage

### 🎀 readString

```javascript
import { readString } from 'react-native-csv';

const str = `Column 1,Column 2,Column 3,Column 4
1-1,1-2,1-3,1-4
2-1,2-2,2-3,2-4
3-1,3-2,3-3,3-4
4,5,6,7`;

const results = readString(str);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

<!--

Run the example app on iOS:

  $ yarn example ios

Run the example app on Android:

  $ yarn example android
  $ react-native run-android
  $ react-native start
  
-->

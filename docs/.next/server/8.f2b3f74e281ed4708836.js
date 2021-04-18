exports.ids = [8];
exports.modules = {

/***/ "hKbm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Demo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("65ip");
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_tabs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_papaparse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("5Mda");
/* harmony import */ var react_papaparse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_papaparse__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const buttonRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
class Demo extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleImportOffer", () => {
      const index = this.state.tabIndex;

      if (index === 0) {
        const results = Object(react_papaparse__WEBPACK_IMPORTED_MODULE_2__["readString"])(this.state.str);
        console.log('---------------------------');
        console.log('Parse complete!');
        console.log('Row count: ', results.data.length);
        console.log('Errors: ', results.errors.length);
        console.log('Results: ', results);
        console.log('---------------------------');
      } else if (index === 1) {
        const results = this.state.csvData;

        if (results) {
          console.log('---------------------------');
          console.log('Parse complete!');
          console.log('Row count: ', results.length);
          console.log('Results: ', results);
          console.log('---------------------------');
        } else {
          // eslint-disable-next-line no-undef
          alert('Please choose at least one file to parse.');
        }
      } else if (index === 2) {
        if (this.state.url === '') {
          // eslint-disable-next-line no-undef
          alert('Please enter the URL of a file to download and parse.');
          return;
        }

        console.log('Running!');
        Object(react_papaparse__WEBPACK_IMPORTED_MODULE_2__["readRemoteFile"])(this.state.url, {
          complete: results => {
            console.log('---------------------------');
            console.log('Parse complete!');
            console.log('Row count: ', results.data.length);
            console.log('Errors: ', results.errors.length);
            console.log('Results: ', results);
            console.log('---------------------------');
          }
        });
      } else {
        try {
          const results = Object(react_papaparse__WEBPACK_IMPORTED_MODULE_2__["jsonToCSV"])(this.state.jsonData);
          console.log('---------------------------');
          console.log(results);
          console.log('---------------------------');
        } catch (e) {
          // eslint-disable-next-line no-undef
          alert('Please enter valid JSON.');
        }
      }
    });

    _defineProperty(this, "setTabIndex", index => {
      this.setState({
        tabIndex: index
      });
    });

    _defineProperty(this, "handleStrChange", e => {
      this.setState({
        str: e.target.value
      });
    });

    _defineProperty(this, "handleJsonDataChange", e => {
      this.setState({
        jsonData: e.target.value
      });
    });

    _defineProperty(this, "handleURLChange", e => {
      this.setState({
        url: e.target.value
      });
    });

    _defineProperty(this, "setURL", url => {
      this.setState({
        url
      });
    });

    _defineProperty(this, "handleOnDrop", data => {
      this.setState({
        csvData: data
      });
    });

    _defineProperty(this, "handleOnError", (error, file, inputElem, reason) => {
      console.log(error);
    });

    _defineProperty(this, "handleOpenDialog", e => {
      // Note that the ref is set async, so it might be null at some point
      if (buttonRef.current) {
        buttonRef.current.open(e);
      }
    });

    _defineProperty(this, "handleRemoveFile", e => {
      // Note that the ref is set async, so it might be null at some point
      if (buttonRef.current) {
        buttonRef.current.removeFile(e);
      }
    });

    _defineProperty(this, "handleOnRemoveFile", data => {
      this.setState({
        csvData: data
      });
    });

    this.state = {
      tabIndex: 0,
      str: `Column 1,Column 2,Column 3,Column 4
1-1,1-2,1-3,1-4
2-1,2-2,2-3,2-4
3-1,3-2,3-3,3-4
4,5,6,7`,
      csvData: null,
      url: '',
      jsonData: `[
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
]`
    };
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("main", null, __jsx("header", null, __jsx("div", {
      className: "grid-container"
    }, __jsx("div", {
      className: "grid-40 mobile-grid-50"
    }, __jsx("div", {
      className: "links"
    }, __jsx("a", {
      href: "/"
    }, __jsx("i", {
      className: "fa fa-home fa-lg"
    }), " Home"), __jsx("a", {
      href: "/demo"
    }, __jsx("i", {
      className: "fa fa-magic fa-lg"
    }), " Demo"), __jsx("a", {
      href: "/docs"
    }, __jsx("i", {
      className: "fa fa-book fa-lg"
    }), " Docs"))), __jsx("div", {
      className: "grid-20 hide-on-mobile text-center"
    }, __jsx("a", {
      href: "/",
      className: "text-logo"
    }, "react-papaparse 3")), __jsx("div", {
      className: "grid-40 mobile-grid-50 text-right"
    }, __jsx("div", {
      className: "links"
    }, __jsx("a", {
      href: "https://github.com/Bunlong/react-papaparse"
    }, __jsx("i", {
      className: "fa fa-github fa-lg"
    }), " GitHub"))))), __jsx("h1", null, "Choose a Demo"), __jsx("div", {
      className: "grid-container"
    }, __jsx("div", {
      className: "grid-66"
    }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
      onSelect: index => this.setTabIndex(index)
    }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__["TabList"], null, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__["Tab"], null, "String"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__["Tab"], null, "Local File(s)"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__["Tab"], null, "Remote File"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__["Tab"], null, "JSON to CSV")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__["TabPanel"], null, __jsx("div", {
      className: "input-area",
      id: "input-string"
    }, __jsx("div", {
      style: {
        float: 'right',
        marginBottom: 14
      }
    }, __jsx("a", {
      href: "https://github.com/Bunlong/react-papaparse/blob/master/demo/ReadString.js"
    }, "Source code")), __jsx("textarea", {
      id: "input",
      placeholder: "String input",
      onChange: this.handleStrChange,
      value: this.state.str
    }))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__["TabPanel"], null, __jsx("div", {
      className: "input-area",
      id: "input-string"
    }, __jsx("div", null, __jsx("div", {
      className: "text-center"
    }, "Choose one or more delimited text files for react-papaparse to parse."), __jsx("div", {
      style: {
        marginTop: 60,
        marginBottom: 46
      }
    }, __jsx("h5", null, "Basic Upload"), __jsx("div", {
      style: {
        marginBottom: 14,
        textAlignLast: 'end'
      }
    }, __jsx("a", {
      href: "https://github.com/Bunlong/react-papaparse/blob/master/demo/CSVReader1.js"
    }, "Source code")), __jsx(react_papaparse__WEBPACK_IMPORTED_MODULE_2__["CSVReader"], {
      ref: buttonRef,
      onFileLoad: this.handleOnDrop,
      onError: this.handleOnError,
      noClick: true,
      noDrag: true,
      onRemoveFile: this.handleOnRemoveFile
    }, ({
      file
    }) => __jsx("aside", {
      style: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10
      }
    }, __jsx("button", {
      type: "button",
      onClick: this.handleOpenDialog,
      style: {
        borderRadius: 0,
        marginLeft: 0,
        marginRight: 0,
        width: '40%',
        paddingLeft: 0,
        paddingRight: 0
      }
    }, "Browe file"), __jsx("div", {
      style: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ccc',
        height: 45,
        lineHeight: 2.5,
        marginTop: 5,
        marginBottom: 5,
        paddingLeft: 13,
        paddingTop: 3,
        width: '60%'
      }
    }, file && file.name), __jsx("button", {
      className: "button red",
      style: {
        borderRadius: 0,
        marginLeft: 0,
        marginRight: 0,
        paddingLeft: 20,
        paddingRight: 20
      },
      onClick: this.handleRemoveFile
    }, "Remove")))), __jsx("div", {
      style: {
        marginTop: 50,
        marginBottom: 46
      }
    }, __jsx("h5", null, "Click and Drag Upload"), __jsx("div", {
      style: {
        marginBottom: 14,
        textAlignLast: 'end'
      }
    }, __jsx("a", {
      href: "https://github.com/Bunlong/react-papaparse/blob/master/demo/CSVReader2.js"
    }, "Source code")), __jsx(react_papaparse__WEBPACK_IMPORTED_MODULE_2__["CSVReader"], {
      onDrop: this.handleOnDrop,
      onError: this.handleOnError,
      addRemoveButton: true,
      onRemoveFile: this.handleOnRemoveFile
    }, __jsx("span", null, "Drop CSV file here or click to upload."))), __jsx("div", {
      style: {
        marginTop: 50,
        marginBottom: 46
      }
    }, __jsx("h5", null, "Drag ( No Click ) Upload"), __jsx("div", {
      style: {
        marginBottom: 14,
        textAlignLast: 'end'
      }
    }, __jsx("a", {
      href: "https://github.com/Bunlong/react-papaparse/blob/master/demo/CSVReader3.js"
    }, "Source code")), __jsx(react_papaparse__WEBPACK_IMPORTED_MODULE_2__["CSVReader"], {
      onDrop: this.handleOnDrop,
      onError: this.handleOnError,
      noClick: true,
      addRemoveButton: true,
      onRemoveFile: this.handleOnRemoveFile
    }, __jsx("span", null, "Drop CSV file here to upload."))), __jsx("div", {
      style: {
        marginTop: 50,
        marginBottom: 46
      }
    }, __jsx("h5", null, "Click ( No Drag ) Upload"), __jsx("div", {
      style: {
        marginBottom: 14,
        textAlignLast: 'end'
      }
    }, __jsx("a", {
      href: "https://github.com/Bunlong/react-papaparse/blob/master/demo/CSVReader4.js"
    }, "Source code")), __jsx(react_papaparse__WEBPACK_IMPORTED_MODULE_2__["CSVReader"], {
      onDrop: this.handleOnDrop,
      onError: this.handleOnError,
      noDrag: true,
      addRemoveButton: true,
      onRemoveFile: this.handleOnRemoveFile
    }, __jsx("span", null, "Click to upload."))), "Sample files:", __jsx("ul", null, __jsx("li", null, __jsx("a", {
      href: "/static/csv/normal.csv",
      id: "local-normal-file"
    }, "Normal file")), __jsx("li", null, __jsx("a", {
      href: "/static/csv/big.csv",
      id: "local-large-file"
    }, "Large file")), __jsx("li", null, __jsx("a", {
      href: "/static/csv/malformed.csv",
      id: "local-malformed-file"
    }, "Malformed file")))))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__["TabPanel"], null, __jsx("div", {
      className: "input-area",
      id: "input-string"
    }, __jsx("div", {
      style: {
        marginBottom: 14,
        textAlignLast: 'end'
      }
    }, __jsx("a", {
      href: "https://github.com/Bunlong/react-papaparse/blob/master/demo/ReadRemoteFile.js"
    }, "Source code")), __jsx("div", null, __jsx("div", {
      className: "text-center"
    }, "Type the URL of the file to be downloaded and parsed.", __jsx("br", null), __jsx("small", null, "(cross-origin requests require Access-Control-Allow-Origin header)")), __jsx("input", {
      type: "text",
      id: "url",
      placeholder: "URL",
      value: this.state.url,
      onChange: this.handleURLChange
    }), "Sample remote files:", __jsx("ul", null, __jsx("li", null, __jsx("a", {
      id: "local-normal-file",
      onClick: () => this.setURL('/static/csv/normal.csv'),
      style: {
        cursor: 'pointer'
      }
    }, "Normal file")), __jsx("li", null, __jsx("a", {
      id: "local-large-file",
      onClick: () => this.setURL('/static/csv/big.csv'),
      style: {
        cursor: 'pointer'
      }
    }, "Large file")), __jsx("li", null, __jsx("a", {
      id: "local-malformed-file",
      onClick: () => this.setURL('/static/csv/malformed.csv'),
      style: {
        cursor: 'pointer'
      }
    }, "Malformed file")))))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__["TabPanel"], null, __jsx("div", {
      className: "input-area",
      id: "input-string"
    }, __jsx("div", {
      style: {
        float: 'right',
        marginBottom: 14
      }
    }, __jsx("a", {
      href: "https://github.com/Bunlong/react-papaparse/blob/master/demo/JsonToCSV.js"
    }, "Source code")), __jsx("div", null, __jsx("textarea", {
      id: "json",
      placeholder: "JSON string",
      value: this.state.jsonData,
      onChange: this.handleJsonDataChange
    }))))), __jsx("div", {
      className: "text-center"
    }, __jsx("div", {
      className: "see-results"
    }, "Results will appear in the console of your browser's inspector tools"), __jsx("button", {
      id: "submit",
      className: "green",
      onClick: this.handleImportOffer
    }, "Parse"))))));
  }

}

/***/ })

};;
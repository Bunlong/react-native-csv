import React from 'react';

const Feature = () => {
  return (
    <section style={{ paddingTop: 0 }}>
      <div className="grid-container">
        <div className="grid-100">
          <h3>Features</h3>
        </div>
      </div>
      <div id="ticker">
        <div className="ticker-item current">
          <p>Now the fastest CSV parser for React Native</p>
        </div>
        <div className="ticker-item">
          <p>The world's first multi-threaded CSV parser for React Native</p>
        </div>
        <div className="ticker-item">
          <p>
            react-native-csv can handle files gigabytes in size without crashing
          </p>
        </div>
        <div className="ticker-item">
          <p>
            Use react-native-csv when performance, privacy, and correctness
            matter to you
          </p>
        </div>
        <div className="ticker-item">
          <p>
            react-native-csv alleviates privacy concerns related to uploading
            files
          </p>
        </div>
        <div className="ticker-item">
          <p>
            Malformed CSV is handled gracefully with a detailed error report
          </p>
        </div>
      </div>
      <div className="grid-container">
        <div className="grid-33">
          <li>
            CSV&#8594;JSON and <a href="#unparse">JSON&#8594;CSV</a>
          </li>
          <li>
            Auto-detect <a href="#delimiter">delimiter</a>
          </li>
          <li>
            <a href="#local-files">Open local files</a>
          </li>
          <li>
            <a href="#remote-files">Download remote files</a>
          </li>
        </div>
        <div className="grid-33">
          <li>
            <a href="#stream">Stream</a> local and remote files
          </li>
          <li>
            <a href="#worker">Multi-threaded</a>
          </li>
          <li>
            <a href="#header">Header row</a> support
          </li>
          <li>
            <a href="#type-conversion">Type conversion</a>
          </li>
        </div>
        <div className="grid-33">
          <li>
            Skip <a href="#comments">commented lines</a>
          </li>
          <li>Fast mode</li>
          <li>
            Graceful <a href="#errors">error</a> handling
          </li>
          <li>Easy to use</li>
        </div>
        <div className="clear" />
        <br />
        <br />
        <div className="grid-100 text-center">
          <a
            href="https://github.com/Bunlong/react-native-csv"
            className="button"
          >
            <i className="fa fa-github" />
            &nbsp; GitHub
          </a>
          <a href="/docs" className="button gray">
            <i className="fa fa-book" />
            &nbsp; Documentation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Feature;

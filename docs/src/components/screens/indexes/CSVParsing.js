import React from 'react';

const CSVParsing = () => {
  return (
    <section id="parse">
      <div className="grid-container narrow-grid">
        <div className="grid-100">
          <h4>CSV Parsing</h4>
          <h5>
            "Isn't parsing CSV just <code>String.split(',')</code>?"
          </h5>
          <p>
            react-native-csv does it right. Just pass in the CSV string with an
            optional <a href="/docs#config">configuration</a>.
          </p>
          <pre>
            <code className="language-javascript">
              {`import { readString } from 'react-native-csv'

const results = readString(csvString, config)

/*
results = {
  data: [ ... ],    // parsed data
  errors: [ ... ],  // errors encountered
  meta: { ... }     // extra parse info
}
*/`}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default CSVParsing;

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const App = () => {
  const [markdown, setMarkdown] = useState('');

  const handleDownload = () => {
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'markdown.md';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container-fluid vh-100 d-flex flex-column">
      <div className="row bg-dark text-white py-3">
        <div className="col d-flex justify-content-between align-items-center">
          <h2 className="mb-0">Markdown Previewer</h2>
          <button
            className="btn btn-outline-light"
            onClick={handleDownload}
          >
            Download as .md
          </button>
        </div>
      </div>

      <div className="row flex-grow-1">
        <div className="col-md-6 p-0">
          <div className="d-flex flex-column h-100">
            <div className="bg-primary text-white p-3">
              <h5 className="mb-0">Markdown Editor</h5>
            </div>
            <textarea
              className="form-control flex-grow-1"
              style={{
                border: 'none',
                fontFamily: 'monospace',
                resize: 'none',
              }}
              placeholder="Write your markdown here..."
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
            />
          </div>
        </div>

        <div className="col-md-6 p-0">
          <div className="d-flex flex-column h-100">
            <div className="bg-success text-white p-3">
              <h5 className="mb-0">Live Preview</h5>
            </div>
            <div
              className="flex-grow-1 overflow-auto p-3"
              style={{
                backgroundColor: '#f8f9fa',
                fontFamily: 'monospace',
                whiteSpace: 'pre-wrap',
              }}
            >
              <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

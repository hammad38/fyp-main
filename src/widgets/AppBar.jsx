import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { hopscotch } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FiCopy } from "react-icons/fi";
import "../pages/CodeEditor.css";

const AppBarWidgets = () => {
  const [widgets, setWidgets] = useState([]);
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  useEffect(() => {
    fetch("https://nodejs-fyp-production.up.railway.app/approvedwidgets")
      .then((response) => response.json())
      .then((data) => {
        const appBarWidgets = data.filter(
          (widget) => widget.approved && widget.category === "appBar"
        );
        setWidgets(appBarWidgets);
      })
      .catch((error) => console.error("Error fetching widgets:", error));
  }, []);

  const handleCopy = (id) => {
    setCopied(true);
    setCopiedId(id);
    setTimeout(() => {
      setCopied(false);
      setCopiedId(null);
    }, 1500);
  };

  return (
    <div className="editor-container">
      {widgets.map((widget) => (
        <div key={widget._id} className="section">
          <div className="section-header">
            <h1 className="section-title">{widget.widgetName}</h1>
          </div>

          <div className="section-content">
            <div className="image-column">
              <img
                src={widget.Image}
                alt={widget.widgetName}
                className="image"
              />
            </div>
            <div className="code-column">
              <div className="relative">
                {copied && copiedId === widget._id && (
                  <div className="copied-notice">Copied!</div>
                )}
                <div className="code-header">
                  <span className="code-title">{widget.widgetName}</span>
                  <CopyToClipboard
                    text={widget.code}
                    onCopy={() => handleCopy(widget._id)}
                  >
                    <button className="copy-button">
                      <FiCopy />
                      <span>Copy Code</span>
                    </button>
                  </CopyToClipboard>
                </div>
                <div className="code-container">
                  <SyntaxHighlighter
                    language="dart"
                    style={{ ...hopscotch, fontSize: "10px", padding: "10px" }}
                    showLineNumbers
                    wrapLines
                  >
                    {widget.code}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppBarWidgets;

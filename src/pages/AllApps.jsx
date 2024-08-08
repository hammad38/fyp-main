import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FiCopy } from "react-icons/fi";

const ImageComponent = ({ src }) => {
  return (
    <div className="flex justify-center items-center h-full">
      <img src={src} alt="Widget Screenshot" className="rounded-md" />
    </div>
    
  );
};

const WidgetComponent = ({ widget }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const { widgetName, code, Image } = widget;

  return (
    <div className="flex flex-col items-center p-8 rounded-lg shadow-lg mb-8">
      <div className="mb-4 w-full">
        <span className="block mb-2">{widgetName}</span>
        <h1 className="text-2xl font-bold block">{widgetName} Component</h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between w-full">
        <div className="md:w-1/3">
          <ImageComponent src={Image} />
        </div>
        <div className="md:w-2/3 md:pl-4 mt-4 md:mt-0">
          <div className="relative">
            {copied && (
              <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-green-500 text-white px-2 py-1 rounded">
                Copied!
              </div>
            )}
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">{widgetName}</span>
              <CopyToClipboard text={code} onCopy={handleCopy}>
                <button className="flex items-center space-x-1 bg-black-300 px-2 py-1 rounded text-white hover:bg-gray-400 focus:outline-none">
                  <FiCopy />
                  <span>Copy Code</span>
                </button>
              </CopyToClipboard>
            </div>
            <div
              className="border-gray-600 rounded-lg"
              style={{ height: "500px", overflowY: "auto" }}
            >
              <SyntaxHighlighter
                language="dart"
                style={{ ...nord, fontSize: "14px", padding: "10px" }}
                showLineNumbers
                wrapLines
              >
                {code}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CodeEditor = () => {
  const [widgets, setWidgets] = useState([]);

  useEffect(() => {
    // Fetch data from your API
    fetch("https://special-telegram-595jqvjvjgqc4vj7-5000.app.github.dev/approvedwidgets")
      .then((response) => response.json())
      .then((data) => setWidgets(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (widgets.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {widgets.map((widget, index) => (
        <WidgetComponent key={index} widget={widget} />
      ))}
    </div>
  );
};

export default CodeEditor;

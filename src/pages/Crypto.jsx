import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { hopscotch } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FiCopy } from "react-icons/fi";
import { contentDataFood } from "../constants/content";

const ImageComponent = ({ src }) => (
  <div className="flex justify-center items-center h-full">
    <img src={src} alt="Placeholder Image" className="rounded-md" />
  </div>
);

const CodeEditor = () => {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (id) => {
    setCopied(true);
    setCopiedId(id);
    setTimeout(() => {
      setCopied(false);
      setCopiedId(null);
    }, 1500);
  };

  return (
    <>
      {contentDataFood.map((content) => (
        <div key={content.id} className="flex flex-col items-center p-8 rounded-lg shadow-lg">
          <div className="mb-4 w-full">
            <span className="block mb-2">{content.title}</span>
            <h1 className="text-2xl font-bold block">{content.title}</h1>
          </div>

          <div className="flex flex-col md:flex-row justify-between w-full">
            <div className="md:w-1/3">
              <ImageComponent src={content.image} />
            </div>
            <div className="md:w-2/3 md:pl-4 mt-4 md:mt-0">
              <div className="relative">
                {copied && copiedId === content.id && (
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-green-500 text-white px-2 py-1 rounded">
                    Copied!
                  </div>
                )}
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">{content.title}</span>
                  <CopyToClipboard text={content.code} onCopy={() => handleCopy(content.id)}>
                    <button className="flex items-center space-x-1 bg-black-300 px-2 py-1 rounded text-white hover:bg-gray-400 focus:outline-none">
                      <FiCopy />
                      <span>Copy Code</span>
                    </button>
                  </CopyToClipboard>
                </div>
                <div className="border-gray-600 rounded-lg" style={{ height: "500px", overflowY: "auto" }}>
                  <SyntaxHighlighter
                    language="dart"
                    style={{ ...hopscotch, fontSize: "14px", padding: "10px" }}
                    showLineNumbers
                    wrapLines
                  >
                    {content.code}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CodeEditor;

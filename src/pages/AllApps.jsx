import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FiCopy } from "react-icons/fi";
import appbar from "../assets/screenshots/appbar1.png";

const ImageComponent = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <img
        src={appbar}
        alt="Placeholder Image"
        className="rounded-md"
      />
    </div>
  );
};

const CodeEditor = () => {
  const [copied, setCopied] = useState(false);

  const code = `
   import 'package:flutter/material.dart';

class AppBar1 extends StatelessWidget {
  final Size preferredSize;

  const AppBar1({Key? key})
      : preferredSize = const Size.fromHeight(56.0),
        super(key: key);
  @override
  Widget build(BuildContext context) {
    return AppBar(
      centerTitle: true,
      title: const Text(
        "Widget Worlds",
        style: TextStyle(
          color: Colors.white,
        ),
      ),
      backgroundColor: const Color(0xff4338CA),
      actions: [
        IconButton(
          icon: const Icon(
            Icons.share,
            color: Color(0xffffffff),
          ),
          onPressed: () {},
        )
      ],
      leading: IconButton(
        icon: const Icon(
          Icons.keyboard_arrow_left,
          color: Color(0xffffffff),
        ),
        onPressed: () {
          
        },
      ),
    );
  }
}
  `.trim();

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex flex-col items-center p-8 rounded-lg shadow-lg">
      <div className="mb-4 w-full">
        <span className="block mb-2">Appbar</span>
        <h1 className="text-2xl font-bold block">Appbar Compnent</h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between w-full">
        <div className="md:w-1/3">
          <ImageComponent />
        </div>
        <div className="md:w-2/3 md:pl-4 mt-4 md:mt-0">
          <div className="relative">
            {copied && (
              <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-green-500 text-white px-2 py-1 rounded">
                Copied!
              </div>
            )}
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Appbar Compnent</span>
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

export default CodeEditor;

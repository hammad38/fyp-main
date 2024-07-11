import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { hopscotch } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FiCopy } from "react-icons/fi";
import card10 from '../assets/screenshots/card10.png';
const ImageComponent = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <img
        src={card10}
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

class Card1 extends StatelessWidget {
  final String text;
  final String imageUrl;
  final String subtitle;
  final Function() onPressed;

  const Card1(
      {required this.text,
      required this.imageUrl,
      required this.subtitle,
      required this.onPressed,
      Key? key})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onPressed,
      child: Container(
        width: MediaQuery.of(context).size.width,
        height: 75,
        padding: const EdgeInsets.all(15.0),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(12.5),
          boxShadow: [
            BoxShadow(
              offset: const Offset(10, 20),
              blurRadius: 10,
              spreadRadius: 0,
              color: Colors.grey.withOpacity(
                .05,
              ),
            ),
          ],
        ),
        child: Row(
          children: [
            ClipOval(
              child: Image.network(
                imageUrl,
                height: 60,
                width: 60,
                fit: BoxFit.cover,
              ),
            ),
            const SizedBox(width: 15),
            Text(
              text,
              textAlign: TextAlign.center,
              style: const TextStyle(
                color: Colors.black,
                fontWeight: FontWeight.bold,
                fontSize: 18,
              ),
            ),
            const Spacer(),
            Text(
              subtitle,
              textAlign: TextAlign.center,
              style: const TextStyle(
                color: Colors.grey,
                fontWeight: FontWeight.normal,
                fontSize: 12,
              ),
            ),
          ],
        ),
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
        <span className="block mb-2">Button</span>
        <h1 className="text-2xl font-bold block">Like fdfsButton Thumbs Up</h1>
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
              <span className="text-gray-600">Like dfdsButton Thumbs Up</span>
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
                style={{ ...hopscotch, fontSize: "14px", padding: "10px" }}
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

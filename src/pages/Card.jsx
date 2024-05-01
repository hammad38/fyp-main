import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { hopscotch } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FiCopy } from "react-icons/fi";

const ImageComponent = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/flutterbricks-1926c.appspot.com/o/images%2Fwidgets%2F1637583507300%2Flikebuttonpic.png?alt=media&token=cfffa4e0-907c-4835-a66d-9f6d0e99cfdc"
        alt="Placeholder Image"
        className="rounded-md"
      />
    </div>
  );
};

const CodeEditor = () => {
  const [copied, setCopied] = useState(false);

  const code = `
    class ThumbsUpButton extends StatefulWidget {
      const ThumbsUpButton(
          {Key? key, required this.onPressed, this.color = Colors.black})
          : super(key: key);
      final Function onPressed;
      final Color color;
      @override
      _ThumbsUpButtonState createState() => _ThumbsUpButtonState();
    }
    
    class _ThumbsUpButtonState extends State<ThumbsUpButton> {
      bool isLiked = false;
    
      @override
      Widget build(BuildContext context) {
        return Container(
            child: IconButton(
          icon: Icon(isLiked ? Icons.thumb_up_alt : Icons.thumb_up_alt_outlined,
              color: widget.color),
          onPressed: () {
            setState(() {
              isLiked = !isLiked;
            });
            widget.onPressed();
          },
        ));
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
        <h1 className="text-2xl font-bold block">Like Button Thumbs Up</h1>
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
              <span className="text-gray-600">Like Button Thumbs Up</span>
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

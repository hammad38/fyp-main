import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { hopscotch } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FiCopy } from "react-icons/fi";
import home from "../assets/ui-images/home.png";

const ImageComponent = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <img
        src={home}
        alt="Placeholder Image"
        className="rounded-md"
      />
    </div>
  );
};

const CodeEditor = () => {
  const [copied, setCopied] = useState(false);

  const code = `
  class _DetailScreenState extends State<DetailScreen> {
  @override
  Widget build(BuildContext context) {
    double height = MediaQuery.of(context).size.height;
    double width = MediaQuery.of(context).size.width;
    return Scaffold(
      body: SafeArea(
        child: Container(
          height: height,
          width: width,
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: [
                Color(0xff2f3949),
                Color(0xff131923),
              ],
            ),
          ),
          child: Padding(
            padding: const EdgeInsets.all(10),
            child: Column(
              children: [
                Stack(
                  children: [
                    Hero(
                      tag: "image",
                      child: Image(
                        image: AssetImage(widget.image),
                      ),
                    ),
                    InkWell(
                      onTap: () {
                        Navigator.pop(context);
                      },
                      child: const Icon(
                        Icons.navigate_before,
                        color: Colors.white,
                        size: 45,
                      ),
                    ),
                  ],
                ),
                const Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    TextWidget(title: "4", subTitle: "SERVES"),
                    TextWidget(title: "1h", subTitle: "COOKS IN"),
                  ],
                ),
                const SizedBox(height: 20),
                Column(
                  children: [
                    Text(
                      widget.text,
                      style:
                          Theme.of(context).textTheme.headlineLarge!.copyWith(
                                color: const Color(0xfffbfbfe),
                                fontWeight: FontWeight.bold,
                              ),
                    ),
                    const SizedBox(height: 13.333),
                    Text(
                      'A super-fresh and zingy salad packed with green veg and gnarly, sticky-sweet chicken, topped with crispy shallots. Delicious!',
                      textAlign: TextAlign.justify,
                      maxLines: 3,
                      style: Theme.of(context).textTheme.titleLarge!.copyWith(
                            color: const Color(0xff464e5c),
                            height: 1.2,
                          ),
                    ),
                  ],
                ),
                const SizedBox(height: 30),
                const Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    BottomAnimation(
                      title: "CAL",
                      startAngle: 150,
                      valueNotifier: 300,
                    ),
                    BottomAnimation(
                      title: "FAT",
                      startAngle: 260,
                      valueNotifier: 140,
                    ),
                    BottomAnimation(
                      title: "CAR",
                      startAngle: 120,
                      valueNotifier: 340,
                    ),
                  ],
                ),
                const Spacer(),
             
  `.trim();

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex flex-col items-center p-8 rounded-lg shadow-lg">
      <div className="mb-4 w-full">
        <span className="block mb-2">Healthy Food</span>
        <h1 className="text-2xl font-bold block">Food UI</h1>
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
              <span className="text-gray-600">Food UI</span>
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

import React, { useState, useContext } from "react";
import { ParseContext } from "../context/ParseContext";
import { fixMapping } from "../utils/FixMapping";

const InputSection = () => {
  const [fixText, setFixText] = useState("");
  const { setParsedData } = useContext(ParseContext);

  const handleProcess = () => {
    const regex = /<(\d+):([^>]+)>/g;
    const matches = [...fixText.matchAll(regex)];
    const data = matches.map(match => ({
      tag: match[1],
      value: match[2],
      tagDescription: fixMapping[match[1]] || "Unknown",
      valueDescription: "-"
    }));
    setParsedData(data);
  };

  const handleClear = () => {
    setFixText("");
    setParsedData([]);
  };

  const handleSampleData = () => {
    setFixText(
      "<8:FIXT.1.1><35:0><1128:8><49:LAN><56:TEST><34:3><50:LANTRDR075><57:12345><43:N><97:N><52:20250224-00:41:06.000>"
    );
  };

  return (
    <div className="bg-neutral-800 p-4 rounded-sm shadow-md mx-20 mt-5">
      <p className="text-white mb-2 text-sm">Paste EF FIX text below</p>
      <textarea
        className="w-full h-24 p-2 rounded-sm bg-gray-900 text-white border border-green-300 outline-0 text-xs"
        value={fixText}
        onChange={(e) => setFixText(e.target.value)}
        placeholder="Enter EF FIX message..."
      />
      <div className="flex space-x-2 mt-3">
        <button
          onClick={handleProcess}
          className="bg-neutral-700 border-2 border-green-500 hover:border-green-600 p-1 rounded text-white text-sm transition-all duration-150"
        >
          Process
        </button>
        <button
          onClick={handleClear}
          className="bg-neutral-700 border-2 border-red-500 hover:border-red-700 p-1 rounded text-white text-sm transition-all duration-150"
        >
          Clear
        </button>
        <button
          onClick={handleSampleData}
          className="bg-neutral-700 border-2 border-blue-500 hover:border-blue-600 p-1 rounded text-white text-sm transition-all duration-150"
        >
          Sample data
        </button>
      </div>
    </div>
  );
};

export default InputSection;

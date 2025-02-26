import React, { useContext } from "react";
import { ParseContext } from "../context/ParseContext";

const ParseSection = () => {
  const { parsedData } = useContext(ParseContext);

  //similar data
  const messageInfo = {
    time: parsedData.find((data) => data.tag === "52")?.value || "N/A",
    sender: parsedData.find((data) => data.tag === "49")?.value || "N/A",
    target: parsedData.find((data) => data.tag === "56")?.value || "N/A",
    message: parsedData.find((data) => data.tag === "35")?.value || "N/A",
    ClOrdID: parsedData.find((data) => data.tag === "11")?.value || "N/A",
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-60 mt-5">
      {/* Left Table */}
      <div className="bg-gray-900 border border-gray-700 p-5 rounded-md shadow-md">
        <p className="mb-3 text-lg text-green-300 font-semibold">
          Message Info
        </p>
        <table className="min-w-full bg-gray-800 text-white text-xs rounded-md">
          <thead>
            <tr className="bg-gray-700 text-gray-300">
              <th className="py-2 px-4 border-b border-gray-600 text-left">
                Time
              </th>
              <th className="py-2 px-4 border-b border-gray-600 text-left">
                Sender
              </th>
              <th className="py-2 px-4 border-b border-gray-600 text-left">
                Target
              </th>
              <th className="py-2 px-4 border-b border-gray-600 text-left">
                Message
              </th>
              <th className="py-2 px-4 border-b border-gray-600 text-left">
                ClientOrderID
              </th>
              <th className="py-2 px-4 border-b border-gray-600 text-left">
                Detail
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-600">
              <td className="py-2 px-4">{messageInfo.time}</td>
              <td className="py-2 px-4">{messageInfo.sender}</td>
              <td className="py-2 px-4">{messageInfo.target}</td>
              <td className="py-2 px-4">{messageInfo.message}</td>
              <td className="py-2 px-4">{messageInfo.ClOrdID}</td>
              <td className="py-2 px-4">{messageInfo.detail}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Right Table */}
      <div className="bg-gray-900 border border-gray-700 p-5 rounded-md shadow-md">
        <p className="mb-3 text-lg text-green-300 font-semibold">Parsed data</p>
        <table className="min-w-full bg-gray-800 text-white text-xs rounded-md">
          <thead>
            <tr className="bg-gray-700 text-gray-300">
              <th className="py-2 px-4 border-b border-gray-600 text-left">
                Tag
              </th>
              <th className="py-2 px-4 border-b border-gray-600 text-left">
                Tag Description
              </th>
              <th className="py-2 px-4 border-b border-gray-600 text-left">
                Value
              </th>
              <th className="py-2 px-4 border-b border-gray-600 text-left">
                Value Description
              </th>
            </tr>
          </thead>
          <tbody>
            {parsedData.map((data, index) => (
              <tr key={index} className="border-b border-gray-600">
                <td className="py-2 px-4">{data.tag}</td>
                <td className="py-2 px-4">{data.tagDescription}</td>
                <td className="py-2 px-4">{data.value}</td>
                <td className="py-2 px-4">{data.valueDescription}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ParseSection;

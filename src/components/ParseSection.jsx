import React, { useContext } from "react";
import { ParseContext } from "../context/ParseContext";
import { fixMapping } from "../utils/FixMapping";
import { valueMapping } from "../utils/ValueDescMapping";

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

  function processTime(time) {
    const timeStr = time.slice(9); // "00:40:36.902"

    if (!timeStr.includes(":")) {
      return "N/A";
    }

    let [hours, minutes, seconds = "00.000"] = timeStr.split(":");
    let [sec, milliseconds = "000"] = seconds.split(".");

    hours = parseInt(hours, 10);

    const period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert 0 to 12 for AM

    const formattedTime = `${hours}:${minutes}:${sec}.${milliseconds} ${period}`;

    return formattedTime;
  }

  function processDate(time) {
    const date = time.slice(0, 8); // "20250224"
    if (date.length !== 8) {
      return "N/A";
    }
    //just use hiphen to separate the date
    const formattedDate = `${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(
      6
    )}`;
    return formattedDate;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-60 mt-5 mb-5">
      {/* Left Table */}
      <div className="bg-gray-900 border border-gray-700 p-5 rounded-md shadow-md">
        <p className="mb-3 text-lg text-green-300 font-semibold">
          Message Info
        </p>
        <table className="min-w-full bg-gray-800 text-white text-xs rounded-md">
          <thead>
            <tr className="bg-gray-700 text-gray-300">
              <th className="py-2 px-4 border-b border-gray-600 text-left">
                Sending Date
              </th>
              <th className="py-2 px-4 border-b border-gray-600 text-left">
                Sending Time
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
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-600">
              <td className="py-2 px-4">{processDate(messageInfo.time)}</td>
              <td className="py-2 px-4">{processTime(messageInfo.time)}</td>
              <td className="py-2 px-4">{messageInfo.sender}</td>
              <td className="py-2 px-4">{messageInfo.target}</td>
              <td className="py-2 px-4">{messageInfo.message}</td>
              <td className="py-2 px-4">{messageInfo.ClOrdID}</td>
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
                <td className="py-2 px-4">{fixMapping[data.tag] || "N/A"}</td>
                <td className="py-2 px-4">{data.value}</td>
                <td className="py-2 px-4">{valueMapping[data.value] || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ParseSection;

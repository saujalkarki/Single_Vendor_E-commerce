import { useState } from "react";

export function SectionOne({ imgData, h1Data, pData }) {
  const [selected, setSelected] = useState(false);

  function mouseEnter() {
    setSelected(true);
  }

  function mouseLeave() {
    setSelected(false);
  }

  return (
    <>
      <div
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        className={` ${
          selected ? "bg-red-500" : ""
        } border-[1px] border-gray-300 rounded-md flex flex-col gap-2 items-center p-3 cursor-default`}
      >
        <div className=" flex flex-col items-center w-22">
          <div
            className={` ${
              selected ? "bg-gray-200" : ""
            } rounded-full bg-gray-400`}
          >
            <div
              className={` ${
                selected ? " bg-white border-white" : ""
              } border-2 border-black bg-black m-3 rounded-full`}
            >
              <img
                src={imgData}
                alt="section image"
                className={`w-6 m-3`}
                style={{ filter: selected ? "invert(0)" : "invert(1)" }}
              />
            </div>
          </div>
        </div>
        <h1
          className={`${selected ? "text-white" : ""} text-3xl font-semibold`}
        >
          {h1Data}
        </h1>
        <p
          className={`${selected ? "text-white" : ""} font-medium text-center`}
        >
          {pData}
        </p>
      </div>
    </>
  );
}

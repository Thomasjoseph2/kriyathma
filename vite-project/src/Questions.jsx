import { useState } from "react";
import { CgAdd } from "react-icons/cg";
import { FaMinusCircle } from "react-icons/fa";
import ConnectBussiness from "./ConnectBussiness";
import { VscSparkleFilled } from "react-icons/vsc";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FiCornerDownRight } from "react-icons/fi";

const Questions = () => {
  const [isFirstExpanded, setIsFirstExpanded] = useState(false);
  const [isSecondExpanded, setIsSecondExpanded] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleToggle = (index) => {
    if (index === 1) {
      setIsFirstExpanded(!isFirstExpanded);
      setIsSecondExpanded(false);
    } else {
      setIsSecondExpanded(!isSecondExpanded);
      setIsFirstExpanded(false);
    }
  };

  return (
    <div className="mt-2">
      <div className="flex justify-between ">
        <div className="text-[13px] text-gray-500 font-semibold">
          Question 1 out of 3
        </div>
        <button
          className="text-xl"
          onClick={() => {
            setExpanded((prev) => !prev);
          }}
        >
          {expanded ? (
            <FaMinus className="text-gray-400" />
          ) : (
            <FaPlus className="text-gray-400" />
          )}
        </button>
      </div>
      <h2 className="text-xl font-semibold">
        What are the primary components of variable & semi-variable costs
        impacting gross margins?
      </h2>
      <div
        className={`${expanded ? "mt-5 flex gap-2 font-semibold" : "hidden"}`}
      >
        <div
          key="firstDiv"
          className={`flex  justify-center text-blue-800 rounded-sm bg-blue-100 transition-all duration-300 
            ${
              isFirstExpanded
                ? "w-full h-96 p-3 items-start"
                : "w-[310px] h-[40px] items-center"
            } ${isSecondExpanded && "hidden"}`}
        >
          <div className="flex justify-between  w-full p-3 ">
            <div className="text-[11px]  font flex flex-col">
              <p className="flex  items-center">
                <FiCornerDownRight className="mr-1" />
                Need more clarification on the section?
              </p>
              {isFirstExpanded && <ConnectBussiness />}
            </div>
            {!isFirstExpanded ? (
              <CgAdd
                onClick={() => handleToggle(1)}
                className="text-[12px] ml-2"
              />
            ) : (
              <FaMinusCircle
                onClick={() => handleToggle(1)}
                className="text-[12px] ml-2"
              />
            )}
          </div>
        </div>

        <div
          key="secondDiv"
          className={`flex  justify-center text-blue-800 rounded-sm bg-blue-100 transition-all duration-300 cursor-pointer
            ${
              isSecondExpanded
                ? "w-full h-96 items-start "
                : "w-[310px] h-[40px] items-center"
            } ${isFirstExpanded && "hidden"}`}
        >
          <div className="flex justify-between  w-full p-3">
            <div className="text-[11px] font flex flex-col">
              <p className="flex items-center">
                <VscSparkleFilled className="mr-1" />
                Need more clarification on the section?
              </p>

              {isSecondExpanded && <ConnectBussiness />}
            </div>
            <div className="">
              {!isSecondExpanded ? (
                <CgAdd
                  onClick={() => handleToggle(2)}
                  className="text-[12px] ml-2"
                />
              ) : (
                <FaMinusCircle
                  onClick={() => handleToggle(2)}
                  className="text-[12px] ml-2  "
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;

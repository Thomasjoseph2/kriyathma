import { useState } from "react";
import { BiSolidBinoculars } from "react-icons/bi";
import { GoArrowSwitch } from "react-icons/go";
import ConnectBussinessContent from "./ConnectBussinessContent";
import { IoMdRefresh } from "react-icons/io";

const ConnectBussiness = () => {
  const [widthIcon, setWidthIcon] = useState(false);
  const [expand, setExpand] = useState(false);

  return (
    <div
      onMouseOver={() => setWidthIcon(true)}
      onMouseLeave={() => {
        setWidthIcon(false);
      }}
      className={`flex flex-col  bg-white  p-3 rounded-md mt-3 `}
    >
      <div
        className={`text-black text-[12px] font-normal flex  items-center justify-center ${
          expand
            ? "w-full h-30 items-start justify-between"
            : "items-center justify-center"
        }`}
      >
        <span className="flex">
          <span className="p-1 bg-red-300 rounded-full mr-3">
            <BiSolidBinoculars />
          </span>
          How do I connect this to my business context?
        </span>
        {expand && <IoMdRefresh className=""/>}
        {widthIcon && (
          <GoArrowSwitch
            onClick={() => {
              setExpand(prev=>!prev);
            }}
            className="text-lg text-gray-400 ml-1"
          />
        )}
      </div>
      {expand && <ConnectBussinessContent />}
    </div>
  );
};

export default ConnectBussiness;

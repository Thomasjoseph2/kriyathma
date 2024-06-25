import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import { FaArrowCircleDown } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const ConnectBussinessContent = () => {
  const [expand1, setExpand1] = useState(false);
  const [expand2, setExpand2] = useState(false);

  return (
    <div className="flex flex-row gap-3 mt-5">
      <div
        className={`flex flex-col  bg-blue-100  rounded-lg  text-black p-2 ${
          !expand1 ? "h-12" : "h-auto"
        }`}
      >
        <div className="flex justify-between ">
          <div className="flex flex-row items-center ">
            <IoMenuOutline />
            <p className="text-gray-500">
              Add raw materials costs as variable costs
            </p>
          </div>
          <IoChevronDown
            onClick={() => {
              setExpand1((prev) => !prev);
            }}
          />
        </div>

        {expand1 ? (
          <div className="">
            <p className="text-[12px] text-blue-900">
              Energy and Utility costs are Lorem ipsum dolor sit amet...
            </p>
            <div className="flex flex-row gap-2 mt-2">
              <button className="bg-blue-600 rounded-full px-1 flex  items-center">
                ACCEPT{" "}
                <span className="ml-1">
                  <FaArrowCircleDown />
                </span>
              </button>
              <button className="bg-gray-200 rounded-full px-1 py-1 flex  items-center">
                DISMISS{" "}
                <span>
                  <RxCross2 className="ml-1" />
                </span>
              </button>
              <button className="  px-1 py-1 flex  items-center">
                <BiDotsHorizontalRounded />
              </button>
            </div>
          </div>
        ) : (
          <div>Energy and Utility costs are Lorem ipsum dolor sit amet...</div>
        )}
      </div>
      <div
        className={`flex flex-col  bg-blue-100  rounded-lg  text-black p-2 ${
          !expand2 ? "h-12" : "h-auto"
        }`}
      >
        <div className="flex justify-between ">
          <div className="flex flex-row items-center ">
            <IoMenuOutline />
            <p className="text-gray-500">
              Add raw materials costs as variable costs
            </p>
          </div>
          <IoChevronDown
            onClick={() => {
              setExpand2((prev) => !prev);
            }}
          />
        </div>
        {expand2 ? (
          <div className="">
            <p className="text-[12px] text-blue-900">
              Energy and Utility costs are Lorem ipsum dolor sit amet...
            </p>
            <div className="flex flex-row gap-2 mt-2">
              <button className="bg-blue-600 rounded-full px-1 flex  items-center">
                ACCEPT{" "}
                <span className="ml-1">
                  <FaArrowCircleDown />
                </span>
              </button>
              <button className="bg-gray-200 rounded-full px-1 py-1 flex  items-center">
                DISMISS{" "}
                <span>
                  <RxCross2 className="ml-1" />
                </span>
              </button>
              <button className="  px-1 py-1 flex  items-center">
                <BiDotsHorizontalRounded />
              </button>
            </div>
          </div>
        ) : (
          <div>Energy and Utility costs are Lorem ipsum dolor sit amet...</div>
        )}{" "}
      </div>
    </div>
  );
};

export default ConnectBussinessContent;

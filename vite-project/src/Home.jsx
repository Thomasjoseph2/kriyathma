import { useState } from "react";
import Questions from "./Questions";
import { FaChevronRight } from "react-icons/fa";
import { GoChevronUp } from "react-icons/go";
import { FaChevronCircleDown } from "react-icons/fa";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [view, setView] = useState(false);
  return (
    <div className="flex flex-row h-screen overflow-hidden ">
      <div className="w-[30%] bg-orange-400">left</div>
      <div className="w-[80%] bg-gray-100 flex flex-col ">
        {!isVisible ? (
          <div className="bg-white w-auto mx-16 mt-6 items-center justify-center rounded-lg">
            <div className="flex justify-between m-5">
              <div className="text-xs font-bold">STEP 1/3</div>
              <div className="text-xs font-bold">4 prompts | 5 mins</div>
            </div>
            <div className="m-5 flex flex-row justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold">Cost Identification</h1>
                <p>
                  Identify and categorize the various costs influencing margins.
                </p>
              </div>
              <div className="">
                <button
                  onClick={() => {
                    setIsVisible(true);
                  }}
                  className="bg-gray-200 h-16 w-32 rounded-lg flex items-center justify-center text-blue-800"
                >
                  Get Started
                  <FaChevronRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white w-auto mx-16 mt-6 p-5 rounded-lg min-h-[11rem] h-auto flex flex-col">
            <div className=" flex justify-between ">
              <div className="text-md font-semibold">Step 1</div>
              <button
                onClick={() => {
                  setIsVisible(false);
                }}
                className="text-lg font-bold bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center "
              >
                <GoChevronUp />
              </button>
            </div>
            <div className=" flex flex-row justify-between items-center">
              <div className="w-full">
                <h1 className="text-xl font-bold">Cost Identification</h1>
                <p className="text-sm/[14px] mt-2 ">
                  Identify and categorize the various costs influencing margins.{!view&& <span>...</span>}
                  {!view ? (
                    <button
                      onClick={() => {
                        setView(true);
                      }}
                      className="text-blue-800  "
                    >
                     <span className="flex justify-center items-center">
                      View more
                        <FaChevronCircleDown className="text-blue-700 ml-1" />
                      </span>
                    </button>
                  ) : (
                    <span>
                      Costs are usually categorized as variable costs (which
                      increase directly with an increase in sales or revenue –
                      for example raw material costs for production),
                      semi-variable costs (which increase with sales too, but
                      not as linearly. For example – manpower costs for some
                      services heavy business) and fixed costs (which are not
                      linked to the volume of products/sales/revenue directly.
                      For example – headquarter administration costs).{" "}
                    </span>
                  )}
                </p>
                <hr className="mt-3 w-[100%] bg-gray-800" />
                <Questions />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

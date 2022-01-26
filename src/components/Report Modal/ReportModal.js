import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleReport, toggleSR } from "../../redux/sharereport";
const ReportModal = () => {
  const dispatch = useDispatch();

  const [initState, setIniState] = useState(false);

  const handleDone = () => {
    setIniState(true);
  };

  const handleBack = () => {
    //   dispatch(toggleSR(false))
    dispatch(toggleReport(""));
  };

  const handleFinalDone = () => {
    dispatch(toggleReport(""));
    dispatch(toggleSR(false));
  };
  return (
    <div className="fixed w-screen h-screen  flex justify-evenly items-center">
      <div className="w-2/3  md:w-3/12 py-5 rounded-2xl bg-lpSr">
        <p className="text-center text-white    mb-1 font-semibold text-2xl">
          Report Content
        </p>
        {!initState ? (
          <>
            <div className="flex flex-col px-10 ">
              <div
                onClick={handleDone}
                className="rounded-full border-lpNc border-2 p-3 text-center text-white mb-3 cursor-pointer bg-lpNc"
              >
                Not a Law Content
              </div>
              <div
                onClick={handleDone}
                className="rounded-full border-lpCa border-2 p-3 text-center text-white mt-3 cursor-pointer bg-lpCa"
              >
                Contain Abusive Words
              </div>
            </div>
            <div className="flex justify-evenly mt-4">
              <span
                onClick={handleBack}
                className="text-center text-white text-md mb-1 cursor-pointer border-2 py-1 px-5 rounded-2xl"
              >
                Back
              </span>
              {/* <span className="text-center text-white text-md mb-1 cursor-pointer border-2 py-1 px-5 rounded-2xl">
                Done
              </span> */}
            </div>
          </>
        ) : (
          <div>
            <p className="px-6 text-white mt-4">
              Thank you for alertng us we will review this post as soon as
              possible.
            </p>
            <div className="flex justify-center mt-10">
              <span
                onClick={handleFinalDone}
                className="text-center text-white text-md mb-1 cursor-pointer border-2 py-1 px-5 rounded-2xl"
              >
                Done
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportModal;

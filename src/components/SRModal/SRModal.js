import React from "react";
import fb from "../../assets/images/fb.png";
import twitter from "../../assets/images/twitter.png";
import mail from "../../assets/images/mail.png";
import { useDispatch } from "react-redux";
import { toggleReport, toggleSR } from "../../redux/sharereport";
const SRModal = () => {
  const dispatch = useDispatch();

  const handleDone = () => {
    dispatch(toggleSR());
  };

  const handleReport = () => {
    dispatch(toggleReport("report"));
  };
  return (
    <div className="fixed w-screen h-screen  flex justify-evenly items-center">
      <div className="w-2/3  md:w-3/12 py-5 rounded-2xl bg-lpSr">
        <p className="text-center text-white   text-lg mb-1">Share</p>
        <div className="flex justify-center">
          <img
            alt="facebook share icon"
            className="cursor-pointer"
            src={fb}
            style={{ width: "50px", height: "50px" }}
          />
          <img
            alt="mail share icon"
            className="cursor-pointer"
            src={mail}
            style={{ width: "50px", height: "50px", margin: "0px 10px" }}
          />
          <img
            alt="twitter share icon"
            className="cursor-pointer"
            src={twitter}
            style={{ width: "50px", height: "50px" }}
          />
        </div>
        <p
          onClick={handleReport}
          className="text-center text-white py-5  text-md mb-1 cursor-pointer"
        >
          Report Content
        </p>
        <div className="flex justify-center">
          <span
            onClick={handleDone}
            className="text-center text-white text-md mb-1 cursor-pointer border-2 py-1 px-5 rounded-2xl"
          >
            Done
          </span>
        </div>
      </div>
    </div>
  );
};

export default SRModal;

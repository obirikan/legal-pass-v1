import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggle } from "../../redux/quick";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const QuickView = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();

  const handleHome = () => {
    navigate("/");
  };

  const handleClick = () => {
    dispatch(toggle());
  };
  return (
    <div
      onClick={handleClick}
      style={{
        zIndex: "200",
        flexDirection: width <= 640 ? "column" : "row",
        justifyContent: width <= 640 ? "center" : "space-evenly",
      }}
      className="fixed w-screen h-screen bg-lpOv px-4  flex items-center "
    >
      <div
        onClick={handleHome}
        className="text-white text-2xl md:w-1/6 w-64 text-center  py-3 border-white border-4 rounded-lgB cursor-pointer hover:border-lpBlue hover:text-lpBlue"
      >
        Home
      </div>
      <div
        style={{
          marginTop: width <= 640 ? "20px" : "0",
          marginBottom: width <= 640 ? "20px" : "0",
        }}
        className="text-white text-2xl md:w-1/6 w-64 text-center mx-2 py-3 border-white border-4 rounded-lgB cursor-pointer hover:border-lpBlue hover:text-lpBlue"
      >
        Chambers
      </div>
      <div className="text-white text-2xl md:w-1/6 w-64 text-center py-3 border-white border-4 rounded-lgB cursor-pointer hover:border-lpBlue hover:text-lpBlue">
        Log Out
      </div>
    </div>
  );
};

export default QuickView;

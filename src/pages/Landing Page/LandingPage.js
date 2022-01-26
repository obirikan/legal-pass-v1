import React from "react";
import hero from "../../assets/images/hero.jpg";
import { useNavigate } from "react-router-dom";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import SignUp from "../../components/Modals/SignUp";
import SignIn from "../../components/Modals/SignIn";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../redux/modal";
import Chambers from "../Chambers/Chambers";
const LandingPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { activeModal } = useSelector((state) => state.modal);

  const { width } = useWindowDimensions();

  const handleChClick = () => {
    navigate("/lcommons");
  };

  const handleSignUp = () => {
    dispatch(toggleModal("signup"));
  };

  const handleSignIn = () => {
    dispatch(toggleModal("signin"));
  };

  const handleCommons = () => {
    navigate("/chambers");
  };
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${hero})`,
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="w-screen h-screen"
      >
        {activeModal === "signup" && <SignUp />}
        {activeModal === "signin" && <SignIn />}
        <div className="top-4 absolute flex flex-row w-full justify-between px-5">
          <div className="flex flex-row justify-between items-center">
            <p className="text-black font-bold text-center text-xl pr-2 cursor-pointer">
              Legal Pass
            </p>
            <p
              style={{
                display: width <= 600 ? "none" : "initial",
              }}
              className="text-white bg-black shadow-sm rounded-full py-2 px-6 text-center  text-xl font-bold cursor-pointer"
            >
              Home
            </p>
          </div>
          <div className="flex flex-row justify-between items-center w-auto">
            <p onClick={handleSignUp} className="cursor-pointer hov">
              Sign Up
            </p>
            <p className="px-2 font-bold">{" "}</p>
            <p onClick={handleSignIn} className="cursor-pointer hov">
              Sign In
            </p>
          </div>
        </div>
        <div
          style={{
            width: width <= 860 ? "100%" : "66.66%",
            flexDirection: width <= 860 ? "column" : "row",
            // justifyContent: width <= 500 ? "center" : "none",
            // align
          }}
          className="flex  justify-evenly w-2/3 items-center"
        >
          <p
            style={{
              width: width <= 860 ? "80%" : "33.3333%",
              marginBottom: width <= 860 ? "30px" : "0",
            }}
            onClick={handleChClick}
            className="text-black bg-white shadow-sm rounded-full py-4 text-center  text-xl font-bold w-2/6 cursor-pointer"
          >
            Learning Commons
          </p>
          <a
            href="#chambers"
            // onClick={handleCommons}
            style={{
              width: width <= 860 ? "80%" : "33.3333%",
            }}
            className="text-black bg-white shadow-sm rounded-full py-4 text-center text-xl font-bold w-2/6 cursor-pointer"
          >
            Chambers
          </a>
        </div>
      </div>
      <div id="chambers">
        <Chambers />
      </div>
    </div>
  );
};

export default LandingPage;

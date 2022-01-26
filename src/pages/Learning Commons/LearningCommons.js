import React, { useState, useEffect } from "react";
import DashboardWrapper from "../../components/Dashboard Wrapper/DashboardWrapper";
import profile from "../../assets/images/profile.jpg";
import { GoPrimitiveDot } from "react-icons/go";
import { ReactComponent as Contribute } from "../../assets/svgs/contribute1.svg";
import { ReactComponent as Pin } from "../../assets/svgs/pin1.svg";
import { ReactComponent as Relate } from "../../assets/svgs/Relate1.svg";
import { useDispatch } from "react-redux";
import { toggleSR } from "../../redux/sharereport";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import pins from "../../dummyEngine/pins";
import relates from "../../dummyEngine/relates";
import contributes from "../../dummyEngine/contributes";
const LearningCommons = () => {
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();
  const [list, setList] = useState([
    {
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi vero temporibus nisi sequi quasi voluptas dignissimos veniam earum ",
    },
  ]);

  const handleContribute = () => {
    setList(contributes);
  };

  const handlePin = () => {
    setList(pins);
  };

  const handleRelate = () => {
    setList(relates);
  };

  const handleSR = () => {
    dispatch(toggleSR(true));
  };

  var contTarget1 = document.querySelector(".cont-1");
  var contTarget3 = document.querySelectorAll(".cont-3");
  var contMainTarget = document.querySelector(".contribute");

  var pinTarget1 = document.querySelector(".pin-1");
  var pinTarget2 = document.querySelector(".pin-c");
  var mainPinTarget = document.querySelector(".pin");

  var rltTarget1 = document.querySelector(".rlt-1");
  var rltTarget2 = document.querySelector(".rlt-3");
  var mainRltTarget = document.querySelector(".relate");

  useEffect(() => {
    if (contMainTarget) {
      contMainTarget.addEventListener("mouseover", cOver, false);
      contMainTarget.addEventListener("mouseout", cOut, false);
    }
    function cOver() {
      contTarget1.style.fill = "#3a3ef2";
      contTarget1.style.stroke = "#3a3ef2";

      for (let i = 0; i < contTarget3.length; i++) {
        contTarget3[i].style.stroke = "white";
        contTarget3[i].style.fill = "white";
      }
    }

    function cOut() {
      contTarget1.style.fill = "none";
      contTarget1.style.stroke = "#929292";

      for (let i = 0; i < contTarget3.length; i++) {
        contTarget3[i].style.stroke = "#929292";
        contTarget3[i].style.fill = "#929292";
      }
    }

    if (mainPinTarget) {
      mainPinTarget.addEventListener("mouseover", pOver, false);
      mainPinTarget.addEventListener("mouseout", pOut, false);
    }

    function pOver() {
      pinTarget1.style.stroke = "#8874ff";
      pinTarget1.style.fill = "#8874ff";
      pinTarget2.style.fill = "#fff";
      pinTarget2.style.stroke = "#fff";
    }

    function pOut() {
      pinTarget1.style.stroke = "#929292";
      pinTarget1.style.fill = "#fff";
      pinTarget2.style.fill = "#929292";
      pinTarget2.style.stroke = "#929292";
    }

    if (mainRltTarget) {
      mainRltTarget.addEventListener("mouseover", rOver, false);
      mainRltTarget.addEventListener("mouseout", rOut, false);
    }

    function rOver() {
      rltTarget2.style.stroke = "#fff";
      rltTarget1.style.fill = "#ff4546";
      rltTarget1.style.stroke = "#ff4546";
    }

    function rOut() {
      rltTarget2.style.stroke = "#929292";
      rltTarget1.style.fill = "white";
      rltTarget1.style.stroke = "#929292";
    }
  },);

  return (
    <DashboardWrapper>
      <div className="flex justify-center flex-col items-center mb-24">
        {list.map((ele, i) => {
          return (
            <div
              key={i}
              style={{ height: "fit-content" }}
              className="bg-white max-w-2xl shadow-lg rounded-3xl py-3 px-3 m-5"
            >
              <div className="flex flex-row items-center">
                <img
                  className="inline object-cover w-16 h-16 mr-2 rounded-full"
                  src={profile}
                  alt="Profile"
                />
                <div className="flex flex-col ml-2">
                  <div className="font-medium md:text-xl sm:text-sm">
                    {ele.name} <span className="text-gray-400">| 12mins</span>{" "}
                  </div>
                  <div className="flex flex-row items-center">
                    <div className="flex flex-row justify-center items-center">
                      <span className="font-bold  text-[12px] sm:text-sm  lg:text-base ">
                        Contract Law
                      </span>
                      <GoPrimitiveDot size={12} />
                    </div>
                    <span className="text-gray-400 text-[12px] sm:text-sm  lg:text-base font-medium">
                      Invitaion to Treat
                    </span>
                  </div>
                </div>
              </div>
              <p
                style={{ marginLeft: width <= 640 ? "1rem" : "5rem" }}
                className="mt-2 pr-2 text-sm lg:text-base"
              >
                {ele.text}
              </p>
              <div className="flex flex-row mt-5 relative">
                <button
                  onClick={handleContribute}
                  className="p-3 flex flex-col justify-center items-center text-gray-400 mb-1 cursor-pointer  focus:text-lpCon w-full bg-white hover:text-lpCon contribute "
                >
                  <Contribute
                    className="fill-current hover:text-lpCon svg-button"
                    width="20%"
                    height="50%"
                  />
                  <span>33</span>
                </button>
                <button
                  onClick={handlePin}
                  className="p-3 flex flex-col justify-center items-center text-gray-400  mb-2 cursor-pointer   w-full bg-white hover:text-lpPin  pin"
                >
                  <Pin
                    className="  hover:text-lpCon stroke-gray-400 stroke-current svg-button"
                    width="20%"
                    height="50%"
                  />
                  <span>33</span>
                </button>
                <button
                  onClick={handleRelate}
                  className="p-3 flex flex-col justify-center items-center text-gray-400  mb-2 cursor-pointer  focus:text-lpBlue w-full bg-white hover:text-lpRed  relate"
                >
                  <Relate
                    className="  hover:text-lpCon stroke-gray-400 stroke-current svg-button"
                    width="20%"
                    height="50%"
                  />
                  <span>33</span>
                </button>
                <button
                  onClick={handleSR}
                  className="p-3 flex flex-col justify-center items-center text-gray-400  mb-2 cursor-pointer  focus:text-lpBlue w-full bg-white hover:text-lpBlue more "
                >
                  <div
                    className="flex flex-row justify-around items-center bg-black hover:bg-lpBlue"
                    style={{
                      height: "30px",
                      width: "30px",
                      display: "flex",
                      borderRadius: "10px",
                    }}
                  >
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    ></div>
                  </div>
                  <span style={{ visibility: "hidden" }}>0</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </DashboardWrapper>
  );
};

export default LearningCommons;

import React, { useState, useCallback, useRef } from "react";
import DashboardWrapper from "../../components/Dashboard Wrapper/DashboardWrapper";
import profile from "../../assets/images/profile.jpg";
import { GoPrimitiveDot } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { setTitle, toggleProfile } from "../../redux/profilecard";
import { toggleEp } from "../../redux/editprofile";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { ReactComponent as Question } from "../../assets/svgs/quickquestion1.svg";
import { ReactComponent as Contribute } from "../../assets/svgs/contribute1.svg";
import { ReactComponent as Pin } from "../../assets/svgs/pin1.svg";
import { ReactComponent as Relate } from "../../assets/svgs/Relate1.svg";
import pins from "../../dummyEngine/pins";
import relates from "../../dummyEngine/relates";
import contributes from "../../dummyEngine/contributes";
import questions from "../../dummyEngine/questions";

const Profile = () => {
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();

  const qRef = useRef();

  const [list, setList] = useState(questions);

  var qqnTarget1 = document.querySelector(".qqn-1");
  var qqnTarget2 = document.querySelector(".qqn-3");

  var contTarget1 = document.querySelector(".cont-1");
  var contTarget3 = document.querySelectorAll(".cont-3");

  var pinTarget1 = document.querySelector(".pin-1");
  var pinTarget2 = document.querySelector(".pin-c");

  var rltTarget1 = document.querySelector(".rlt-1");
  var rltTarget2 = document.querySelector(".rlt-3");

  const qOver = useCallback(() => {
    if (qqnTarget1 && qqnTarget2) {
      qqnTarget1.style.fill = "#ff9a18";
      qqnTarget1.style.stroke = "#ff9a18";
      qqnTarget2.style.fill = "#fff";
    }
  }, [qqnTarget1, qqnTarget2]);

  const qOut = useCallback(() => {
    if (qqnTarget1 && qqnTarget2) {
      qqnTarget1.style.fill = "white";
      qqnTarget1.style.stroke = "#929292";
      qqnTarget2.style.fill = "#929292";
    }
  }, [qqnTarget1, qqnTarget2]);
  const cOver = useCallback(() => {
    if (contTarget1 && contTarget3) {
      contTarget1.style.fill = "#3a3ef2";
      contTarget1.style.stroke = "#3a3ef2";
      for (let i = 0; i < contTarget3.length; i++) {
        contTarget3[i].style.stroke = "white";
        contTarget3[i].style.fill = "white";
      }
    }
  }, [contTarget1, contTarget3]);

  const cOut = useCallback(() => {
    if (contTarget1 && contTarget3) {
      contTarget1.style.fill = "none";
      contTarget1.style.stroke = "#929292";
      for (let i = 0; i < contTarget3.length; i++) {
        contTarget3[i].style.stroke = "#929292";
        contTarget3[i].style.fill = "#929292";
      }
    }
  }, [contTarget1, contTarget3]);

  const pOver = useCallback(() => {
    if (pinTarget1 && pinTarget2) {
      pinTarget1.style.stroke = "#8874ff";
      pinTarget1.style.fill = "#8874ff";
      pinTarget2.style.fill = "#fff";
      pinTarget2.style.stroke = "#fff";
    }
  }, [pinTarget1, pinTarget2]);

  const pOut = useCallback(() => {
    if (pinTarget2 && pinTarget1) {
      pinTarget1.style.stroke = "#929292";
      pinTarget1.style.fill = "#fff";
      pinTarget2.style.fill = "#929292";
      pinTarget2.style.stroke = "#929292";
    }
  }, [pinTarget1, pinTarget2]);

  const rOver = useCallback(() => {
    if (rltTarget1 && rltTarget2) {
      rltTarget2.style.stroke = "#fff";
      rltTarget1.style.fill = "#ff4546";
      rltTarget1.style.stroke = "#ff4546";
    }
  }, [rltTarget1, rltTarget2]);

  const rOut = useCallback(() => {
    if (rltTarget1 && rltTarget2) {
      rltTarget2.style.stroke = "#929292";
      rltTarget1.style.fill = "white";
      rltTarget1.style.stroke = "#929292";
    }
  }, [rltTarget1, rltTarget2]);

  const handleQuestions = () => {
    setList(questions);
    cOut();
    pOut();
    rOut();
    qOver();
    // document.body.style.overflow = "hidden";
  };
  const handleContributions = () => {
    setList(contributes);
    qOut();
    pOut();
    rOut();
    cOver();
    dispatch(setTitle("Delete Contributions"));
  };
  const handlePins = () => {
    dispatch(setTitle("Delete Pins"));
    setList(pins);
    qOut();
    rOut();
    cOut();
    pOver();
  };
  const handleRelate = () => {
    // dispatch(toggleProfile());
    dispatch(setTitle("Delete Relates"));
    setList(relates);
    qOut();
    cOut();
    pOut();
    rOver();
  };

  const handleMore = () => {
    dispatch(toggleProfile());
  };

  const handleEditProfile = () => {
    dispatch(toggleEp());
    document.body.style.overflow = "hidden";
  };

  return (
    <DashboardWrapper>
      <div className="flex justify-center flex-col items-center ">
        <div
          style={{ height: "fit-content" }}
          className="bg-white max-w-2xl shadow-lg rounded-3xl py-3 px-3 m-5"
        >
          <div className="flex justify-between">
            <span></span>
            <span
              onClick={handleEditProfile}
              className="border-2 cursor-pointer font-semibold lg:text-xl text-sm border-black rounded-lgB py-0.5 px-2"
            >
              Edit Profile
            </span>
          </div>
          <div className="flex justify-center items-center mt-5">
            <div className="lg:w-1/5 w-2/5 h-32 flex justify-center items-center">
              <img
              
                className=" object-cover mr-2 rounded-full profile-img"
                src={profile}
                alt="Profile"
              />
            </div>
            <div className="pl-3 w-5/6">
              <p className="lg:text-2xl text-md font-semibold mb-2">
                Marilyn Powel
              </p>
              <p className="mt-2 pr-2 text-sm lg:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                dolores deserunt ea doloremque natus error, rerum quas odio
                quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                minus consequuntur!
              </p>
            </div>
          </div>
        </div>

        <div
          style={{ width: "90%" }}
          className="bg-white max-w-2xl  shadow-lg rounded-2xl  px-5 flex flex-col justify-evenly"
        >
          <div className="flex ">
            <button
              onClick={handleQuestions}
              className=" p-1.5 flex flex-col justify-center items-center  text-gray-400  cursor-pointer  focus:text-lpO w-1/4 bg-white hover:text-lpOrange  questionprofile"
            >
              <Question
                className="svg-button"
                ref={qRef}
                width="20%"
                height="50%"
              />

              <span className="lg:text-base  text-sm">Questions</span>
            </button>
            <button
              onClick={handleContributions}
              className="p-1.5 flex flex-col justify-center items-center  text-gray-400 cursor-pointer  focus:text-lpBlue w-1/4 bg-white hover:text-lpCon  contribute"
            >
              <Contribute className="svg-button" width="20%" height="50%" />
              <span className="lg:text-base  text-sm">Comments</span>
            </button>
            <button
              onClick={handlePins}
              className="p-1.5 flex flex-col justify-center items-center  text-gray-400 cursor-pointer  w-1/4 bg-white hover:text-lpPin  pin"
            >
              <Pin className="svg-button" width="20%" height="50%" />
              <span className="lg:text-base  text-sm">Pins</span>
            </button>
            <button
              onClick={handleRelate}
              className="p-1.5 flex flex-col justify-center items-center  text-gray-400  cursor-pointer   w-1/4 bg-white hover:text-lpRed  relate"
            >
              <Relate className="svg-button" width="20%" height="50%" />
              <span className="lg:text-base  text-sm">Relate</span>
            </button>
          </div>
        </div>

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
                  <div className="font-medium text-xl">
                    {ele.name} <span className="text-gray-400">| 12mins</span>{" "}
                  </div>
                  <div className="flex flex-row">
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
              <div className="flex flex-row mt-5 profile-button-wrapper">
                <button className="p-3 flex flex-col justify-center items-center  text-gray-400 mb-2 cursor-pointer  focus:text-lpBlue w-full bg-white hover:text-lpBlue  ">
                  <Contribute className="svg-button" width="30%" height="50%" />
                  <span>33</span>
                </button>
                <button className="p-3 flex flex-col justify-center items-center text-gray-400  mb-2 cursor-pointer  focus:text-lpBlue w-full bg-white hover:text-lpBlue  ">
                  <Pin className="svg-button" width="30%" height="50%" />
                  <span>33</span>
                </button>
                <button className="p-3 flex flex-col justify-center items-center text-gray-400  mb-2 cursor-pointer  focus:text-lpBlue w-full bg-white hover:text-lpBlue  ">
                  <Relate className="svg-button" width="30%" height="50%" />
                  <span>33</span>
                </button>
                <button
                  onClick={handleMore}
                  className="p-3 flex flex-col justify-center items-center text-gray-400  mb-2 cursor-pointer  focus:text-lpBlue w-full bg-white hover:text-lpBlue  "
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
        <div className=" mb-24"></div>
      </div>
    </DashboardWrapper>
  );
};

export default Profile;

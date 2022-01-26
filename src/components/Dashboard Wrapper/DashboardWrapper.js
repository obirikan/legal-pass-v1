import React, { useRef, useEffect, useState } from "react";
import profile from "../../assets/images/profile.jpg";
import QuickView from "../Quick View/QuickView";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../redux/quick";
import { publishTog } from "../../redux/publish";
import { togNotification } from "../../redux/notification";
import { toggleToProfile } from "../../redux/toprofile";
import { useNavigate } from "react-router-dom";
import PublishModal from "../Publich Modal/PublishModal";
import { ReactComponent as Fleet } from "../../assets/svgs/fleet1.svg";
import { ReactComponent as Search } from "../../assets/svgs/search1.svg";
import { ReactComponent as Publish } from "../../assets/svgs/publish1.svg";
import { ReactComponent as Notification } from "../../assets/svgs/notification1.svg";
import Notifications from "../Notifications/Notifications";
import SearchBar from "../SearchBar/SearchBar";
import SRModal from "../SRModal/SRModal";
import ReportModal from "../Report Modal/ReportModal";
import ProfileModalTemplate from "../Profile Modal Template/ProfileModalTemplate";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import "./DashboardWrapper.css";
import Edit from "../../pages/Profile/Edit";
const DashboardWrapper = (props) => {
  const navigate = useNavigate();

  const { active } = useSelector((state) => state.quick);
  const { pubActive } = useSelector((state) => state.publish);
  const { notiActive } = useSelector((state) => state.notification);
  const { srActive } = useSelector((state) => state.sharereport);
  const { curTab } = useSelector((state) => state.sharereport);
  const { pcActive, title } = useSelector((state) => state.profilecard);
  const { onProfile } = useSelector((state) => state.toprofile);
  const { epActive } = useSelector((state) => state.editprofile);
  const { width } = useWindowDimensions();
  const fleetRef = useRef();
  const searchRef = useRef();
  const notiRef = useRef();
  const dispatch = useDispatch();

  const [marginLeft, setMarginLeft] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const handleQuick = () => {
    dispatch(toggle());
    if (!active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };
  const handlePublish = () => {
    dispatch(publishTog());
    document.body.style.overflow = "hidden";
  };

  const handleNotification = () => {
    dispatch(togNotification());
    document.body.style.overflow = "hidden";
  };

  const handleFleet = () => {
    fleetRef.current.style.fill = "#3a3ef2";
    fleetRef.current.style.stroke = "#3a3ef2";
    navigate("/lcommons");
    dispatch(toggleToProfile(false));
  };
  const handleSearch = () => {
    searchRef.current.style.fill = "#3a3ef2";
    searchRef.current.style.stroke = "#3a3ef2";
    setShowSearch(!showSearch);
  };

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
    if (!showSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const handleProfile = () => {
    navigate("/profile");
    dispatch(toggleToProfile(true));
  };

  useEffect(() => {
    if (width > 1280) {
      setMarginLeft(15);
    } else {
      setMarginLeft(0);
    }
  }, [marginLeft, width]);

  var svgNoti1Target = document.querySelector(".not-1");
  var svgNoti2Target = document.querySelector(".not-2");
  var svgNoti3Target = document.querySelector(".not-3");
  var svgNoti4Target = document.querySelector(".not-4");
  var mainNotTarget = document.querySelector(".notification");

  useEffect(() => {
    if (mainNotTarget) {
      mainNotTarget.addEventListener("mouseover", mOver, false);
      mainNotTarget.addEventListener("mouseout", mOut, false);
    }
    function mOver() {
      svgNoti1Target.style.stroke = "blue";
      svgNoti2Target.style.fill = "blue";
      svgNoti3Target.style.fill = "blue";
      svgNoti4Target.style.stroke = "blue";
    }

    function mOut() {
      svgNoti1Target.style.stroke = "black";
      svgNoti2Target.style.fill = "black";
      svgNoti3Target.style.fill = "black";
      svgNoti4Target.style.stroke = "black";
    }
  }, [
    mainNotTarget,
    svgNoti1Target,
    svgNoti2Target,
    svgNoti3Target,
    svgNoti4Target,
  ]);

  var svgSrhTarget = document.querySelector(".srh-a");
  var svgSrh2Target = document.querySelector(".srh-r");
  var mainSrhTarget = document.querySelector(".bar");

  useEffect(() => {
    if (mainSrhTarget) {
      mainSrhTarget.addEventListener("mouseover", smOver, false);
      mainSrhTarget.addEventListener("mouseout", smOut, false);
    }

    function smOver() {
      svgSrhTarget.style.stroke = "blue";
      svgSrh2Target.style.fill = "blue";
    }

    function smOut() {
      svgSrhTarget.style.stroke = "black";
      svgSrh2Target.style.fill = "black";
    }
  }, [svgSrhTarget, mainSrhTarget, svgSrh2Target]);

  // useEffect(() => {
  //   if (mainQueTarget) {
  //     mainQueTarget.addEventListener("mouseover", qOver, false);
  //     mainQueTarget.addEventListener("mouseout", qOut, false);
  //   }
  //   function qOver() {
  //     // svgSrhTarget.style.stroke = "blue";
  //     que1Target.style.stroke = "blue";
  //     for (let i = 0; i < que2Target.length; i++) {
  //       que2Target[i].style.stroke = "blue";
  //       que2Target[i].style.fill = "blue";
  //     }
  //   }

  //   function qOut() {
  //     que1Target.style.stroke = "black";
  //     for (let i = 0; i < que2Target.length; i++) {
  //       que2Target[i].style.stroke = "black";
  //       que2Target[i].style.fill = "black";
  //     }
  //   }
  // }, [mainQueTarget, que1Target, que2Target]);

  var pubTarget = document.querySelector(".pub-2");
  var mainPubTarget = document.querySelector(".publish");

  useEffect(() => {
    if (mainPubTarget) {
      mainPubTarget.addEventListener("mouseover", pOver, false);
      mainPubTarget.addEventListener("mouseout", pOut, false);
    }
    function pOver() {
      pubTarget.style.fill = "blue";
    }

    function pOut() {
      pubTarget.style.fill = "black";
    }
  }, [pubTarget, mainPubTarget]);

  return (
    <div className="flex bg-dashBg">
      {width < 1280 && showSidebar ? (
        <div className="bg-white w-screen overflow-y-scroll h-full  overflow-x-hidden fixed z-50 top-12 mb-14">
          <div className="px-7 mt-14 pb-10">
            <div className="mb-5">
              <p className="text-gray-400 text-xl font-semibold">
                LLBm Undergraduate
              </p>
              <p className="text-lg mb-3">All</p>
              <p className="text-lg mb-3">ADR</p>
              <p className="text-lg mb-3">Contract Law</p>
              <p className="text-lg mb-3">Legal System</p>
              <p className="text-lg mb-3">Law of Torts</p>
              <p className="text-lg mb-3">Constitutional Law</p>
              <p className="text-lg mb-3">Qualitiative Analysis</p>
            </div>
            <div>
              <p className="text-gray-400 text-xl font-semibold">
                Ghana School of Law
              </p>
              <p className="text-lg mb-3">All</p>
              <p className="text-lg mb-3">ADR</p>
              <p className="text-lg mb-3">Jurisprudence Law</p>
              <p className="text-lg mb-3">Legal System</p>
            </div>
          </div>
          <div
            onClick={handleQuick}
            className="text-xl font-bold  fixed bottom-5 w-screen text-center pb-3  cursor-pointer "
          >
            Quick View
          </div>
        </div>
      ) : null}
      {/* mobile navbar */}
      {width < 1280 && !pubActive && !notiActive && !showSidebar ? (
        <div
          style={{
            left: "50%",
            marginLeft: "-11rem",
            zIndex: 25,
            boxShadow: " -14px 7px 42px -14px rgba(0,0,0,0.75)",
          }}
          className="fixed bottom-6  bg-white rounded-full  flex items-center justify-center"
        >
          <button
            onClick={handleFleet}
            className="px-5 flex justify-start items-center mb-2 cursor-pointer question  focus:text-lpBlue w-full"
          >
            <Fleet
              ref={fleetRef}
              className="fill-current text-black hover:text-lpBlue stroke-current  "
              width="40"
              height="40"
            />
          </button>
          <button
            onClick={handleSearch}
            className="px-3 flex justify-start items-center mb-2 cursor-pointer bar focus:text-lpBlue w-full  hover:text-lpBlue "
          >
            <Search
              ref={searchRef}
              className="fill-current text-black hover:text-lpBlue stroke-current"
              width="40"
              height="40"
              fill="#000"
              stroke="crimson"
            />
          </button>
          <button
            onClick={handlePublish}
            className="p-3 flex justify-start items-center  mb-2 cursor-pointer publish  focus:text-lpBlue w-full  hover:text-lpBlue"
          >
            <Publish
              className="text-black fill-current hover:text-lpBlue "
              width="50"
              height="50"
              // fill="#000"
            />
          </button>
          <button
            onClick={handleNotification}
            className="p-3 flex justify-start mb-2 cursor-pointer items-center  focus:text-lpBlue w-full  hover:text-lpBlue notification"
          >
            <Notification
              ref={notiRef}
              className=" hover:text-lpBlue stroke-current"
              width="40"
              height="40"
            />
          </button>
          <button
            onClick={handleProfile}
            className="p-3 flex justify-start mb-2 cursor-pointer items-center focus:text-lpBlue w-full  hover:text-lpBlue border-lpBlue"
          >
            {onProfile ? (
              <img
                style={{
                  width: width < 1280 ? "40px" : "2.5rem",
                  height: width < 1280 ? "35px" : "2.5rem",
                }}
                className="inline object-cover w-10 h-10 mr-2 rounded-full border-2 focus:border-lpBlue hover:border-lpBlue border-lpBlue "
                src={profile}
                alt="Profile"
              />
            ) : (
              <img
                style={{
                  width: width < 1280 ? "40px" : "2.5rem",
                  height: width < 1280 ? "35px" : "2.5rem",
                }}
                className="inline object-cover w-10 h-10 mr-2 rounded-full border-2 focus:border-lpBlue hover:border-lpBlue "
                src={profile}
                alt="Profile"
              />
            )}
          </button>
        </div>
      ) : null}
      {width > 1280 ? (
        <aside className="bg-white w-60 min-h-screen flex flex-col fixed z-30">
          <div
            //  style={{
            //   marginRight: width > 1280 ? "15rem": "0",
            // }}
            className=" py-2 flex flex-grow justify-start font-bold text-2xl pl-4"
          >
            <span className="gradient-text">Learning Commons</span>
          </div>
          <div className=" flex flex-grow justify-center">
            <div className="w-40">
              <button
                onClick={handleFleet}
                className="p-3 flex justify-start items-center mb-2 cursor-pointer  focus:text-lpBlue w-full bg-white hover:text-lpBlue question"
              >
                <span className="mr-2">
                  <Fleet
                    ref={fleetRef}
                    className="fill-current text-black hover:text-lpBlue stroke-current  "
                    width="30"
                    height="30"
                  />
                </span>
                <span>Questions</span>
              </button>
              <button
                onClick={handleSearch}
                className="p-3 flex justify-start items-center mb-2 cursor-pointer  focus:text-lpBlue w-full bg-white hover:text-lpBlue bar"
              >
                <span className="mr-2">
                  <Search
                    ref={searchRef}
                    className="fill-current text-black hover:text-lpBlue stroke-current"
                    width="30"
                    height="30"
                    fill="#000"
                    stroke="crimson"
                  />
                </span>
                <span>Search</span>
              </button>
              <button
                onClick={handlePublish}
                className="p-3 flex justify-start items-center  mb-2 cursor-pointer  focus:text-lpBlue w-full bg-white hover:text-lpBlue publish"
              >
                <span className="mr-2">
                  <Publish
                    className="text-black fill-current hover:text-lpBlue "
                    width="40"
                    height="40"
                    // fill="#000"
                  />
                </span>
                <span>Publish</span>
              </button>
              <button
                onClick={handleNotification}
                className="p-3 flex justify-start mb-2 cursor-pointer items-center  focus:text-lpBlue w-full bg-white hover:text-lpBlue notification"
              >
                <span className="mr-2">
                  <Notification
                    ref={notiRef}
                    className=" hover:text-lpBlue stroke-current  "
                    width="30"
                    height="30"
                  />
                </span>
                <span>Notification</span>
              </button>
              <button
                onClick={handleProfile}
                className="p-3 flex justify-start mb-2 cursor-pointer items-center focus:text-lpBlue w-full bg-white hover:text-lpBlue"
              >
                <span className="mr-2">
                  <img
                    className="inline object-cover w-7 h-7 mr-2 rounded-full border-2 focus:border-lpBlue hover:border-lpBlue "
                    src={profile}
                    alt="Profile"
                  />
                </span>
                <span>Profile</span>
              </button>
            </div>
          </div>
          <div
            onClick={handleQuick}
            className="text-lg font-bold  bottom-0 text-center pb-3 border-t-2 cursor-pointer"
          >
            Quick View
          </div>
        </aside>
      ) : null}

      <main
        style={{ marginLeft: width > 1280 ? "15rem" : 0 }}
        className="flex-grow flex flex-col min-h-screen"
      >
        <header
          // style={{
          //   width: width > 1280 ? "auto" : "100%",
          //   marginLeft: width > 1280 ? "33.3%" : "0",
          // }}
          style={{
            marginLeft: width > 1280 ? "-15rem" : "0",
          }}
          className="bg-white border-b h-14 flex items-center justify-center w-full  fixed z-10"
        >
          {!showSearch ? (
            <div className="flex flex-grow items-center justify-evenly px-3">
              {/* <span className="text-lpBlue text-lg cursor-pointer">
                Quick Questions
              </span> */}
              {/* <span className="text-lg cursor-pointer">Quick Notes</span> */}
              {width < 1280 ? (
                <div className="flex flex-grow items-center justify-between px-3">
                  <span className="text-lpBlue text-lg cursor-pointer gradient-text">
                    Learning Commons
                  </span>
                  <span
                    onClick={handleSidebar}
                    className="text-lg cursor-pointer "
                  >
                    {showSidebar ? (
                      <HiOutlineChevronUp size={30} />
                    ) : (
                      <HiOutlineChevronDown size={30} />
                    )}
                  </span>
                </div>
              ) : null}{" "}
            </div>
          ) : (
            <SearchBar />
          )}
        </header>
        <div className="bg-lpBg h-full mt-14 ">{props.children}</div>
      </main>
      {width > 1280 ? (
        <aside className="bg-white  right-0 w-96  min-h-screen z-20">
          <div className="fixed mt-14 ">
            <div
              style={{
                width: "100%",
                maxWidth: "1400px",
                overflowX: "scroll",
                overflowY: "hidden",
                display: "flex",
                paddingTop: "20px",
                flexDirection: "column",
                maxHeight: "400px",
                flexFlow: "wrap",
              }}
            >
              <div
                style={{
                  maxWidth: "400px",
                  width: "400px",
                  flexWrap: "wrap",
                }}
                className="flex  bg-red-200"
              >
                <p className="bubble">This is a long text</p>
                <p className="bubble">This </p>
                <p className="bubble">This is a </p>
                <p className="bubble">This is a long text</p>
                <p className="bubble">This is </p>
                <p className="bubble">This is a long text yehehe</p>
                <p className="bubble">This is a long text</p>
                <p className="bubble">This is a long text</p>
              </div>

            </div>
            {/* <div className="mb-5">
              <p className="text-gray-400 text-xl font-semibold">
                LLB Undergraduate
              </p>
              <p className="text-lg mb-3">All</p>
              <p className="text-lg mb-3">ADR</p>
              <p className="text-lg mb-3">Contract Law</p>
              <p className="text-lg mb-3">Legal System</p>
              <p className="text-lg mb-3">Law of Torts</p>
              <p className="text-lg mb-3">Constitutional Law</p>
              <p className="text-lg mb-3">Qualitiative Analysis</p>
            </div> */}
            {/* <div>
              <p className="text-gray-400 text-xl font-semibold">
                Ghana School of Law
              </p>
              <p className="text-lg mb-3">All</p>
              <p className="text-lg mb-3">ADR</p>
              <p className="text-lg mb-3">Jurisprudence Law</p>
              <p className="text-lg mb-3">Legal System</p>
            </div> */}
          </div>
        </aside>
      ) : null}
      {active && <QuickView />}
      {pubActive && <PublishModal />}
      {notiActive && <Notifications />}
      {srActive && <SRModal />}
      {curTab === "report" && <ReportModal />}
      {pcActive && <ProfileModalTemplate title={title} />}
      {epActive && <Edit />}
    </div>
  );
};

export default DashboardWrapper;

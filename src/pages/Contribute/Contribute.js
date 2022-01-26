import React from "react";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { CgMenuBoxed } from "react-icons/cg";
import profile from "../../assets/images/profile.jpg";
import { GoPrimitiveDot } from "react-icons/go";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { BsArrowUp } from "react-icons/bs";
const Contribute = () => {
  const { width } = useWindowDimensions();
  return (
    <div>
      <header className="bg-white border-b h-14 flex items-center justify-center fixed w-full z-10">
        <div className="flex flex-grow items-center justify-start px-3">
          <span className="text-lg cursor-pointer">
            <HiOutlineChevronLeft size={28} />
          </span>
        </div>
      </header>
      <div
        style={{
          flexDirection: width < 1024 ? "column" : "row",
        }}
        className="flex bg-lpBg"
      >
        <div
          style={{
            minWidth: "66%",
            // display: width? ""
            height: width < 1024 ? "auto" : "100vh",
            positon: width < 1024 ? "static" : "fixed",
            margin: width < 1024 ? "auto" : "56px 0",
          }}
          className="bg-lpBg flex flex-col justify-center"
        >
          <div className="bg-lpBg">
            <div className="bg-white max-w-2xl s shadow-lg rounded-3xl py-3 px-3 m-5">
              <div className="flex flex-row items-center">
                <img
                  className="inline object-cover w-16 h-16 mr-2 rounded-full"
                  src={profile}
                  alt="Profile"
                />
                <div className="flex flex-col">
                  <div className="font-medium text-xl">
                    Johnson <span className="text-gray-400">| 12mins</span>{" "}
                  </div>
                  <div className="flex flex-row">
                    <div className="flex flex-row justify-center items-center">
                      <span className="font-bold text-gray-400">
                        Contract Law
                      </span>
                      <GoPrimitiveDot size={12} />
                    </div>
                    <span className="text-gray-400 font-medium">
                      Invitaion to Treat
                    </span>
                  </div>
                </div>
              </div>
              <p className="ml-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                dolores deserunt ea doloremque natus error, rerum quas odio
                quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                minus consequuntur!
              </p>
              <div className="flex flex-row mt-5 relative">
                <button className="p-3 flex flex-col justify-center items-center text-gray-400 mb-1 cursor-pointer  focus:text-lpCon w-full bg-white hover:text-lpCon  ">
                  <CgMenuBoxed size={30} />

                  <span>33</span>
                </button>
                <button className="p-3 flex flex-col justify-center items-center text-gray-400  mb-2 cursor-pointer  focus:text-lpPin w-full bg-white hover:text-lpPin  ">
                  <CgMenuBoxed size={30} />

                  <span>33</span>
                </button>
                <button className="p-3 flex flex-col justify-center items-center text-gray-400  mb-2 cursor-pointer  focus:text-lpBlue w-full bg-white hover:text-lpBlue  ">
                  <CgMenuBoxed size={30} />
                  <span>33</span>
                </button>
                <button className="p-3 flex flex-col justify-center items-center text-gray-400  mb-2 cursor-pointer  focus:text-lpBlue w-full bg-white hover:text-lpBlue  ">
                  <CgMenuBoxed size={30} />
                  <span>33</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* aside */}
        <div
          style={{
            position: width < 1024 ? "static" : "absolute",
            right: width < 1024 ? "unset" : 0,
            margin: width < 1024 ? "auto" : "56px 0px",
            overflowY: width < 1024 ? "visible" : "scroll",
          }}
          className="flex  flex-col  h-full overflow-y-scroll "
        >
          <div className="bg-lpBg">
            <div
              style={{ height: "fit-content" }}
              className="bg-white max-w-2xl shadow-lg rounded-3xl py-3 px-3 m-5"
            >
              <div className="flex flex-row items-center">
                <img
                  className="inline object-cover w-16 h-16 mr-2 rounded-full"
                  src={profile}
                  alt="Profile"
                />
                <div className="flex flex-col">
                  <div className="font-medium text-xl">
                    John Johnson <span className="text-gray-400">| 12mins</span>{" "}
                  </div>
                  <div className="flex flex-row">
                    <div className="flex flex-row justify-center items-center">
                      <span className="font-bold text-gray-400">
                        Contract Law
                      </span>
                      <GoPrimitiveDot size={12} />
                    </div>
                    <span className="text-gray-400 font-medium">
                      Invitaion to Treat
                    </span>
                  </div>
                </div>
              </div>
              <p className="ml-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                dolores deserunt ea doloremque natus error, rerum quas odio
                quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                minus consequuntur!
              </p>
              <div className="flex flex-row mt-5 relative">
                <button className="p-3 flex flex-col justify-center items-center text-gray-400 mb-1 cursor-pointer  focus:text-lpCon w-full bg-white hover:text-lpCon  ">
                  <CgMenuBoxed size={30} />

                  <span>33</span>
                </button>
                <button className="p-3 flex flex-col justify-center items-center text-gray-400  mb-2 cursor-pointer  focus:text-lpPin w-full bg-white hover:text-lpPin  ">
                  <CgMenuBoxed size={30} />

                  <span>33</span>
                </button>
                <button className="p-3 flex flex-col justify-center items-center text-gray-400  mb-2 cursor-pointer  focus:text-lpBlue w-full bg-white hover:text-lpBlue  ">
                  <CgMenuBoxed size={30} />
                  <span>33</span>
                </button>
                <button className="p-3 flex flex-col justify-center items-center text-gray-400  mb-2 cursor-pointer  focus:text-lpBlue w-full bg-white hover:text-lpBlue  ">
                  <CgMenuBoxed size={30} />
                  <span>33</span>
                </button>
              </div>
            </div>
          </div>

          <div className="bg-lpBg">
            <div
              style={{ height: "fit-content" }}
              className="bg-white max-w-2xl shadow-lg rounded-3xl py-3 px-3 m-5"
            >
              <div className="flex flex-row items-center">
                <img
                  className="inline object-cover w-16 h-16 mr-2 rounded-full"
                  src={profile}
                  alt="Profile"
                />
                <div className="flex flex-col">
                  <div className="font-medium text-xl">
                    John Johnson <span className="text-gray-400">| 12mins</span>{" "}
                  </div>
                  <div className="flex flex-row">
                    <div className="flex flex-row justify-center items-center">
                      <span className="font-bold text-gray-400">
                        Contract Law
                      </span>
                      <GoPrimitiveDot size={12} />
                    </div>
                    <span className="text-gray-400 font-medium">
                      Invitaion to Treat
                    </span>
                  </div>
                </div>
              </div>
              <p className="ml-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                dolores deserunt ea doloremque natus error, rerum quas odio
                quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                minus consequuntur!
              </p>
              <div className="flex flex-row mt-5 relative">
                <button className="p-3 flex flex-col justify-center items-center text-gray-400 mb-1 cursor-pointer  focus:text-lpCon w-full bg-white hover:text-lpCon  ">
                  <CgMenuBoxed size={30} />

                  <span>33</span>
                </button>
                <button className="p-3 flex flex-col justify-center items-center text-gray-400  mb-2 cursor-pointer  focus:text-lpPin w-full bg-white hover:text-lpPin  ">
                  <CgMenuBoxed size={30} />

                  <span>33</span>
                </button>
                <button className="p-3 flex flex-col justify-center items-center text-gray-400  mb-2 cursor-pointer  focus:text-lpBlue w-full bg-white hover:text-lpBlue  ">
                  <CgMenuBoxed size={30} />
                  <span>33</span>
                </button>
                <button className="p-3 flex flex-col justify-center items-center text-gray-400  mb-2 cursor-pointer  focus:text-lpBlue w-full bg-white hover:text-lpBlue  ">
                  <CgMenuBoxed size={30} />
                  <span>33</span>
                </button>
              </div>
            </div>
          </div>

          <div className="bg-lpBg">
            <div
              style={{ height: "fit-content" }}
              className="bg-white max-w-2xl shadow-lg rounded-3xl py-3 px-3 m-5"
            >
              <div className="flex flex-row items-center">
                <img
                  className="inline object-cover w-16 h-16 mr-2 rounded-full"
                  src={profile}
                  alt="Profile"
                />
                <div className="flex flex-col">
                  <div className="font-medium text-xl">
                    John Johnson <span className="text-gray-400">| 12mins</span>{" "}
                  </div>
                  <div className="flex flex-row">
                    <div className="flex flex-row justify-center items-center">
                      <span className="font-bold text-gray-400">
                        Contract Law
                      </span>
                      <GoPrimitiveDot size={12} />
                    </div>
                    <span className="text-gray-400 font-medium">
                      Invitaion to Treat
                    </span>
                  </div>
                </div>
              </div>
              <p className="ml-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                dolores deserunt ea doloremque natus error, rerum quas odio
                quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                minus consequuntur!
              </p>
              <div className="flex flex-row mt-5 relative">
                <button className="p-3 flex flex-col justify-center items-center text-gray-400 mb-1 cursor-pointer  focus:text-lpCon w-full bg-white hover:text-lpCon  ">
                  <CgMenuBoxed size={30} />

                  <span>33</span>
                </button>
                <button className="p-3 flex flex-col justify-center items-center text-gray-400  mb-2 cursor-pointer  focus:text-lpPin w-full bg-white hover:text-lpPin  ">
                  <CgMenuBoxed size={30} />

                  <span>33</span>
                </button>
                <button className="p-3 flex flex-col justify-center items-center text-gray-400  mb-2 cursor-pointer  focus:text-lpBlue w-full bg-white hover:text-lpBlue  ">
                  <CgMenuBoxed size={30} />
                  <span>33</span>
                </button>
                <button className="p-3 flex flex-col justify-center items-center text-gray-400  mb-2 cursor-pointer  focus:text-lpBlue w-full bg-white hover:text-lpBlue  ">
                  <CgMenuBoxed size={30} />
                  <span>33</span>
                </button>
              </div>
            </div>
          </div>

          <div className="bg-lpBg">
            <div
              style={{ height: "fit-content" }}
              className="bg-white max-w-2xl shadow-lg rounded-3xl py-3 px-3 m-5"
            >
              <div className="flex flex-row items-center">
                <img
                  className="inline object-cover w-16 h-16 mr-2 rounded-full"
                  src={profile}
                  alt="Profile"
                />
                <div className="flex flex-col">
                  <div className="font-medium text-xl">
                    John Johnson <span className="text-gray-400">| 12mins</span>{" "}
                  </div>
                  <div className="flex flex-row">
                    <div className="flex flex-row justify-center items-center">
                      <span className="font-bold text-gray-400">
                        Contract Law
                      </span>
                      <GoPrimitiveDot size={12} />
                    </div>
                    <span className="text-gray-400 font-medium">
                      Invitaion to Treat
                    </span>
                  </div>
                </div>
              </div>
              <p className="ml-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                dolores deserunt ea doloremque natus error, rerum quas odio
                quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                minus consequuntur!
              </p>
              <div className="flex flex-row mt-5 relative">
                <button className="p-3 flex flex-col justify-center items-center text-gray-400 mb-1 cursor-pointer  focus:text-lpCon w-full bg-white hover:text-lpCon  ">
                  <CgMenuBoxed size={30} />

                  <span>33</span>
                </button>
                <button className="p-3 flex flex-col justify-center items-center text-gray-400  mb-2 cursor-pointer  focus:text-lpPin w-full bg-white hover:text-lpPin  ">
                  <CgMenuBoxed size={30} />

                  <span>33</span>
                </button>
                <button className="p-3 flex flex-col justify-center items-center text-gray-400  mb-2 cursor-pointer  focus:text-lpBlue w-full bg-white hover:text-lpBlue  ">
                  <CgMenuBoxed size={30} />
                  <span>33</span>
                </button>
                <button className="p-3 flex flex-col justify-center items-center text-gray-400  mb-2 cursor-pointer  focus:text-lpBlue w-full bg-white hover:text-lpBlue  ">
                  <CgMenuBoxed size={30} />
                  <span>33</span>
                </button>
              </div>
            </div>
          </div>

          <div className="bg-lpBg">
            <div
              style={{ height: "fit-content" }}
              className="bg-white max-w-2xl shadow-lg rounded-3xl py-3 px-3 m-5"
            >
              <div className="flex flex-row items-center">
                <img
                  className="inline object-cover w-16 h-16 mr-2 rounded-full"
                  src={profile}
                  alt="Profile"
                />
                <div className="flex flex-col">
                  <div className="font-medium text-xl">
                    John Johnson <span className="text-gray-400">| 12mins</span>{" "}
                  </div>
                  <div className="flex flex-row">
                    <div className="flex flex-row justify-center items-center">
                      <span className="font-bold text-gray-400">
                        Contract Law
                      </span>
                      <GoPrimitiveDot size={12} />
                    </div>
                    <span className="text-gray-400 font-medium">
                      Invitaion to Treat
                    </span>
                  </div>
                </div>
              </div>
              <p className="ml-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                dolores deserunt ea doloremque natus error, rerum quas odio
                quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                minus consequuntur!
              </p>
              <div className="flex flex-row mt-5 relative">
                <button className="p-3 flex flex-col justify-center items-center text-gray-400 mb-1 cursor-pointer  focus:text-lpCon w-full bg-white hover:text-lpCon  ">
                  <CgMenuBoxed size={30} />

                  <span>33</span>
                </button>
                <button className="p-3 flex flex-col justify-center items-center text-gray-400  mb-2 cursor-pointer  focus:text-lpPin w-full bg-white hover:text-lpPin  ">
                  <CgMenuBoxed size={30} />

                  <span>33</span>
                </button>
                <button className="p-3 flex flex-col justify-center items-center text-gray-400  mb-2 cursor-pointer  focus:text-lpBlue w-full bg-white hover:text-lpBlue  ">
                  <CgMenuBoxed size={30} />
                  <span>33</span>
                </button>
                <button className="p-3 flex flex-col justify-center items-center text-gray-400  mb-2 cursor-pointer  focus:text-lpBlue w-full bg-white hover:text-lpBlue  ">
                  <CgMenuBoxed size={30} />
                  <span>33</span>
                </button>
              </div>
            </div>
          </div>

          <div className="bg-lpBg">
            <div
              style={{ height: "fit-content" }}
              className="bg-white max-w-2xl shadow-lg rounded-3xl py-3 px-3 m-5"
            >
              <div className="flex flex-row items-center">
                <img
                  className="inline object-cover w-16 h-16 mr-2 rounded-full"
                  src={profile}
                  alt="Profile"
                />
                <div className="flex flex-col">
                  <div className="font-medium text-xl">
                    John Johnson <span className="text-gray-400">| 12mins</span>{" "}
                  </div>
                  <div className="flex flex-row">
                    <div className="flex flex-row justify-center items-center">
                      <span className="font-bold text-gray-400">
                        Contract Law
                      </span>
                      <GoPrimitiveDot size={12} />
                    </div>
                    <span className="text-gray-400 font-medium">
                      Invitaion to Treat
                    </span>
                  </div>
                </div>
              </div>
              <p className="ml-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                dolores deserunt ea doloremque natus error, rerum quas odio
                quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                minus consequuntur!
              </p>
              <div className="flex flex-row mt-5 relative">
                <button className="p-3 flex flex-col justify-center items-center text-gray-400 mb-1 cursor-pointer  focus:text-lpCon w-full bg-white hover:text-lpCon  ">
                  <CgMenuBoxed size={30} />

                  <span>33</span>
                </button>
                <button className="p-3 flex flex-col justify-center items-center text-gray-400  mb-2 cursor-pointer  focus:text-lpPin w-full bg-white hover:text-lpPin  ">
                  <CgMenuBoxed size={30} />

                  <span>33</span>
                </button>
                <button className="p-3 flex flex-col justify-center items-center text-gray-400  mb-2 cursor-pointer  focus:text-lpBlue w-full bg-white hover:text-lpBlue  ">
                  <CgMenuBoxed size={30} />
                  <span>33</span>
                </button>
                <button className="p-3 flex flex-col justify-center items-center text-gray-400  mb-2 cursor-pointer  focus:text-lpBlue w-full bg-white hover:text-lpBlue  ">
                  <CgMenuBoxed size={30} />
                  <span>33</span>
                </button>
              </div>
            </div>
          </div>

          <div className="bg-lpBg">
            <div
              style={{ height: "fit-content" }}
              className="bg-white max-w-2xl shadow-lg rounded-3xl py-3 px-3 m-5"
            >
              <div className="flex flex-row items-center">
                <img
                  className="inline object-cover w-16 h-16 mr-2 rounded-full"
                  src={profile}
                  alt="Profile"
                />
                <div className="flex flex-col">
                  <div className="font-medium text-xl">
                    John Johnson <span className="text-gray-400">| 12mins</span>{" "}
                  </div>
                  <div className="flex flex-row">
                    <div className="flex flex-row justify-center items-center">
                      <span className="font-bold text-gray-400">
                        Contract Law
                      </span>
                      <GoPrimitiveDot size={12} />
                    </div>
                    <span className="text-gray-400 font-medium">
                      Invitaion to Treat
                    </span>
                  </div>
                </div>
              </div>
              <p className="ml-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                dolores deserunt ea doloremque natus error, rerum quas odio
                quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                minus consequuntur!
              </p>
              <div className="flex flex-row mt-5 relative">
                <button className="p-3 flex flex-col justify-center items-center text-gray-400 mb-1 cursor-pointer  focus:text-lpCon w-full bg-white hover:text-lpCon  ">
                  <CgMenuBoxed size={30} />

                  <span>33</span>
                </button>
                <button className="p-3 flex flex-col justify-center items-center text-gray-400  mb-2 cursor-pointer  focus:text-lpPin w-full bg-white hover:text-lpPin  ">
                  <CgMenuBoxed size={30} />

                  <span>33</span>
                </button>
                <button className="p-3 flex flex-col justify-center items-center text-gray-400  mb-2 cursor-pointer  focus:text-lpBlue w-full bg-white hover:text-lpBlue  ">
                  <CgMenuBoxed size={30} />
                  <span>33</span>
                </button>
                <button className="p-3 flex flex-col justify-center items-center text-gray-400  mb-2 cursor-pointer  focus:text-lpBlue w-full bg-white hover:text-lpBlue  ">
                  <CgMenuBoxed size={30} />
                  <span>33</span>
                </button>
              </div>
            </div>
          </div>

          <div className="bg-lpBg">
            <div
              style={{ height: "fit-content" }}
              className="bg-white max-w-2xl shadow-lg rounded-3xl py-3 px-3 m-5"
            >
              <div className="flex flex-row items-center">
                <img
                  className="inline object-cover w-16 h-16 mr-2 rounded-full"
                  src={profile}
                  alt="Profile"
                />
                <div className="flex flex-col">
                  <div className="font-medium text-xl">
                    John Johnson <span className="text-gray-400">| 12mins</span>{" "}
                  </div>
                  <div className="flex flex-row">
                    <div className="flex flex-row justify-center items-center">
                      <span className="font-bold text-gray-400">
                        Contract Law
                      </span>
                      <GoPrimitiveDot size={12} />
                    </div>
                    <span className="text-gray-400 font-medium">
                      Invitaion to Treat
                    </span>
                  </div>
                </div>
              </div>
              <p className="ml-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                dolores deserunt ea doloremque natus error, rerum quas odio
                quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                minus consequuntur!
              </p>
              <div className="flex flex-row mt-5 relative">
                <button className="p-3 flex flex-col justify-center items-center text-gray-400 mb-1 cursor-pointer  focus:text-lpCon w-full bg-white hover:text-lpCon  ">
                  <CgMenuBoxed size={30} />

                  <span>33</span>
                </button>
                <button className="p-3 flex flex-col justify-center items-center text-gray-400  mb-2 cursor-pointer  focus:text-lpPin w-full bg-white hover:text-lpPin  ">
                  <CgMenuBoxed size={30} />

                  <span>33</span>
                </button>
                <button className="p-3 flex flex-col justify-center items-center text-gray-400  mb-2 cursor-pointer  focus:text-lpBlue w-full bg-white hover:text-lpBlue  ">
                  <CgMenuBoxed size={30} />
                  <span>33</span>
                </button>
                <button className="p-3 flex flex-col justify-center items-center text-gray-400  mb-2 cursor-pointer  focus:text-lpBlue w-full bg-white hover:text-lpBlue  ">
                  <CgMenuBoxed size={30} />
                  <span>33</span>
                </button>
              </div>
            </div>
          </div>

          <div className="bg-lpBg mb-24">
            <div
              style={{ height: "fit-content" }}
              className="bg-white max-w-2xl shadow-lg rounded-3xl py-3 px-3 m-5"
            >
              <div className="flex flex-row items-center">
                <img
                  className="inline object-cover w-16 h-16 mr-2 rounded-full"
                  src={profile}
                  alt="Profile"
                />
                <div className="flex flex-col">
                  <div className="font-medium text-xl">
                    John Johnson <span className="text-gray-400">| 12mins</span>{" "}
                  </div>
                  <div className="flex flex-row">
                    <div className="flex flex-row justify-center items-center">
                      <span className="font-bold text-gray-400">
                        Contract Law
                      </span>
                      <GoPrimitiveDot size={12} />
                    </div>
                    <span className="text-gray-400 font-medium">
                      Invitaion to Treat
                    </span>
                  </div>
                </div>
              </div>
              <p className="ml-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                dolores deserunt ea doloremque natus error, rerum quas odio
                quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                minus consequuntur!
              </p>
              <div className="flex flex-row mt-5 relative">
                <button className="p-3 flex flex-col justify-center items-center text-gray-400 mb-1 cursor-pointer  focus:text-lpCon w-full bg-white hover:text-lpCon  ">
                  <CgMenuBoxed size={30} />

                  <span>33</span>
                </button>
                <button className="p-3 flex flex-col justify-center items-center text-gray-400  mb-2 cursor-pointer  focus:text-lpPin w-full bg-white hover:text-lpPin  ">
                  <CgMenuBoxed size={30} />

                  <span>33</span>
                </button>
                <button className="p-3 flex flex-col justify-center items-center text-gray-400  mb-2 cursor-pointer  focus:text-lpBlue w-full bg-white hover:text-lpBlue  ">
                  <CgMenuBoxed size={30} />
                  <span>33</span>
                </button>
                <button className="p-3 flex flex-col justify-center items-center text-gray-400  mb-2 cursor-pointer  focus:text-lpBlue w-full bg-white hover:text-lpBlue  ">
                  <CgMenuBoxed size={30} />
                  <span>33</span>
                </button>
              </div>
            </div>
          </div>
          <div
            style={{
              position: "sticky",
              bottom: "100px",
              width: "fill-available",
              // backgroundColor: "red",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                borderRadius: "25px",
                maxWidth: "500px",
                width: "600px",
                height: "50px",
                display: "flex", 
                flexDirection: "row",
              
              }}
              className="bg-white border-2 border-black"
            >
              <input
                style={{
                  borderRadius: "25px",
                  paddingLeft: "5px",
                  paddingRight: "5px",
                  width: "90%",
                }}
                className="bg-white-1 outline-none "
              />
              <div
                style={{
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  // marginRight: "-30px"
                  display: "flex", 
                  justifyContent: "center", 
                  alignContent: "center"
                }}
                className="bg-lpCon text-white cursor-pointer "
              >
               <BsArrowUp className="h-full" size={30}/> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contribute;

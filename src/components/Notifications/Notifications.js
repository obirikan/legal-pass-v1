import React from "react";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { togNotification } from "../../redux/notification";
export default function Notifications() {
  const dispatch = useDispatch();

  const handleNotification = () => {
    dispatch(togNotification());
    document.body.style.overflow = "unset";
  };
  return (
    <div style={{zIndex: "150"}} className="fixed w-screen h-screen bg-lpOv opacity- flex flex-col items-center">
      <div className="w-full py-3 px-5">
        <span onClick={handleNotification} className="flex cursor-pointer">
          <HiOutlineChevronLeft color={"#fff"} size={30} />
          <span className="text-white text-lg ml-2">Notification</span>
        </span>{" "}
      </div>
      <div className="mt-4">
        <div style={{ width: "100%" }} className="max-w-lg  ">
          <p className="text-white  text-2xl text-left  font-medium pl-4">New</p>
        </div>
        <div
          style={{ height: "fit-content" }}
          className="bg-white max-w-lg shadow-lg rounded-xl py-3 px-5 m-4"
        >
          <p className="text-gray-400 text-lg font-extralight">
            December 18, 2021 12:26PM
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            dolores commodi hic, suscipit in a veritatis pariatur minus
            consequuntur!
          </p>
        </div>
      </div>
      <div>
        <div style={{ width: "100%" }} className="max-w-lg  ">
          <p className="text-white  text-2xl text-left  font-medium pl-4">Older</p>
        </div>
        <div
          style={{ height: "fit-content" }}
          className="bg-white max-w-lg shadow-lg rounded-xl py-3 px-5 m-4"
        >
          <p className="text-gray-400 text-lg font-extralight">
            December 18, 2021 12:26PM
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            dolores commodi hic, suscipit in a veritatis pariatur minus
            consequuntur! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quae dolores commodi hic, suscipit in a veritatis pariatur
            minus consequuntur!
          </p>
        </div>
        <div
          style={{ height: "fit-content" }}
          className="bg-white max-w-lg shadow-lg rounded-xl py-3 px-5 m-4"
        >
          <p className="text-gray-400 text-lg font-extralight">
            December 18, 2021 12:26PM
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            dolores commodi hic, suscipit in a veritatis pariatur minus minus
            consequuntur!
          </p>
        </div>
      </div>
    </div>
  );
}

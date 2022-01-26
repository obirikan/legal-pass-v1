import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { toggleEp } from "../../redux/editprofile";
import profile from "../../assets/images/profile.jpg";

const Edit = () => {
  const textRef = useRef();
  const dispatch = useDispatch();

  const [clickState, setClickState] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (textRef.current && !textRef.current.contains(event.target)) {
        dispatch(toggleEp());
        document.body.style.overflow = "unset";
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [clickState, dispatch]);

  const handleEditDone = () => {
    dispatch(toggleEp());
  };
  return (
    <div
      style={{ zIndex: "150" }}
      onClick={() => setClickState(!clickState)}
      className="fixed top-0 w-screen h-screen bg-lpOp  flex justify-evenly items-center"
    >
      <div
        ref={textRef}
        className="bg-white h-auto w-[98%] md:w-[400px] shadow-lg rounded-xl py-6 px-6 m-4"
      >
        <div className="flex justify-between mb-5">
          <span
            onClick={handleEditDone}
            className="border-2 cursor-pointer font-semibold lg:text-md text-sm border-black rounded-lgB py-0.5 px-2"
          >
            Back
          </span>
          <span
            onClick={handleEditDone}
            className="border-2 cursor-pointer font-semibold lg:text-md text-sm border-black rounded-lgB py-0.5 px-2"
          >
            Done
          </span>
        </div>
        <img
          style={{ margin: "auto" }}
          className=" object-cover lg:w-32  lg:h-32 w-28 h-28  mr-2 rounded-full block "
          src={profile}
          alt="Profile"
        />
        <p className="text-center mt-1 mb-2">Edit</p>
        <div className=" justify-center items-center flex-col flex">
          <table>
            <tbody>
              <tr>
                <td className="text-sm">Name</td>
                <td>
                  <input
                    style={{ borderRadius: "5px" }}
                    className="bg-lpBg p-1 outline-none"
                    type="text"
                  />
                </td>
              </tr>
              <tr>
                <td className="text-sm">Date of Birth</td>
                <td>
                  <input
                    style={{ borderRadius: "5px", width: "100%" }}
                    className="bg-lpBg p-1 outline-none"
                    type="date"
                  />
                </td>
              </tr>
              <tr>
                <td className="text-sm">Gender</td>
                <td>
                  <input
                    style={{ borderRadius: "5px" }}
                    className="bg-lpBg p-1 outline-none"
                  />
                </td>
              </tr>
              <tr>
                <td className="text-sm">Country</td>
                <td>
                  <input
                    style={{ borderRadius: "5px" }}
                    className="bg-lpBg p-1 outline-none"
                  />
                </td>
              </tr>
              <tr>
                <td className="text-sm">Email</td>
                <td>
                  <input
                    style={{ borderRadius: "5px" }}
                    className="bg-lpBg p-1 outline-none"
                    type="email"
                  />
                </td>
              </tr>
              <tr>
                <td className="text-sm">Phone Number</td>
                <td>
                  <input
                    style={{ borderRadius: "5px" }}
                    className="bg-lpBg p-1 outline-none"
                    type="tel"
                  />
                </td>
              </tr>
              <tr>
                <td className="text-sm">School</td>
                <td>
                  <input
                    style={{ borderRadius: "5px" }}
                    className="bg-lpBg p-1 outline-none"
                  />
                </td>
              </tr>
              <tr>
                <td className="text-sm">Bio</td>
                <td>
                  <textarea
                    style={{ borderRadius: "5px" }}
                    className="bg-lpBg p-1 outline-none w-full"
                    // cols="30"
                    // rows="10"
                  ></textarea>
                  {/* <input className="bg-lpBg p-1 outline-none" /> */}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Edit;

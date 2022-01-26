import React, { useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleLp } from "../../redux/lpmodal";

const LPModal = () => {
  const dispatch = useDispatch();
  const textRef = useRef();

  const [clickState, setClickState] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (textRef.current && !textRef.current.contains(event.target)) {
        dispatch(toggleLp());
        document.body.style.overflow = "unset";
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [clickState, dispatch]);
  return (
    <div
      style={{ zIndex: "150" }}
      onClick={() => setClickState(!clickState)}
      className="fixed w-screen h-screen bg-lpOv opacity- flex justify-evenly items-center"
    >
      <div
      ref={textRef}
      className="bg-white h-auto w-[98%] md:w-[450px] shadow-lg rounded-xl py-6 px-6 m-4"
    >
        <p className="text-2xl text-center font-bold subpixel-antialiased">
          Join Us
        </p>
        <table>
          <tbody>
            <tr>
              <td className="text-sm">Full Name</td>
              <td>
                <input
                  style={{ borderRadius: "5px" }}
                  className="bg-lpBg p-1 outline-none"
                  type="text"
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
              <td className="text-sm">Date of Birth</td>
              <td>
                <input
                  style={{ borderRadius: "5px" }}
                  className="bg-lpBg p-1 outline-none"
                  type="password"
                />
              </td>
            </tr>
            <tr>
              <td className="text-sm">Educational Background</td>
              <td>
                <input
                  style={{ borderRadius: "5px" }}
                  className="bg-lpBg p-1 outline-none"
                />
              </td>
            </tr>
            <tr>
              <td className="text-sm">Level of Education</td>
              <td>
                <input
                  style={{ borderRadius: "5px" }}
                  className="bg-lpBg p-1 outline-none"
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
              <td className="text-sm">Location</td>
              <td>
                <input
                  style={{ borderRadius: "5px" }}
                  className="bg-lpBg p-1 outline-none"
                  type="text"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="text-center mt-10">
          <span
            // onClick={handleSignIn}
            className="rounded-full py-1 px-6 text-black bg-white border-2 border-black inline-block cursor-pointer hover:text-white hover:bg-lpBlue hover:border-lpBlue"
          >
            Submit
          </span>
        </div>
      </div>
    </div>
  );
};

export default LPModal;

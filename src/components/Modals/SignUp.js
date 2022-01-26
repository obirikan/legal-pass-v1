import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleModal } from "../../redux/modal";

import "./SignUp.css";
const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const textRef = useRef();

  const [clickState, setClickState] = useState(false);

  const handleSignUp = () => {
    navigate("/lcommons");
    dispatch(toggleModal(""));
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (textRef.current && !textRef.current.contains(event.target)) {
        dispatch(toggleModal(""));
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
      onClick={() => setClickState(!clickState)}
      className="fixed top-0 w-screen h-screen bg-lpOp  flex justify-evenly items-center"
    >
      <div
        ref={textRef}
        className="bg-white h-5/6 w-full md:w-[400px] shadow-lg rounded-xl py-6 px-6 m-4"
      >
        <h2 className="font-semibold text-2xl">Create Account</h2>
        <div>
          <table>
            <tbody>
              <tr>
                <td className="text-sm">Full Name</td>
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
                  />
                </td>
              </tr>
              <tr>
                <td className="text-sm">Pasword</td>
                <td>
                  <input
                    style={{ borderRadius: "5px" }}
                    className="bg-lpBg p-1 outline-none"
                  />
                </td>
              </tr>
              <tr>
                <td className="text-sm">Confirm Pasword</td>
                <td>
                  <input
                    style={{ borderRadius: "5px" }}
                    className="bg-lpBg p-1 outline-none"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm mt-2">
            I have read and agreed to the{" "}
            <span className="text-lpBlue cursor-pointer">Terms of Use</span> of
            Legal Pass
          </p>
          <div className="text-center mt-10">
            <span
              onClick={handleSignUp}
              className="rounded-full py-1 px-6 text-black bg-white border-2 border-black inline-block cursor-pointer hover:text-white hover:bg-lpBlue hover:border-lpBlue"
            >
              Sign Up
            </span>
            <p className="text-sm mt-2">
              Have an account already?{" "}
              <span
                onClick={() => dispatch(toggleModal("signin"))}
                className="text-lpBlue cursor-pointer"
              >
                Sign In
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

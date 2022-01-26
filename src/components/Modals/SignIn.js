import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../redux/modal";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const textRef = useRef();

  const [clickState, setClickState] = useState(false);

  const handleSignIn = () => {
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
        className="bg-white h-5/6 w-full md:w-[350px] shadow-lg rounded-xl py-6 px-6 m-4"
      >
        <h2 className="font-semibold text-2xl">Create Account</h2>
        <div>
          <table>
            <tbody>
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
                <td className="text-sm">Password</td>
                <td>
                  <input
                    style={{ borderRadius: "5px" }}
                    className="bg-lpBg p-1 outline-none"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <p style={{ textAlign: "right" }} className="text-sm mt-1  w-full">
            Forgot Password?
            <span className="text-lpBlue cursor-pointer">Reset</span>
          </p>
          <div className="text-center mt-10">
            <span
              onClick={handleSignIn}
              className="rounded-full py-1 px-6 text-black bg-white border-2 border-black inline-block cursor-pointer hover:text-white hover:bg-lpBlue hover:border-lpBlue"
            >
              Sign In
            </span>
            <p className="text-sm mt-2">
              Don't have an account?{" "}
              <span
                onClick={() => dispatch(toggleModal("signup"))}
                className="text-lpBlue cursor-pointer"
              >
                Sign Up
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

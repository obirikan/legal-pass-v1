import React from "react";
import {
  MdPhone,
  MdOutlineMailOutline,
  MdOutlineLocationOn,
} from "react-icons/md";
import { BsTwitter, BsFacebook, BsLinkedin } from "react-icons/bs";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Footer = () => {
  const { width } = useWindowDimensions();

  return (
    <footer>
      <div className="bg-lpCon py-5 px-5 w-30 h-auto text-white text-center">
        <div
          className={
            width < 750 ? `grid grid-cols-1 gap-4` : `grid grid-cols-3 gap-4`
          }
          // className="grid grid-cols-2 gap-3"
        >
          <div>
            <p
              style={{
                textAlign: width < 750 ? "left" : "center",
              }}
              className="mb-3 text-2xl"
            >
              Contact Us
            </p>
            <ul>
              <li
                style={{
                  justifyContent: width < 750 ? "flex-start" : "center",
                  fontSize: "14px",
                }}
                className="flex items-center  mb-2 text-center"
              >
                <MdPhone className="mr-2" size={24} />
                +233245300416 | +233201662972
              </li>
              <li
                style={{
                  justifyContent: width < 750 ? "flex-start" : "center",
                  fontSize: "14px",
                }}
                className="flex  items-center mb-2"
              >
                <MdOutlineMailOutline className="mr-2" size={24} />
                legalpass@gmail.com
              </li>
              <li
                style={{
                  justifyContent: width < 750 ? "flex-start" : "center",
                  fontSize: "14px",
                }}
                className="flex  items-center mb-2"
              >
                <MdOutlineLocationOn className="mr-2" size={24} />
                Accra, Ghana
              </li>
            </ul>
          </div>
          <div>
            <h2
              style={{
                textAlign: width < 750 ? "left" : "center",
              }}
              className="mb-3 text-2xl"
            >
              Follow Us
            </h2>
            <div className="flex flex-row  justify-evenly">
              <BsLinkedin
                className="cursor-pointer  mb-2   hover:text-lpBlue "
                size={40}
              />
              <BsFacebook
                className="cursor-pointer  mb-2   hover:text-lpBlue "
                size={40}
              />
              <BsTwitter
                className="cursor-pointer  mb-2   hover:text-lpBlue "
                size={40}
              />
            </div>
          </div>
          <div>
            <h2
              style={{
                textAlign: width < 750 ? "left" : "center",
              }}
              className="mb-3 text-2xl"
            >
              Legal
            </h2>
            <ul>
              <li
                style={{
                  textAlign: width < 750 ? "left" : "center",
                  fontSize: "14px",
                }}
              >
                Terms of Use
              </li>
              <li
                style={{
                  textAlign: width < 750 ? "left" : "center",
                  fontSize: "14px"

                }}
              >
                Privacy
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-lpBlue py-10 px-10 w-30  ">
        <span className="text-3xl font-extrabold text-white ">Legal Pass</span>
        <p style={{ color: "#6770d1" }} className=" mt-5">
          Copyright &copy;2020
        </p>
      </div>
    </footer>
  );
};

export default Footer;

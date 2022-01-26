import React, { useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { publishTog } from "../../redux/publish";

const PublishModal = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const textRef = useRef();

  const [clickState, setClickState] = useState(false);
  const [showTopic, setShowTopic] = useState(false);
  const [topicText, setTopicText] = useState("");

  useEffect(() => {
    function handleClickOutside(event) {
      if (textRef.current && !textRef.current.contains(event.target)) {
        dispatch(publishTog());
        document.body.style.overflow = "unset";
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [clickState, dispatch]);

  function autoGrow() {
    ref.current.style.height = "1px";
    ref.current.style.height = 25 + ref.current.scrollHeight + "px";
  }
  return (
    <div
      style={{ zIndex: "150" }}
      onClick={() => setClickState(!clickState)}
      className="fixed w-screen h-screen bg-lpOv opacity- flex justify-evenly items-center"
    >
      <div
        ref={textRef}
        style={{ height: "fit-content" }}
        className="bg-white lg:max-w-2xl w-76 shadow-lg rounded-3xl py-2.5 px-5 m-7"
      >
        {!showTopic ? (
          <div
            style={{ width: "25rem" }}
            className="flex justify-between border-b-2  pb-1"
          >
            <span className="bg-gray-200 text-gray-600 font-semibold py-3 w-32 text-center rounded-lgB">
              Question
            </span>
            <span
              onClick={() => setShowTopic(true)}
              className="cursor-pointer bg-gray-200 text-gray-600 font-semibold py-3 w-32 text-center rounded-lgB"
            >
              {topicText === "" ? "Topic" : topicText}
            </span>
          </div>
        ) : (
          <div className="border-b-2  pb-1">
            <input
              className="w-full py-1 outline-none"
              placeholder="Enter Topic Here"
              value={topicText}
              onChange={(e) => setTopicText(e.target.value)}
            />
          </div>
        )}
        <textarea
          ref={ref}
          onFocus={() => setShowTopic(false)}
          onKeyUp={autoGrow}
          className="focus:outline-none"
          placeholder="What's on your mind?"
          style={{
            overflow: "hidden",
            width: "100%",
          }}
        ></textarea>
        <div
          style={{ width: "25rem" }}
          className="flex justify-between border-t-2  pt-1"
        >
          <span></span>
          <span className="bg-lpBlue text-white py-3 w-32 text-center rounded-lgB cursor-pointer">
            Publish
          </span>
        </div>
      </div>
    </div>
  );
};

export default PublishModal;

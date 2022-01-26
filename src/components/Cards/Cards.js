import React from "react";
import "./Cards.css";
const Cards = () => {
  return (
    <div>
      <div className="con">
        <div className="card">
          <div className="face face1">
            <div className="content">
              <div className="icon flex flex-col justify-center">
                <p className="text-white text-3xl text-center ">Who are we?</p>
              </div>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              {/* <h3>
                <a href="https://www.linkedin.com/in/adamdipinto/">
                  _adamdipinto
                </a>
              </h3> */}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                distinctio facere aut commodi libero cupiditate repellendus?
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="face face1">
            <div className="content">
              <div className="icon flex flex-col justify-center">
                <p className="text-white text-3xl text-center ">
                  What are we about?
                </p>
              </div>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              {/* <h3>
                <a href="https://twitter.com/AdamDipinto">@AdamDipinto</a>
              </h3> */}
              <p>
                Quas delectus magni nisi quis molestias? Quas non in rerum est
                facilis incidunt ab.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="face face1">
            <div className="content">
              <div className="icon flex flex-col justify-center">
                <p className="text-white text-3xl text-center ">What we do?</p>
              </div>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              {/* <h3>
                <a href="https://github.com/atom888">atom888</a>
              </h3> */}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

import React, { useState } from "react";
import LightLogo from "./assets/img/light-logo.svg";
import CourseImg from "./assets/img/course.png";
import {
  BsCheckCircleFill,
  BsChevronDown,
  BsChevronUp,
  BsCircle,
  BsFillInfoCircleFill,
} from "react-icons/bs";

export const Course = () => {
  const [isBottomVisible, setIsBottomVisible] = useState(false);
  const [isBottomVisible1, setIsBottomVisible1] = useState(false);
  const [isBottomVisible2, setIsBottomVisible2] = useState(false);

  const toggleBottomVisibility = () => {
    setIsBottomVisible(!isBottomVisible);
  };
  const toggleBottomVisibility1 = () => {
    setIsBottomVisible1(!isBottomVisible1);
  };
  const toggleBottomVisibility2 = () => {
    setIsBottomVisible2(!isBottomVisible2);
  };
  return (
    <div className="homepage">
      <main className="homepage" id="home_page">
        <section className="course-section">
          <div className="box-lg">
            <div className="course-grid">
              <div className="course-grid-left">
                <div className="cg-left-top">
                  <img src={LightLogo} alt="" />
                  <h4>
                    Learn Recursion & Dynamic <br /> Programming in The Most
                    <br />
                    Efficient Way
                  </h4>
                  <div className="progressbar-box">
                    <div className="progressbar">
                      <div className="inner-progressbar"></div>
                    </div>
                    <p>35% Complete</p>
                  </div>
                </div>
                <div className="cg-left-bottom">
                  <div className="lesson-timeline-box">
                    <div className="lt-top">
                      <div className="lt-top-left">
                        <BsCircle />
                        <h6>C1. Recursion Basics</h6>
                      </div>
                      <div className="tl-top-right">
                        <span>7/7</span>
                        {isBottomVisible ? (
                          <BsChevronUp onClick={toggleBottomVisibility} />
                        ) : (
                          <BsChevronDown onClick={toggleBottomVisibility} />
                        )}
                      </div>
                    </div>
                    {isBottomVisible && (
                      <div className="lt-bottom">
                        <div className="lt-bottom-left">
                          <BsCheckCircleFill />
                          <h6>L2.1 Introduction</h6>
                        </div>
                        <div className="lt-bottom-left">
                          <BsCheckCircleFill />
                          <h6>L2.2 Fractal Geometry</h6>
                        </div>
                        <div className="lt-bottom-left">
                          <BsCheckCircleFill />
                          <h6>
                            <b>L2.3 Recursion and Self-Similarity</b>
                          </h6>
                        </div>
                        <div className="lt-bottom-left">
                          <BsCheckCircleFill />
                          <h6>L2.4 Cellular Automata</h6>
                        </div>
                        <div className="lt-bottom-left">
                          <BsCheckCircleFill />
                          <h6>L2.5 Chaos Theory</h6>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="lesson-timeline-box">
                    <div className="lt-top">
                      <div className="lt-top-left">
                        <BsCircle />
                        <h6>C2. Self-Similar Algorithms</h6>
                      </div>
                      <div className="tl-top-right">
                        <span>7/7</span>
                        {isBottomVisible1 ? (
                          <BsChevronUp onClick={toggleBottomVisibility1} />
                        ) : (
                          <BsChevronDown onClick={toggleBottomVisibility1} />
                        )}
                      </div>
                    </div>
                    {isBottomVisible1 && (
                      <div className="lt-bottom">
                        <div className="lt-bottom-left">
                          <BsCheckCircleFill />
                          <h6>L2.1 Introduction</h6>
                        </div>
                        <div className="lt-bottom-left">
                          <BsCheckCircleFill />
                          <h6>L2.2 Fractal Geometry</h6>
                        </div>
                        <div className="lt-bottom-left">
                          <BsCheckCircleFill />
                          <h6>
                            <b>L2.3 Recursion and Self-Similarity</b>
                          </h6>
                        </div>
                        <div className="lt-bottom-left">
                          <BsCheckCircleFill />
                          <h6>L2.4 Cellular Automata</h6>
                        </div>
                        <div className="lt-bottom-left">
                          <BsCheckCircleFill />
                          <h6>L2.5 Chaos Theory</h6>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="lesson-timeline-box">
                    <div className="lt-top">
                      <div className="lt-top-left">
                        <BsCircle />
                        <h6>C3. Decision Tree Algorithms</h6>
                      </div>
                      <div className="tl-top-right">
                        <span>0/10</span>
                        {isBottomVisible2 ? (
                          <BsChevronUp onClick={toggleBottomVisibility2} />
                        ) : (
                          <BsChevronDown onClick={toggleBottomVisibility2} />
                        )}
                      </div>
                    </div>
                    {isBottomVisible2 && (
                      <div className="lt-bottom">
                        <div className="lt-bottom-left">
                          <BsCheckCircleFill />
                          <h6>L2.1 Introduction</h6>
                        </div>
                        <div className="lt-bottom-left">
                          <BsCheckCircleFill />
                          <h6>L2.2 Fractal Geometry</h6>
                        </div>
                        <div className="lt-bottom-left ltb-l">
                          <BsCircle />
                          <h5>
                            <b>L2.3 Recursion and Self-Similarity</b>
                          </h5>
                        </div>
                        <div className="lt-bottom-left ltb-l">
                          <BsCircle />
                          <h5>L2.4 Cellular Automata</h5>
                        </div>
                        <div className="lt-bottom-left ltb-l">
                          <BsCircle />
                          <h5>L2.5 Chaos Theory</h5>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="course-grid-right">
                <h6>Chapter 2 | Lesson 3</h6>
                <h1>Recursion and Self-Similarity</h1>
                <img src={CourseImg} alt="" />
                <div className="issue-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <path
                      d="M27.2001 19.9L19.2001 5.5C18.1251 3.5625 16.6376 2.5 15.0001 2.5C13.3626 2.5 11.8751 3.5625 10.8001 5.5L2.80009 19.9C1.78759 21.7375 1.67509 23.5 2.48759 24.8875C3.30009 26.275 4.90009 27.0375 7.00009 27.0375H23.0001C25.1001 27.0375 26.7001 26.275 27.5126 24.8875C28.3251 23.5 28.2126 21.725 27.2001 19.9ZM14.0626 11.25C14.0626 10.7375 14.4876 10.3125 15.0001 10.3125C15.5126 10.3125 15.9376 10.7375 15.9376 11.25V17.5C15.9376 18.0125 15.5126 18.4375 15.0001 18.4375C14.4876 18.4375 14.0626 18.0125 14.0626 17.5V11.25ZM15.8876 22.1375C15.8251 22.1875 15.7626 22.2375 15.7001 22.2875C15.6251 22.3375 15.5501 22.375 15.4751 22.4C15.4001 22.4375 15.3251 22.4625 15.2376 22.475C15.1626 22.4875 15.0751 22.5 15.0001 22.5C14.9251 22.5 14.8376 22.4875 14.7501 22.475C14.6751 22.4625 14.6001 22.4375 14.5251 22.4C14.4501 22.375 14.3751 22.3375 14.3001 22.2875C14.2376 22.2375 14.1751 22.1875 14.1126 22.1375C13.8876 21.9 13.7501 21.575 13.7501 21.25C13.7501 20.925 13.8876 20.6 14.1126 20.3625C14.1751 20.3125 14.2376 20.2625 14.3001 20.2125C14.3751 20.1625 14.4501 20.125 14.5251 20.1C14.6001 20.0625 14.6751 20.0375 14.7501 20.025C14.9126 19.9875 15.0876 19.9875 15.2376 20.025C15.3251 20.0375 15.4001 20.0625 15.4751 20.1C15.5501 20.125 15.6251 20.1625 15.7001 20.2125C15.7626 20.2625 15.8251 20.3125 15.8876 20.3625C16.1126 20.6 16.2501 20.925 16.2501 21.25C16.2501 21.575 16.1126 21.9 15.8876 22.1375Z"
                      fill="#F59E0B"
                    />
                  </svg>
                  <span>
                    Known Issues/Limitations{" "}
                    <h6>
                      Review the documentation to learn about potential
                      compatibility issues with specific database versions.
                    </h6>
                  </span>
                </div>
                <div className="course-text">
                  <h5>Notes</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </p>
                </div>
                <div className="course-text">
                  <h5>Resources</h5>
                  <a href="https://recurofy.com/resouces/c2l3/1">
                    https://recurofy.com/resouces/c2l3/1
                  </a>
                  <a href="https://recurofy.com/resouces/c2l3/1">
                    https://recurofy.com/resouces/c2l3/2
                  </a>
                  <a href="https://recurofy.com/resouces/c2l3/1">
                    https://recurofy.com/resouces/c2l3/3
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="login-popup">
          <div className="login-content">
            <img src={LightLogo} alt="" />
            <h5>Login to Recurofy</h5>
            <p>You need to login before you can purchase Recurofy course</p>
            <div className="lc-btn-box">
              <button className="face-btn">Sign In with Facebook</button>
              <button className="goog-btn">Sign In with Google</button>
              <button className="appl-btn">Sign In with Apple</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Course;

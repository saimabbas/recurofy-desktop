import React, { useState } from "react";
import "./home.css";
import Herobg from "./assets/img/hero-bg.png";
import Logo from "./assets/img/Logo.png";
import CostLogo from "./assets/img/cost-logo.svg";
import HeroImg from "./assets/img/hero-img.png";
import Feature1 from "./assets/img/quality-lessons.png";
import Feature2 from "./assets/img/time.png";
import Feature3 from "./assets/img/bro.png";
import Videobg from "./assets/img/video-bg.png";
import Profile from "./assets/img/profile.png";
import Tick from "./assets/img/tick-square.svg";
import FooterLogo from "./assets/img/recurofy-footer.png";
import "bootstrap/dist/css/bootstrap.min.css";
import CircleMesh from "./assets/img/mesh-circle.png";
import CircleMesh2 from "./assets/img/Mesh2.png";
import Line from "./assets/img/testimonial-line.png";
import Line2 from "./assets/img/footer-line.png";
import LightLogo from "./assets/img/light-logo.svg";
// import GoogleLogo from "./assets/img/GoogleLogo.svg";
import MasterCard from "./assets/img/Mastercard.svg";
import VisaCard from "./assets/img/visa-logo.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import {
  BsChevronRight,
  BsChevronLeft,
  BsFillStarFill,
  BsChevronDown,
  BsList,
  BsXLg,
  BsFacebook,
  BsApple,
  BsGoogle,
} from "react-icons/bs";

import Accordion from "react-bootstrap/Accordion";
import { Link, Route, Switch } from "react-router-dom";

function Home(props) {
  const [isActive, setIsActive] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [isPopUp2Open, setIsPopUp2Open] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Toggle Popup visibility
  const togglePopUp = () => {
    setIsPopUpOpen(!isPopUpOpen);
  };
  const closePopUp = () => {
    setIsPopUpOpen(false);
  };

  // Toggle Popup visibility
  const togglePopUp2 = () => {
    setIsPopUp2Open(!isPopUp2Open);
  };
  const closePopUp2 = () => {
    setIsPopUp2Open(false);
  };

  return (
    <div className="homepage">
      <main className="homepage" id="home_page">
        <section className="head-hero-section">
          <img src={Herobg} alt="" className="wave-bg-img" />
          <img src={CircleMesh} alt="" className="cm-1" />
          <header>
            <div className="box">
              <div className="header_cont">
                <Link to="#">
                  {" "}
                  <img src={Logo} alt="" />
                </Link>
                <div className="header_right">
                  <Link
                    to="#"
                    className={`${
                      props.isActive == "features" ? "active" : ""
                    }`}
                  >
                    Features
                  </Link>
                  <Link to="#">Instructor</Link>
                  <Link to="#" onClick={togglePopUp2}>
                    Pricing
                  </Link>
                  <Link to="#">Testimonials</Link>
                  <Link to="#">FAQs</Link>
                  <Link to="#" onClick={togglePopUp}>
                    Contact
                  </Link>
                </div>
                <BsList className="mob-hamburger" onClick={toggleMobileMenu} />
                {isMobileMenuOpen && (
                  <div className="mobile-menu">
                    <div className="mobile-menu-top">
                      <Link to="/">
                        <img src={Logo} alt="" />
                      </Link>
                      <BsXLg onClick={closeMobileMenu} />
                    </div>
                    <div className="mobile-menu-bottom">
                      <Link to="#">Features</Link>
                      <Link to="#">Instructor</Link>
                      <Link to="#">Pricing</Link>
                      <Link to="#">Testimonials</Link>
                      <Link to="#">FAQs</Link>
                      <Link to="#">Contact</Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </header>
          <div className="hero-section">
            <div className="box">
              <div className="hero-content">
                <div className="hero-cont-left">
                  <h1 className="gradient-text">Recurofy</h1>
                  <h2>
                    Learn Recursion & Dynamic Programming in The Most Effecient
                    Way
                  </h2>
                  <p>
                    Unlock the Power of Recursive Thinking with Recurofy: Your
                    Ultimate Guide to Mastering Fractals, Recursion, and Dynamic
                    Programming. This premium course offers a deep dive into
                    complex concepts, equipping you with the skills to excel in
                    advanced programming techniques.
                  </p>
                  <Link to="/course">
                    <button className="gradient-btn">
                      Purchase Now ($9.99)
                    </button>
                  </Link>
                </div>
                <div className="hero-cont-right">
                  <img src={HeroImg} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="hero-bottom">
            <img src={CircleMesh2} alt="" className="cm-2" />
            <div className="box">
              <div className="hero-bottom-box">
                <div className="hb-content">
                  <p>Number of Students</p>
                  <h6>5,500</h6>
                </div>
                <div className="hb-content">
                  <p>Course Completion Rate</p>
                  <h6>98%</h6>
                </div>
                <div className="hb-content">
                  <p>Number of Videos</p>
                  <h6>35</h6>
                </div>
                <div className="hb-content">
                  <p>Average Rating</p>
                  <h6>4.85</h6>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="features-section">
          <div className="box">
            <div className="feature-grid-cont">
              <div className="feature-grid">
                <img src={Feature1} alt="" />
                <div className="feature-content">
                  <h4 className="gradient-text">Quality Lessons</h4>
                  <p>
                    Embark on a transformative learning journey with our lessons
                    on recursion and dynamic programming. Experience the
                    simplicity of complex concepts through our carefully crafted
                    content. Utilizing custom animations and engaging
                    narratives, each lesson is designed to make learning
                    intuitive and enjoyable. <br />
                    <br />
                    These lessons go beyond traditional education, providing a
                    visual and interactive experience that brings coding
                    principles to life. Immerse yourself in the art of
                    understanding as our lessons unfold, offering a unique
                    approach to mastering recursion and dynamic programming.
                  </p>
                </div>
              </div>
              <div className="feature-grid fg-2">
                <div className="feature-content">
                  <h4 className="gradient-text">Save Time</h4>
                  <p>
                    Are you fed up with solving countless recursive and dynamic
                    programming problems, only to cross your fingers for a
                    similar one in your technical interview? Look no further!
                    Recurofy introduces a practical framework that not only
                    educates you on the essentials but also equips you to tackle
                    unfamiliar challenges with efficiency. Bid farewell to the
                    repetitive drill of solving example problems.
                    <br />
                    <br />
                    Our approach empowers you to master new problems in a
                    fraction of the time it takes to navigate through countless
                    examples. Transform your preparation, save valuable time,
                    and embrace a smarter way to learn with Recurofy's strategic
                    approach.
                  </p>
                </div>
                <img src={Feature2} alt="" />
              </div>
              <div className="feature-grid">
                <img src={Feature3} alt="" />
                <div className="feature-content">
                  <h4 className="gradient-text">Hands On</h4>
                  <p>
                    Engage in practical coding with our interactive course,
                    where you can actively solve problems while watching the
                    lessons. This hands-on approach allows you to apply the
                    principles of recursion and dynamic programming in
                    real-time.
                    <br />
                    <br />
                    Unlike other platforms, we focus on the essentials,
                    providing targeted problems to reinforce your skills. Even
                    after completing the course, you'll find additional
                    challenges to sharpen your abilities. Embrace the journey of
                    hands-on learning, turning theory into tangible coding
                    expertise. Elevate your skills with focused practice and
                    make every coding session count.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="video-section">
          <img src={Videobg} alt="" />
          <div className="box">
            <div className="video-content">
              <iframe
                src="https://www.youtube.com/embed/h-rRgpPbR5w"
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
        <section className="about-us">
          <div className="box">
            <div className="aboutus-content">
              <h3 className="gradient-text">About Instructor</h3>
              <div className="aboutus-profile">
                <img src={Profile} alt="" />
                <div className="aup-text">
                  <h4>
                    Joseph Mipatchen{" "}
                    <Link to="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="36"
                        viewBox="0 0 35 36"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_576_410)">
                          <path
                            d="M17.5 35.5C27.165 35.5 35 27.665 35 18C35 8.33502 27.165 0.5 17.5 0.5C7.83502 0.5 0 8.33502 0 18C0 27.665 7.83502 35.5 17.5 35.5Z"
                            fill="#007AB9"
                          />
                          <path
                            d="M27.956 19.4082V26.623H23.773V19.8917C23.773 18.2015 23.169 17.0473 21.6545 17.0473C20.4987 17.0473 19.8121 17.8244 19.5089 18.5768C19.3987 18.8457 19.3704 19.2191 19.3704 19.5963V26.6227H15.187C15.187 26.6227 15.2432 15.222 15.187 14.0419H19.3707V15.8247C19.3622 15.8388 19.3504 15.8525 19.3429 15.8659H19.3707V15.8247C19.9266 14.9694 20.918 13.7465 23.1406 13.7465C25.8927 13.7465 27.956 15.5446 27.956 19.4082ZM10.811 7.97754C9.38002 7.97754 8.44385 8.91683 8.44385 10.1509C8.44385 11.3588 9.35288 12.3252 10.7561 12.3252H10.7832C12.2422 12.3252 13.1494 11.3588 13.1494 10.1509C13.1216 8.91683 12.2422 7.97754 10.811 7.97754ZM8.69247 26.623H12.8742V14.0419H8.69247V26.623Z"
                            fill="#F1F2F2"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_576_410">
                            <rect
                              width="35"
                              height="35"
                              fill="white"
                              transform="translate(0 0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                  </h4>
                  <h6>Software Engineer at Amazon</h6>
                </div>
              </div>
              <p>
                Engage in practical coding with our interactive course, where
                you can actively solve problems while watching the lessons. This
                hands-on approach allows you to apply the principles of
                recursion and dynamic programming in real-time. Unlike other
                platforms, we focus on the essentials, providing targeted
                problems to reinforce your skills. Even after completing the
                course, you'll find additional challenges to sharpen your
                abilities.
              </p>
            </div>
          </div>
        </section>
        <section className="price-section">
          <img src={CircleMesh} alt="" className="cm-1" />
          <img src={CircleMesh2} alt="" className="cm-3" />
          <div className="box">
            <div className="price-cont">
              <h3 className="gradient-text">So What Does This Cost?</h3>
              <p>
                We're saving you the hassle of hundreds of dollars and doing it
                all fast, but don't worry, we're not overcharging you.
              </p>
              <div className="price-grid">
                <div className="price-g-left">
                  <div className="pgl-top">
                    <h5>Pay Once, Have Forever</h5>
                    <p>Everything is included in this price package</p>
                  </div>
                  <div className="pgl-bottom">
                    <div>
                      <span>$25</span>
                      <h4>$9.99</h4>
                    </div>
                    <h6>*One Time Payment</h6>
                  </div>
                  <Link to="#">
                    <button className="gradient-btn">
                      Purchase Now ($9.99)
                    </button>
                  </Link>
                </div>
                <div className="price-g-right">
                  <img src={CostLogo} alt="" className="pgr-img" />
                  <div className="pgr-box">
                    <div>
                      <img src={Tick} alt="" />
                      <h6>Exceptional Value for Money</h6>
                    </div>
                    <div>
                      <img src={Tick} alt="" />
                      <h6>Engaged and Supportive Community</h6>
                    </div>
                    <div>
                      <img src={Tick} alt="" />
                      <h6>Hands-on Interactive Learning Approach</h6>
                    </div>
                    <div>
                      <img src={Tick} alt="" />
                      <h6>24/7 Expert Live Support</h6>
                    </div>
                    <div>
                      <img src={Tick} alt="" />
                      <h6>Real-world Applications</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="team-section">
          <img src={Line} alt="" className="ts-line" />
          <div className="box">
            <div className="swiper-head">
              <h2 className="gradient-text">
                What Our Students Are <br />
                Saying About Us
              </h2>
              <div className="sh-right">
                <span className="team-prev">
                  <BsChevronLeft />
                </span>
                <span className="team-next">
                  <BsChevronRight />
                </span>
              </div>
            </div>
            <Swiper
              spaceBetween={15}
              slidesPerView={1.05}
              modules={[Navigation]}
              navigation={{
                nextEl: ".team-next",
                prevEl: ".team-prev",
              }}
              breakpoints={{
                750: {
                  slidesPerView: 1.5,
                  spaceBetween: 25,
                },
                1100: {
                  slidesPerView: 3.15,
                },
              }}
            >
              <SwiperSlide>
                <div className="team-card">
                  <p>
                    Tackling the Recursion and Dynamic Programming course was
                    like embarking on an intellectual adventure. Initially, the
                    concepts seemed daunting, but as I dove deeper, everything
                    started to click. The course's practical approach, with its
                    emphasis on problem-solving and real-world applications,
                    truly demystified these topics for me. It's not just a
                    course; it's a brain gym where I strengthened my logical and
                    analytical muscles.
                  </p>
                  <div className="team-bottom">
                    <img src={Profile} alt="" />
                    <div className="tb-text">
                      <h6>John Smith</h6>
                      <div>
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="team-card">
                  <p>
                    Tackling the Recursion and Dynamic Programming course was
                    like embarking on an intellectual adventure. Initially, the
                    concepts seemed daunting, but as I dove deeper, everything
                    started to click. The course's practical approach, with its
                    emphasis on problem-solving and real-world applications,
                    truly demystified these topics for me. It's not just a
                    course; it's a brain gym where I strengthened my logical and
                    analytical muscles.
                  </p>
                  <div className="team-bottom">
                    <img src={Profile} alt="" />
                    <div className="tb-text">
                      <h6>John Smith</h6>
                      <div>
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="team-card">
                  <p>
                    Tackling the Recursion and Dynamic Programming course was
                    like embarking on an intellectual adventure. Initially, the
                    concepts seemed daunting, but as I dove deeper, everything
                    started to click. The course's practical approach, with its
                    emphasis on problem-solving and real-world applications,
                    truly demystified these topics for me. It's not just a
                    course; it's a brain gym where I strengthened my logical and
                    analytical muscles.
                  </p>
                  <div className="team-bottom">
                    <img src={Profile} alt="" />
                    <div className="tb-text">
                      <h6>John Smith</h6>
                      <div>
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="team-card">
                  <p>
                    Tackling the Recursion and Dynamic Programming course was
                    like embarking on an intellectual adventure. Initially, the
                    concepts seemed daunting, but as I dove deeper, everything
                    started to click. The course's practical approach, with its
                    emphasis on problem-solving and real-world applications,
                    truly demystified these topics for me. It's not just a
                    course; it's a brain gym where I strengthened my logical and
                    analytical muscles.
                  </p>
                  <div className="team-bottom">
                    <img src={Profile} alt="" />
                    <div className="tb-text">
                      <h6>John Smith</h6>
                      <div>
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="team-card">
                  <p>
                    Tackling the Recursion and Dynamic Programming course was
                    like embarking on an intellectual adventure. Initially, the
                    concepts seemed daunting, but as I dove deeper, everything
                    started to click. The course's practical approach, with its
                    emphasis on problem-solving and real-world applications,
                    truly demystified these topics for me. It's not just a
                    course; it's a brain gym where I strengthened my logical and
                    analytical muscles.
                  </p>
                  <div className="team-bottom">
                    <img src={Profile} alt="" />
                    <div className="tb-text">
                      <h6>John Smith</h6>
                      <div>
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section className="faq-section">
          <img src={CircleMesh} alt="" className="cm-4" />
          <img src={CircleMesh} alt="" className="cm-5" />
          <img src={Line2} alt="" className="footer-line" />
          <div className="box">
            <div className="faq-content">
              <h3 className="gradient-text">Frequently Asked Questions</h3>
              <div className="faq-accordian-box">
                <Accordion defaultActiveKey={["0"]} alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <h5>
                        How frequently am I supposed to pay for this course?
                      </h5>
                      <BsChevronDown />
                    </Accordion.Header>
                    <Accordion.Body>
                      Investing in this course is both economical and practical.
                      With a single payment of $9.99, you unlock lifetime access
                      to a wealth of knowledge and resources. This one-off
                      payment model not only makes it affordable but also
                      ensures that you can learn at your own pace without
                      worrying about recurring fees. It's designed to be a
                      cost-effective solution for those eager to expand their
                      skills without the financial burden of subscription-based
                      models. Consider this a small investment in your personal
                      or professional development that pays dividends in
                      knowledge and expertise over time.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <h5>
                        How frequently am I supposed to pay for this course?
                      </h5>
                      <BsChevronDown />
                    </Accordion.Header>
                    <Accordion.Body>
                      Investing in this course is both economical and practical.
                      With a single payment of $9.99, you unlock lifetime access
                      to a wealth of knowledge and resources. This one-off
                      payment model not only makes it affordable but also
                      ensures that you can learn at your own pace without
                      worrying about recurring fees. It's designed to be a
                      cost-effective solution for those eager to expand their
                      skills without the financial burden of subscription-based
                      models. Consider this a small investment in your personal
                      or professional development that pays dividends in
                      knowledge and expertise over time.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <h5>
                        How frequently am I supposed to pay for this course?
                      </h5>
                      <BsChevronDown />
                    </Accordion.Header>
                    <Accordion.Body>
                      Investing in this course is both economical and practical.
                      With a single payment of $9.99, you unlock lifetime access
                      to a wealth of knowledge and resources. This one-off
                      payment model not only makes it affordable but also
                      ensures that you can learn at your own pace without
                      worrying about recurring fees. It's designed to be a
                      cost-effective solution for those eager to expand their
                      skills without the financial burden of subscription-based
                      models. Consider this a small investment in your personal
                      or professional development that pays dividends in
                      knowledge and expertise over time.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      <h5>
                        How frequently am I supposed to pay for this course?
                      </h5>
                      <BsChevronDown />
                    </Accordion.Header>
                    <Accordion.Body>
                      Investing in this course is both economical and practical.
                      With a single payment of $9.99, you unlock lifetime access
                      to a wealth of knowledge and resources. This one-off
                      payment model not only makes it affordable but also
                      ensures that you can learn at your own pace without
                      worrying about recurring fees. It's designed to be a
                      cost-effective solution for those eager to expand their
                      skills without the financial burden of subscription-based
                      models. Consider this a small investment in your personal
                      or professional development that pays dividends in
                      knowledge and expertise over time.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      <h5>
                        How frequently am I supposed to pay for this course?
                      </h5>
                      <BsChevronDown />
                    </Accordion.Header>
                    <Accordion.Body>
                      Investing in this course is both economical and practical.
                      With a single payment of $9.99, you unlock lifetime access
                      to a wealth of knowledge and resources. This one-off
                      payment model not only makes it affordable but also
                      ensures that you can learn at your own pace without
                      worrying about recurring fees. It's designed to be a
                      cost-effective solution for those eager to expand their
                      skills without the financial burden of subscription-based
                      models. Consider this a small investment in your personal
                      or professional development that pays dividends in
                      knowledge and expertise over time.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>
                      <h5>
                        How frequently am I supposed to pay for this course?
                      </h5>
                      <BsChevronDown />
                    </Accordion.Header>
                    <Accordion.Body>
                      Investing in this course is both economical and practical.
                      With a single payment of $9.99, you unlock lifetime access
                      to a wealth of knowledge and resources. This one-off
                      payment model not only makes it affordable but also
                      ensures that you can learn at your own pace without
                      worrying about recurring fees. It's designed to be a
                      cost-effective solution for those eager to expand their
                      skills without the financial burden of subscription-based
                      models. Consider this a small investment in your personal
                      or professional development that pays dividends in
                      knowledge and expertise over time.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <h6>
                <span className="gradient-text">Still need help?</span> Contact
                us at <Link to="#">help@recurofy.com</Link>
              </h6>
              <Link to="#">
                <img src={FooterLogo} alt="" />
              </Link>
            </div>
          </div>
        </section>
        {isPopUpOpen && (
          <div className="popup-container">
            <div className="login-popup">
              <div className="login-content">
                <span onClick={closePopUp}>
                  <BsXLg />
                </span>
                <img src={LightLogo} alt="" />
                <h5>Login to Recurofy</h5>
                <p>You need to login before you can purchase Recurofy course</p>
                <div className="lc-btn-box">
                  <button className="face-btn">
                    <BsFacebook />
                    Sign In with Facebook
                  </button>
                  <button className="goog-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <rect width="24" height="24" fill="white" />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M23.04 12.2615C23.04 11.446 22.9668 10.6619 22.8309 9.90918H12V14.3576H18.1891C17.9225 15.7951 17.1123 17.013 15.8943 17.8285V20.714H19.6109C21.7855 18.7119 23.04 15.7637 23.04 12.2615Z"
                        fill="#4285F4"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 23.4998C15.105 23.4998 17.7081 22.47 19.6109 20.7137L15.8943 17.8282C14.8645 18.5182 13.5472 18.9259 12 18.9259C9.00474 18.9259 6.46951 16.903 5.56519 14.1848H1.72314V17.1644C3.61542 20.9228 7.50451 23.4998 12 23.4998Z"
                        fill="#34A853"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.56523 14.185C5.33523 13.495 5.20455 12.7579 5.20455 12C5.20455 11.242 5.33523 10.505 5.56523 9.81499V6.83545H1.72318C0.944318 8.38795 0.5 10.1443 0.5 12C0.5 13.8557 0.944318 15.612 1.72318 17.1645L5.56523 14.185Z"
                        fill="#FBBC05"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 5.07386C13.6884 5.07386 15.2043 5.65409 16.3961 6.79364L19.6945 3.49523C17.7029 1.63955 15.0997 0.5 12 0.5C7.50451 0.5 3.61542 3.07705 1.72314 6.83545L5.56519 9.815C6.46951 7.09682 9.00474 5.07386 12 5.07386Z"
                        fill="#EA4335"
                      />
                    </svg>
                    Sign In with Google
                  </button>
                  <button className="appl-btn">
                    <BsApple />
                    Sign In with Apple
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {isPopUp2Open && (
          <div className="popup-container">
            <div className="pricing-popup">
              <div className="pricing-content">
                <span onClick={closePopUp2}>
                  <BsXLg />
                </span>
                <div className="pricing-cont-left">
                  <h3>Add Payment Method</h3>
                  <div className="pc-input">
                    <div>
                      <label htmlFor="cardholderName">Cardholder Name</label>
                      <input type="text" id="cardholderName" />
                    </div>

                    <div>
                      <label htmlFor="cardNumber">Card Number</label>
                      <input type="text" id="cardNumber" />
                    </div>

                    <div>
                      <label htmlFor="cvv">CVV</label>
                      <input type="text" id="cvv" />
                    </div>

                    <div>
                      <label htmlFor="expiryDate">Expiry Date</label>
                      <input type="text" id="expiryDate" />
                    </div>
                    <label htmlFor="rememberCard">
                      <input type="checkbox" id="rememberCard" />I agree with
                      terms of conditions
                    </label>
                  </div>
                  <Link to="#">
                    <button className="gradient-btn">
                      Purchase Now ($9.99)
                    </button>
                  </Link>
                </div>
                <div className="pricing-cont-right">
                  <div className="pc-total">
                    <h5>Order Summary</h5>
                    <h6>
                      Recurofy Course <h5>$9.99</h5>
                    </h6>
                    <div></div>
                    <h6>
                      Total <h5>$9.99</h5>
                    </h6>
                  </div>
                  <div className="pc-cards-box">
                    <div className="pc-cards">
                      <img src={MasterCard} alt="" />
                    </div>
                    <div className="pc-cards">
                      <img src={VisaCard} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Home;

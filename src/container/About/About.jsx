// import { useState, useEffect } from "react";
import "./About.scss";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { urlFor, client } from "../../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      {/* <h2 className="head-text">
          I know that <span>Good Dev</span>
          <br /> means <span>Good Business</span>
        </h2> */}
      <div className="app__about-content">
        <div className="app__about-profile-pic">
          <img src={images.profileAbout} alt="Profile_bg" />
        </div>
        <div className="app__about-summary">
          {/* <section className="app__about-summary"> */}
          <h2 className="head-text">
            About <span>Me</span>
          </h2>
          <p>
            My name is Aditya Kumar Sharma and am 21 years old. I am currently
            pursuing B.Tech from NIT Warangal India in Computer Science and
            Engineering department from 2019 - 2023. <br></br>I have been a
            basketball club member in my school time and was a member of a
            Ethical hacking club named 'Cybsec' in my first year in college. I
            like playing basketball, skateboarding and reading books.
          </p>
          {/* </section> */}
        </div>
      </div>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>

            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);

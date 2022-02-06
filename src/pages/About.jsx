import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="mb-4 text-6xl">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to starch GitHub profiles and aee profile details. This
        project is a part of the{" "}
        <a href="https://www.udemy.com/course/modern-react-front-to-back">
          React Front To Back
        </a>{" "}
        Udemy course by{" "}
        <strong>
          <a href="https://traversymedia.com">Brad Traversy</a>
        </strong>
        .
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Layout by:
        <a href="https://twitter.com/soyabmostofa" className="ml-1 text-white">
          Soyab Mostofa
        </a>
      </p>
    </div>
  );
};

export default About;

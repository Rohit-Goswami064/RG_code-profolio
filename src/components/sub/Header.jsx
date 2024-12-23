import React from "react";

const Header = ({ text }) => {
  return (
    <h1 className=" text-3xl sm:text-2xl font-bold text-gray-600 mb-14 self-start dark:text-blue-500 transition-colors">
      {text}
    </h1>
  );
};

export default Header;

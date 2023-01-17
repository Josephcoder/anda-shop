import React from "react";

const FeaturedTitle = ({ text, className }) => (
  <h1 className={className + " text-2xl py-4 text-gray-900 font-semibold"}>
    {text}
  </h1>
);

export default FeaturedTitle;

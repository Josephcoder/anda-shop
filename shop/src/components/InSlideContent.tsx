import React from "react";
import styles from "../style";
import { discount } from "../assets";

const InSlideContent = () => (
  <div className="flex flex-col item-center py-[6px] px-4 bg-gray-800 w-[700px]">
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6  w-full`}
    >
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span> Discount For{" "}
          <span className="text-white">bulk order</span> Account
        </p>
      </div>
      <h1 className="font-poppins font-semibold ss:text-[50px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
        The Next <br className="sm:block hidden" />{" "}
        <span className="text-gradient">Generation</span>{" "}
      </h1>
    </div>
  </div>
);

export default InSlideContent;

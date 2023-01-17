import React from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { Shoes, Comeka, DownShoes } from "../assets";

const ProductCard = ({ item }) => {
  const { title, url } = item;

  const renderTitle = (title) => {
    return title.length > 80 ? title.substr(0, 80).trim() + "..." : title;
  };

  // const renderDesc = (desc) => {
  //   return desc.length > 100 ? desc.substr(0, 100).trim() + "..." : desc;
  // };

  return (
    <div className="flex flex-col justify-between">
      <div className="bg-gray-200 p-2 rounded-md box-shadow relative">
        <div className="cursor-pointer">
          <img src={url} alt="" className="object-cover h-48 w-96" />
        </div>
        <div className="flex mt-2 justify-between items-center">
          <MdOutlineAddShoppingCart className="bg-orange-gradient rounded-full text-white p-1 w-8 h-8  cursor-pointer" />
          <AiOutlineHeart className="bg-orange-gradient rounded-full text-white p-1 w-8 h-8  cursor-pointer" />
          <button className="bg-orange-gradient text-white px-2 rounded py-1  cursor-pointer">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;

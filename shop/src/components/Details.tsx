import React from "react";
import { products_row_one, slideImages, socialMedia } from "../constants";
import styles from "../style";
import ProductList from "./ProductList";

const Details = () => (
  <div className={`grid bg-white  ${styles.padding} ${styles.flexCenter}`}>
    <div className={`grid md:grid-cols-2  ${styles.boxWidth}`}>
      <div className="flex gap-2">
        <div className="sm:flex hidden flex-shrink-0 flex-col gap-y-2">
          <img
            src={products_row_one[0].url}
            alt="product"
            className="w-60 h-32"
          />
          <img
            src={products_row_one[0].url}
            alt="product"
            className="w-60 h-32"
          />
          <img
            src={products_row_one[0].url}
            alt="product"
            className="w-60 h-32"
          />
        </div>
        <div className="flex">
          <img src={products_row_one[0].url} alt="product" />
        </div>
      </div>
      <div className="md:ml-10 font-poppins">
        <div className="flex flex-col text-gray-600">
          <div className="font-bold">
            <h1 className="text-2xl">Products description</h1>
            <p className="my-2">
              RWF{" "}
              <label className="font-normal" htmlFor="price">
                5000
              </label>
            </p>
          </div>
          <hr className="h-px my-2 bg-gray-200 border-0" />
          <div className="">
            <h1 className="text-[18px] font-bold">Product information</h1>
            <table>
              <tr>
                <td>Length:</td>
                <td className="pl-10">17cm</td>
              </tr>
              <tr>
                <td>Height:</td>
                <td className="pl-10">17cm</td>
              </tr>
              <tr>
                <td>Depth:</td>
                <td className="pl-10">17cm</td>
              </tr>
              <tr>
                <td>Composition:</td>
                <td className="pl-10">17cm</td>
              </tr>
            </table>
          </div>
          <hr className="h-px my-2 bg-gray-200 border-0" />
          <div className="flex flex-cols justify-between mb-1">
            <div>
              <h1 className="text-[18px] font-bold">Color</h1>
              <div className="flex flex-row space-x-1">
                <div className="h-5 w-5 bg-gray-500" />
                <div className="h-5 w-5 bg-black" />
                <div className="h-5 w-5 bg-red-800" />
                <div className="h-5 w-5 bg-blue-800" />
                <div className="h-5 w-5 bg-green-800" />
              </div>
            </div>
            <div>
              <h1 className="text-[18px] font-bold">Size</h1>
              <div className="flex flex-row space-x-1 font-medium">
                <div className="bg-gray-100 px-2 py-1">XL</div>
                <div className="bg-gray-100 px-2 py-1">MD</div>
                <div className="bg-gray-100 px-2 py-1">XS</div>
                <div className="bg-gray-100 px-2 py-1">SM</div>
              </div>
            </div>
          </div>
          <hr className="h-px my-2 bg-gray-200 border-0" />
          <div className="">
            <h1 className="text-[18px] font-bold">Address</h1>
            <div className="flex flex-row">
              {socialMedia.map((social, index) => (
                <img
                  key={social.id}
                  src={social.icon}
                  alt={social.id}
                  className={`w-[25px] h-[25px] object-contain p-1 rounded-md bg-orange-gradient cursor-pointer ${
                    index !== socialMedia.length - 1 ? "mr-2" : "mr-0"
                  }`}
                  onClick={() => window.open(social.link)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={`text-2xl font-semibold ${styles.marginY}`}>
      <h1 className="mb-8">Lated products</h1>
      <div className="grid grid-cols-5 gap-y-2">
        <div className="h-32 w-60 bg-slate-600"></div>
        <div className="h-32 w-60 bg-slate-600"></div>
        <div className="h-32 w-60 bg-slate-600"></div>
        <div className="h-32 w-60 bg-slate-600"></div>
        <div className="h-32 w-60 bg-slate-600"></div>
        <div className="h-32 w-60 bg-slate-600"></div>
      </div>
    </div>
  </div>
);

export default Details;

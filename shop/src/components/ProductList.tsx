import React from "react";
import FeaturedTitle from "./FeaturedTitle";
import ProductCard from "./ProductCard";
import { Shoes, Comeka, DownShoes } from "../assets";
import styles from "../style";

const ProductList = ({ heading, data }) => (
  <div className={`${styles.boxWidth}`}>
    <FeaturedTitle
      className="font-poppins mb-4 text-4xl font-extrabold text-gray-900 drop-shadow-md shadow-gray-900/50"
      text={heading}
    />
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-6 relative">
      {data.map((product) => {
        return <ProductCard key={product.id} item={product} />;
      })}
    </div>
  </div>
);

export default ProductList;

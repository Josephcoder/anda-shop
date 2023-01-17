import styles from "../style";
import TopSlide from "./TopSlide";
import Footer from "./Footer";
import ProductList from "./ProductList";
import { products_row_one, slideImages } from "../constants";

const Home = () => (
  <div>
    <div className={`bg-white ${styles.flexStart}`}>
      <div className={` flex flex-row ${styles.boxWidth}`}>
        <TopSlide />
      </div>
    </div>

    <div className={`bg-white ${styles.padding} ${styles.flexCenter}`}>
      <ProductList heading="Men shoes" data={slideImages} />
    </div>
    <div className={`bg-white ${styles.padding} ${styles.flexCenter}`}>
      <ProductList heading="Women shoes" data={products_row_one} />
    </div>
    <div className={`bg-white ${styles.padding} ${styles.flexCenter}`}></div>
  </div>
);

export default Home;

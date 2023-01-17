import React from "react";
import styles from "./style";
import { Details, Footer, Home, Navbar } from "./components";
import { Route, Router, Routes } from "react-router-dom";
const App = () => (
  <div className="bg-white w-full overflow-hidden">
    <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/details" element={<Details />} />
    </Routes>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
);

export default App;

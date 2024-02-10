import React from "react";
import ShopByBrand from "../components/ShopByBrand";
import ShopByCategory from "../components/ShopByCategory";
import Widgets from "../components/Widgets";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <ShopByBrand />
      <ShopByCategory />
      <Widgets/>
    </div>
  );
};

export default Home;

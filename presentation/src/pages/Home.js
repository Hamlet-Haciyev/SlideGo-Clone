import React from "react";
import Navbar from "../components/navbar";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Main from "../layouts/Home/Main";
const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Categories />
      <Main />
    </>
  );
};

export default Home;

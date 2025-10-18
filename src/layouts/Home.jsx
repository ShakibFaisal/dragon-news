import React from "react";
import Header from "../component/Header";
import Latestnews from "../component/Latestnews";
import Navbar from "../component/Navbar";

const Home = () => {
  return (
    <>
      <div className="w-11/12 mx-auto">
        <header>
          <Header></Header>
          <section >
             <Latestnews></Latestnews>
          </section>
          <nav>
            <Navbar></Navbar>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Home;

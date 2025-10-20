import React from "react";
import Header from "../component/Header";
import Latestnews from "../component/Latestnews";
import Navbar from "../component/Navbar";
import Leftaside from "../component/homelayout/Leftaside";
import { Outlet } from "react-router";
import Rightaside from '../component/homelayout/Rightaside'


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
        <main className="grid gap-5 grid-cols-12">
          <aside className="col-span-3">
            <Leftaside> </Leftaside>
          </aside>
          <div className="col-span-6">
              <Outlet></Outlet>
          </div>
          
          <aside className="col-span-3">
            <Rightaside></Rightaside>
          </aside>
        </main>
      </div>
    </>
  );
};

export default Home;

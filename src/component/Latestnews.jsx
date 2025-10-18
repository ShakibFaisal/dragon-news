import React from "react";
import Marquee from "react-fast-marquee";

const Latestnews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="bg-secondary  px-3 py-2 text-base-200">Latest</p>
      <Marquee pauseOnHover={true}>
        <p className="font-bold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, quam
          voluptatibus repellat officia eius, optio facilis quo sunt laudantium
          laboriosam possimus illum earum corrupti nulla ipsum mollitia saepe
          ratione commodi!
        </p>
      </Marquee>
    </div>
  );
};

export default Latestnews;

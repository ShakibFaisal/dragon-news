import React, { use } from "react";
import { NavLink } from "react-router";
const promise = fetch("/categories.json").then((res) => res.json());

const Allcatagories = () => {
  const categoriydata = use(promise);
  console.log(categoriydata);
  return (
    <div>
      <h3 className="font-bold text-center">
        All Categories ({categoriydata.length})
      </h3>
      <div className="grid grid-cols-1 gap-3 mt-2">
        {categoriydata.map((data) => (
          <NavLink
            to={`/category/${data.id}`}
            className="btn text-accent bg-base-100 border-0 hover:bg-base-200"
            key={data.id}
          >
            {data.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Allcatagories;

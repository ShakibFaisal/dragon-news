import React from "react";
import { useLoaderData } from "react-router";
import NewsCard from "../component/NewsCard";

const Homep = () => {
  const data = useLoaderData();

  return (
    <div>
      <h3 className="font-bold mb-5">Dragon News Home</h3>
      <div className="grid grid-cols-1 gap-5">
        {data.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default Homep;

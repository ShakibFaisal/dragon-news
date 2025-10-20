import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../component/NewsCard";

const CategoriesNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [news, setnews] = useState([]);
  useEffect(() => {
    if (id == 0) {
      setnews(data);
    } else if (id == 1) {
      const filterData = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setnews(filterData);
    } else {
      const filterData = data.filter(
        (news) => news.category_id == parseInt(id)
      );
      setnews(filterData);
    }
  }, [data, id]);
 

  return (
    <div>
      <h3 className="font-bold mb-5">Dragon News Home</h3>
      <div className="grid grid-cols-1 gap-5">
        {news.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoriesNews;

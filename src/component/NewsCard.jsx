import React from "react";
import { FaStar,FaRegEye, FaShareAlt } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";

const NewsCard = ({ news }) => {
  const { title, author, rating, total_view, thumbnail_url, details } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-GB",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  return (
    <div className="card bg-base-100 shadow-xl border border-gray-200">
      {/* Author Section */}
      <div className="flex items-center justify-between p-4 bg-base-200">
        <div className="flex items-center space-x-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-gray-800">{author.name}</h2>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex gap-2.5">
            <CiBookmark className="text-gray-500 hover:text-primary cursor-pointer" />
            <FaShareAlt className="text-gray-500 hover:text-primary cursor-pointer" />
        </div>
        
      </div>

      {/* Image Section */}
      <figure className="px-4">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-xl w-full object-cover h-56"
        />
      </figure>

      {/* Body Section */}
      <div className="card-body px-5 pt-3 pb-5">
        <h2 className="card-title text-lg font-semibold">{title}</h2>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {details.slice(0, 200)}...
        </p>
        <span className="text-primary font-semibold mt-2 cursor-pointer hover:underline">
          Read More
        </span>

        <div className="flex justify-between items-center mt-3 text-sm text-gray-600">
          {/* Rating */}
          <div className="flex items-center gap-1 text-orange-400">
            {[...Array(rating.number)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="text-gray-700 ml-1">{rating.number}.0</span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-1">
            <FaRegEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

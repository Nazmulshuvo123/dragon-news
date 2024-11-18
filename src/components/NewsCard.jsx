import { FaStar, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = (props = {}) => {
  const { news } = props || {};
  const {
    title,
    details,
    thumbnail_url,
    author,
    rating,
    total_view,
    others_info,
  } = news;

  return (
    <div className="card  bg-base-100 shadow-2xl">
      <div className="card-body">
        {/* Title */}
        <h2 className="card-title text-lg font-bold">{title}</h2>

        {/* Author Information */}
        <div className="flex items-center space-x-2 mt-2">
          <img
            src={author.img}
            alt={author.name}
            className="w-8 h-8 rounded-full"
          />
          <div>
            <p className="text-sm font-medium">{author.name}</p>
            <p className="text-xs text-gray-500">{author.published_date}</p>
          </div>
        </div>
      </div>
      {/* Card Header */}
      <figure>
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-[800px] object-cover"
        />
      </figure>
      <div className="card-body">
        {/* Trending or Today's Pick */}
        {others_info.is_trending && (
          <div className="badge badge-secondary">Trending</div>
        )}
        {others_info.is_todays_pick && (
          <div className="badge badge-primary">Today's Pick</div>
        )}

        {/* Card Details */}
        <p className="text-sm text-gray-600 mt-2 line-clamp-3">
          {details}
         
        </p>
        <Link to={`/news/${news._id}`} className="text-blue-500 cursor-pointer">Read More</Link>

        {/* Footer */}
        <div className="card-actions justify-between items-center mt-4">
          {/* Rating */}
          <div className="flex items-center space-x-1 text-yellow-400">
            <FaStar />
            <span>{rating.number}</span>
            <span className="badge badge-outline">{rating.badge}</span>
          </div>

          {/* Views */}
          <div className="flex items-center space-x-1 text-gray-500">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

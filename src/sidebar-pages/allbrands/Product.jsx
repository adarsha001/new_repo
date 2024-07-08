import { NavLink } from "react-router-dom";
import LikeButton from '../likedcomponent/Liked_button';
import { useTrendingContext } from '../../../context/trendingcontext';

const Product = (ele) => {
  const { id, Full_name, Biography, image_link, External_url, Followers_count } = ele;
  const { incrementValue } = useTrendingContext();

  return (
    <div className="mx-1 my-1 glass w-full flex justify-center sm:w-[98%] transition-all duration-500 text-white hover:scale-105 overflow-hidden">
      <NavLink
        to={`/singleproduct/${id}`}
        className="transition-transform duration-500"
        onClick={(e) => {
          incrementValue(id);
          e.stopPropagation();
        }}
      >
        <div className="flex flex-col justify-between h-full">
          <img
            src={image_link}
            className="w-full pt-3 sm:w-[200px] md:w-[250px] lg:w-[300px] h-auto mx-auto mb-2"
            alt={Full_name}
          />
          <div className="text-center font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text py-1">
            <h1>{Full_name}</h1>
          </div>
          <div className="text-center line-clamp-2 px-2 cinzel-ak">{Biography}</div>
          <div className="text-center mb-4">
            <a href={External_url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600">Visit Website</button>
            </a>
          </div>
          <div className="relative flex justify-center items-center py-2">
            <div className="hexagon-container">
              <p className="text-center text-xl mb-4 hexagon-text cinzel-ak">Followers Count: {Followers_count}</p>
            </div>
          </div>
        </div>
      </NavLink>
      <div className="text-center">
        <LikeButton product={ele} />
      </div>
    </div>
  );
};

export default Product;

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useproductcontext } from "../../context/context";
import { useLikedContext } from "../../context/Liked_context";
import LikeButton from "../sidebar-pages/likedcomponent/Liked_button";
import { useTrendingContext } from "../../context/trendingcontext";
import Allbrand from "../sidebar-pages/allbrands/Allbrand";

const Singleproduct = () => {
  const { addLiked } = useLikedContext();
  const { getsingleproduct, issingleLoading, singleproduct } = useproductcontext();
  const { incrementValue } = useTrendingContext();
  const { id } = useParams();
  const API = "https://shopsphere360.onrender.com/api/trending/products";
  const MAINAPI = `${API}/${id}`;

  useEffect(() => {
    getsingleproduct(MAINAPI);
  }, [id]);

  if (issingleLoading) {
    return <div className="text-center text-3xl text-red-500">Loading...</div>;
  }

  if (!singleproduct) {
    return <div className="text-center text-3xl text-red-500">Product not found</div>;
  }

  const {
    Full_name,
    Followers_count,
    Is_Verified,
    Biography,
    image_link,
    External_url,
  } = singleproduct;

  const handleInnerClick = (event) => {
    event.stopPropagation();
    console.log("Inner clicked");
  };

  return (
    <>
      {/* Small screen */}
      <div className="sm:hidden">
        <div className="text-center text-5xl mb-6">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-yellow-400">PRODUCT DETAILS</h1>
        </div>
        <div className="flex flex-col items-center space-y-4 mt-6">
          <div className="w-full max-w-[300px]">
            <img
              className="object-cover w-full h-[200px] rounded-lg shadow-lg"
              src={image_link}
              alt={Full_name}
            />
          </div>
          <div className="text-center px-4">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
              {Full_name}
            </h2>
            <div className="text-lg text-gray-100 mb-2">
              Followers: <span className="font-semibold">{Followers_count}</span>
            </div>
            <div className="text-lg text-gray-100 mb-2">
              Verified: {Is_Verified === "Yes" ? (
                <span className="text-green-500">Yes</span>
              ) : (
                <span className="text-red-500">No</span>
              )}
            </div>
            <div className="text-lg text-white mb-4">
              Biography: {Biography}
            </div>
            <div className="flex justify-center mt-4">
              <div
                onClick={() => {
                  incrementValue(id);
                }}
                className="bg-green-700 rounded-lg h-[50px] text-lg font-bold flex justify-center items-center text-white shadow-md hover:bg-green-600 cursor-pointer"
                style={{ width: '200px' }}
              >
                <LikeButton product={singleproduct} />
              </div>
            </div>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 mb-4"
              onClick={handleInnerClick}
            >
              <a
                href={External_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Website Link
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* Large screen */}
      <div className="hidden sm:block">
        <div className="text-center text-5xl mb-6">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-yellow-400">PRODUCT DETAILS</h1>
        </div>
        <div className="flex items-center justify-around mt-8">
          <div className="w-full max-w-[400px]">
            <img
              className="object-cover w-full h-[300px] rounded-lg shadow-lg"
              src={image_link}
              alt={Full_name}
            />
          </div>
          <div className="text-left ml-4 px-4">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
              {Full_name}
            </h2>
            <div className="text-xl text-gray-100 mb-2">
              Followers: <span className="font-semibold">{Followers_count}</span>
            </div>
            <div className="text-xl text-gray-100 mb-2">
              Verified: {Is_Verified === "Yes" ? (
                <span className="text-green-500">Yes</span>
              ) : (
                <span className="text-red-500">No</span>
              )}
            </div>
            <div className="text-xl text-gray-100 mb-4">
              Biography: {Biography}
            </div>
            <div className="flex items-center">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 mb-4"
                onClick={handleInnerClick}
              >
                <a
                  href={External_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website Link
                </a>
              </button>
              <div
                onClick={() => {
                  incrementValue(id);
                }}
                className="bg-green-700 rounded-full w-[60px] h-[50px] text-lg font-bold flex justify-center items-center text-white shadow-md hover:bg-green-600 cursor-pointer ml-4"
              >
                <LikeButton product={singleproduct} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Allbrand />
    </>
  );
};

export default Singleproduct;

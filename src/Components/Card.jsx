import React, { useState, useEffect } from "react";
import HttpClient from "../HttpClient";
import Spinner from "./Spinner";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaSpinner } from "react-icons/fa";

const Card = () => {
  const [apod, setApod] = useState({});
  const [loading, setLoading] = useState(true);
  const [like, setLike] = useState(false);
  const [liked, setLiked] = useState([]);
  useEffect(() => {
    HttpClient.getApod().then((apodData) => {
      setApod(apodData.data);
      setLoading(false);
    });
  }, []);

  function handleLike() {
    if (!like) {
      setLike(true);
      let newArray = liked.filter((l) => l !== apod.title);
      setLiked(newArray, localStorage.setItem("liked", JSON.stringify(liked)));
    } else {
      setLike(false);
      setLiked(
        [...liked, apod.title],
        localStorage.setItem("liked", JSON.stringify(liked))
      );
    }
  }

  if (loading)
    return (
      <div className="flex items-center justify-center w-full h-1/2 p-4">
        <Spinner>
          <FaSpinner className="text-3xl" />
        </Spinner>
      </div>
    );
  return (
    <div className="flex justify-center items-center my-2">
      {apod && (
        <div className="rounded-md overflow-hidden shadow-lg w-2/3 bg-gray-100 border-x-2 border-b-2">
          <img className="w-full" src={apod.url} alt="APOD" />
          <div className="px-6 py-4">
            <div>
              <div className="font-bold text-xl mb-2">{apod.title}</div>
              <span className="text-gray-500">{apod.date}</span>
            </div>
            <p className="text-base py-3 text-gray-800">{apod.explanation}</p>
          </div>
          <div className="px-6 py-4 flex items-center justify-center text-base">
            <button
              className="flex items-center justify-center p-3 rounded-md "
              onClick={handleLike}
            >
              {like ? (
                <>
                  <AiFillHeart className="text-red-500 text-2xl mr-2" /> Liked
                </>
              ) : (
                <>
                  <AiOutlineHeart className="text-red-500 text-2xl mr-2" />
                  Like
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;

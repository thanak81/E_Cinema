import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";

function MovieDetail() {
  let { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["movie"],
    queryFn: () =>
      fetch(`http://localhost:8080/movie/${id}`).then((res) => res.json()),
    refetchOnWindowFocus: false,
  });

  if (error) return <div>There was an error while fetching data</div>;
  if (isLoading) return <div>Data is Loading</div>;

  const movie = data[0];

  return (
    <div className=" h-screen text-white">
      <div className=" bg-black py-10 px-5 text-2xl font-bold flex justify-between">
        <div>Movie Detail</div>
        <Link to="/">Go back</Link>
      </div>
      <div className="bg-[#001B30] h-[100%] p-5 flex flex-col  text-white">
      <div className= {`${!movie.checkAvailableSeat? "text-green-500" : "text-red-600"} uppercase font-bold`}>{!movie.checkAvailableSeat? "Available" : "Sold Out"}</div>
        <div className="mt-5">
        <div className="uppercase font-bold">Time: {movie.playTime}</div>
        <div className="text-5xl mb-10 mt-5 font-bold">{movie.title}</div>
        </div>
        <div className="w-full h-96 bg-black">Image</div>
        <div className="font-bold text-white mt-5">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

            <div className="flex flex-col gap-5">
            <div className="text-yellow-500 text-2xl">Details</div>
            <div className=" flex gap-2 flex-col">
                <div>Duration: {movie.movieDuration}</div>
                <div>Movie Duration: {movie.movieDuration} Min</div>
            </div>

            </div>
            <div className="flex flex-col  gap-5">
            <div className="text-yellow-500 text-2xl">Decriptions</div>
            <div className=" flex gap-5 flex-col text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolores quis quisquam hic cum quae fuga vero nam? Itaque quaerat expedita architecto praesentium iusto suscipit voluptate perspiciatis error illo natus!
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;

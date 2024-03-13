import { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import { QueryClientProvider, useQuery, useQueryClient } from "react-query";
import { Link, createSearchParams, redirect, useNavigate } from "react-router-dom";

function Home() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["movies"],
    queryFn: () =>
      fetch("http://localhost:8080/movies").then((res) => res.json()),

    refetchOnWindowFocus: false,
    refetchInterval: 5000,
  });

  if (error) return <div>There was an error while fetching data</div>;
  if (isLoading) return <div>Data is Loading</div>;

  return (
    <>
  
      <div className="flex gap-5 flex-wrap item-center justify-center">
        {data.map((movie) => (
          <div
            key={movie.id}
            className="border  border-black w-[300px] p-5 text-white bg-black flex flex-col gap-5 rounded-lg"
          >
            <div className="h-[120px] bg-slate-600 rounded">Image</div>
            <div className="font-bold text-2xl text-blue-500 text-center">
              {movie.title}
            </div>
            <div className="flex justify-between">
              <span>ID: {movie.id}</span>
              <span>Seat: {movie.seatAmount}</span>
            </div>
            <div className="flex justify-between">
              <span>DURATION: {movie.movieDuration}</span>
              <span>Play Time: {movie.playTime}</span>
            </div>
            <div className="flex justify-between">
              <span>STATUS</span>
              {movie.checkAvailableSeat === true
                ? "Out of Seat"
                : "Seat Available"}
            </div>
              <div className="flex gap-5 justify-center">
                <button className="border py-2 px-5 bg-slate-700">Book Seat</button>
                <div className="border py-2 px-5 bg-blue-500">
                  <Link to={`/movie/${movie.id}`}>Details</Link>
                </div>
              </div>
          </div>
        ))}
      </div>
    </>

  
  );
}

export default Home;

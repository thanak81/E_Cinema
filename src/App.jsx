import "./App.css";
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, useParams } from "react-router-dom";
import Home from "./UI/Home";
import MovieDetail from "./UI/MovieDetail";
import { createContext } from "react";

export const DataSender= createContext()

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: `/movie/:id`,
      element: <MovieDetail/>
    }
  ])

  return (
  <RouterProvider router={router}/>
  );
}

export default App;

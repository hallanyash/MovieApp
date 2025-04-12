import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";

const Toprated = () => {
  const [movies, setmovies] = useState("");
  const getData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1`
    );
    const data = await response.json();
    setmovies(data);
    console.log(data);
  };
  useEffect(() => {
    getData();
  }, []);
  if (movies) {
    return (
      <>
        <Navbar />
        <h1 className="m-3">Top Rated Movies of all time :</h1>
        <div className=" container-fluid  d-flex flex-wrap justify-content-center gap-5 ">
          {movies?.results?.map((movie) => (
            <div
              className="card m-2 "
              style={{ heigh: "300px", width: "250px" }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=""
                className="card-img-top rounded"
                style={{ height: "250px", width: "250px" }}
              />
              <div className="card-body">
                <p className="card-title text-center text-black">
                  {movie.title}
                </p>
                <p className="card-text text-black">
                  Released Date: {movie.release_date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
};
export default Toprated;

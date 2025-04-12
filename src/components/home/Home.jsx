import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  const [movies, setMovies] = useState(" ");
  const randomMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    );
    const data = await response.json();
    setMovies(data);
    console.log(data);
    console.log(movies);
    // console.log(data);
    // setMovies(response.data);
    // console.log(movies);
  };
  useEffect(() => {
    randomMovies();
  }, []);
  return (
    <>
      <Navbar />
      {
        <div className="container-fluid d-flex flex-wrap m-5">
          {/* <p>{movies?.results?.[0]?.title}</p> */}
          {/* {movies?.results?.map((movie) => (
            <p key={movie.id}>{movie.title}</p>
          ))} */}
          {movies?.results?.map((movie) => (
            <div className="d-flex flex-row ">
              <div
                className="card m-3  "
                style={{
                  display: "flex",
                  position: "relative",
                  height: "400px",
                  width: "250px",
                }}
                key={movie.id}
              >
                <img
                  key={movie.title}
                  style={{ height: "250px", width: "250px" }}
                  // src={movie.poster_path}
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  className="card-img-top rounded"
                />
                <div className="card-body">
                  <h2 className="card-title">{movie.title}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      }
    </>
  );
};
export default Home;

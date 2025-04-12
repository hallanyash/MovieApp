import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";

const Tvshow = () => {
  const [tv, setTv] = useState("");
  const getdata = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=af8bb7211a990c72e68bfcf5dc74e37e&include_adult=false&include_null_first_air_dates=false&language=en-US&page=3&sort_by=popularity.desc'`
    );
    const data = await response.json();
    console.log(data);
    setTv(data);
  };
  useEffect(() => {
    getdata();
  }, []);
  if (tv) {
    return (
      <>
        <Navbar />
        <h1 className="m-3">TV shows:</h1>
        <div className="container-fluid d-flex flex-wrap m-3 gap-5">
          {tv.results.map((tv) => (
            <div
              className="card d-flex "
              key={tv.id}
              style={{ height: "350px", width: "250px" }}
            >
              <img
                style={{ height: "250px", width: "250px" }}
                src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
                alt=""
                className="card-img-top rounded"
              />
              <div className="card-body">
                <h3 className="card-title">{tv.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
};
export default Tvshow;

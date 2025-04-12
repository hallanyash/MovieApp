import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
const Search = () => {
  const [search, setsearch] = useState("iron man");
  const searchBar = (e) => {
    setsearch(e.target.value);
    console.log(search);
  };
  const getdata = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    );
    const data = await response.json();
    setsearch(data);
    console.log(data);
    // console.log(data.poster);
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <>
      <Navbar />

      <div className="container-fluid d-flex ">
        <input
          className="w-75 my-3 rounded"
          type="text"
          id="search"
          placeholder="Search Movie"
          onChange={searchBar}
          style={{ height: "40px", border: "1px solid black" }}
        />
        <button
          className="bg-dark text-white border border-ligth my-3 mx-3 rounded"
          id="search"
          onClick={getdata}
          style={{ height: "40px", width: "120px", fontSize: "20px" }}
        >
          Search
        </button>
      </div>
      <div className="container-fluid d-flex flex-wrap gap-5 m-3">
        {search?.results?.map((search) => (
          <div
            className="card"
            key={search.id}
            style={{ height: "350px", width: "250px" }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${search.poster_path}`}
              alt=""
              style={{ height: "250px", width: "250px" }}
              className="card-img-top"
            />
            <div className="card-body">
              <p className="card-title text-black">{search.title}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Search;

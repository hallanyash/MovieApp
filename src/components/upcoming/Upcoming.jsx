import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";

const Upcoming = () => {
  const [data, setData] = useState(null);
  const getData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1`
    );
    const data = await response.json();
    setData(data);
    console.log(data);
  };
  useEffect(() => {
    getData();
  }, []);
  if (data) {
    return (
      <>
        <Navbar />
        <div
          id="carouselExampleIndicators"
          className="container-fluid carousel slide w-75 position-relative border border-ligth bg-dark "
          style={{ left: "10px", top: "50px" }}
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                style={{ height: "75vh" }}
                src={`https://image.tmdb.org/t/p/original/${data?.results?.[0].poster_path}`}
                className="d-block w-100 object-fit-contain"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                style={{ height: "75vh", objectFit: "contain" }}
                src={`https://image.tmdb.org/t/p/original/${data?.results?.[1].poster_path}`}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                style={{ height: "75vh", objectFit: "contain" }}
                src={`https://image.tmdb.org/t/p/original/${data?.results?.[2].poster_path}`}
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="container-fluid d-flex flex-wrap justify-content-center my-5 p-5 gap-4">
          {data?.results?.map((data) => (
            <div className="card" key={data.id}>
              <img
                key={data.title}
                className="card-img-top object-fit-fill"
                style={{ height: "250px", width: "270px" }}
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                // src={data.poster_path}
                alt=""
              />
              <p className="card-title text-black m-3">{data.title}</p>
              <p className="card-text mx-3">
                Release Date: {data.release_date}
              </p>
            </div>
          ))}
        </div>
      </>
    );
  }
};

export default Upcoming;

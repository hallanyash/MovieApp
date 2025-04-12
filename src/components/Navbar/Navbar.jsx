import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav
        className="container-fluid d-flex gap-5 bg-dark text-white"
        style={{ height: "10vh" }}
      >
        <h1 className="mx-3 my-2">Movie App</h1>
        <div className="gap-5 d-flex fs-5 mx-5 my-3">
          <Link className="text-white text-decoration-none mx-5" to="/">
            Home
          </Link>
          <Link className="text-white text-decoration-none mx-5" to="/search">
            Search
          </Link>
          <Link
            className="  text-decoration-none text-white mx-5"
            to="/upcoming"
          >
            Upcoming Movies
          </Link>
          <Link
            className="  text-decoration-none text-white mx-5"
            to="/toprated"
          >
            Top Rated
          </Link>
          <Link className="text-decoration-none text-white mx-5" to="/tvshow">
            TV Shows
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
export default Navbar;

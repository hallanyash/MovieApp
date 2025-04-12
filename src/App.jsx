import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "../src/components/search/Search.jsx";
import Home from "./components/home/Home.jsx";
import Upcoming from "./components/upcoming/Upcoming.jsx";
import Toprated from "./components/toprated/Toprated.jsx";
import Tvshow from "./components/TV shows/Tvshow.jsx";
const App = () => {
  return (
    <>
      {/* <h1>Homepage</h1>
       */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/Upcoming" element={<Upcoming />} />
          <Route path="/Toprated" element={<Toprated />} />
          <Route path="/Tvshow" element={<Tvshow />} />
        </Routes>
      </Router>
      {/* <Search /> */}
    </>
  );
};
export default App;

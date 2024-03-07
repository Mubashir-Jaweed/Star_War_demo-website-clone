import "./App.css";
import Nav from "./components/Nav.jsx";
import AllData from "./screens/AllData";
import Home from "./screens/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
      <div className="app">
        <Router>
        <Nav />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/people"} element={<AllData />} />
            <Route path={"/starships"} element={<AllData />} />
            <Route path={"/planets"} element={<AllData />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;

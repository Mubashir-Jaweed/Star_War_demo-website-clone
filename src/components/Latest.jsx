import React from "react";
import { Link } from "react-router-dom";
import characters from "../assets/characters.png";
import planets from "../assets/planets.png";
import starships from "../assets/starships.png";
const Latest = () => {
  return (
    <div className="latest">
      <div className="latest-cont">
        <span className="latest-h">
          LATEST STAR WARS CHARACTERS, STARSHIPS & MORE
        </span>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}>
          {data.map((value, i) => (
            <Link className="latest-card" to={value.url} key={i}>
              <img className="latest-img" src={value.img} />
              <span className="latest-txt">{value.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const data = [
  { name: "Star Wars: Characters", img: characters, url: "/characters" },
  { name: "Star Wars: StarShips", img: starships, url: "/starships" },
  { name: "Star Wars: Planets", img: planets, url: "/planets" },
];
export default Latest;

import React, { useState } from "react";
import { RideContextProvoider } from "../context";
import LOGO from "../images/Dashboard.png";
import IMG from "../images/Rectangle.png";
import FILTERLOGO from "../images/Vector.png";
function NavigationBar() {
  const [user] = useState({
    station_code: 40,
    name: "Dhruv Singh",
    profile_key: ""
  });
  const { upcomingRides, setsortedRides, nearestRides, lastRides, rides } =
    RideContextProvoider();
  const [dropDown, setdropDown] = useState(false);

  return (
    <>
      <div className="NavBar">
        <img src={LOGO} />
        <div className="user">
          <p className="username">{user.name}</p>
          <img src={IMG} className="profilepic" />
        </div>
      </div>
      <div className="actionbuttons">
        <div className="Rides">
          <p onClick={() => setsortedRides(nearestRides)}>Nearest rides</p>
          <p onClick={() => setsortedRides(upcomingRides)}>
            Upcoming rides {upcomingRides ? <>({upcomingRides.length})</> : ""}
          </p>
          <p onClick={() => setsortedRides(lastRides)}>
            Last rides {lastRides ? <>({lastRides.length})</> : ""}
          </p>
        </div>
        <div className="filter">
          <img className="filter-logo" src={FILTERLOGO} />
          <p onClick={() => setdropDown(!dropDown)}>Filter</p>
          <div
            style={dropDown ? { display: "block" } : { display: "none" }}
            className="dropdown"
          >
            <span>Filters</span>
            <hr />
            <select placeholder="State">
              <option>Maharashtra</option>
            </select>
            <select placeholder="State">
              <option>Panvel</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavigationBar;

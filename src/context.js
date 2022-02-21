import React, { createContext, useContext, useEffect, useState } from "react";

const ridesContext = createContext();

export function RideContextProvoider() {
  return useContext(ridesContext);
}
function ContextProvoider({ children }) {
  const [rides, setRides] = useState([
    {
      id: 1,
      origin_station_code: 23,
      station_path: [23, 42, 45, 48, 56, 60, 77, 81, 93],
      destination_station_code: 93,
      date: 1644924365,
      map_url: "url",
      state: "Maharashtra",
      city: "Panvel"
    },
    {
      id: 2,
      origin_station_code: 20,
      station_path: [20, 39, 40, 42, 54, 63, 72, 88, 98],
      destination_station_code: 98,
      date: 1645703819, // Date has been changed to 1645703819 from 1644924365 (For Testing)
      map_url: "url",
      state: "Maharashtra",
      city: "Panvel"
    },
    {
      id: 3,
      origin_station_code: 13,
      station_path: [13, 25, 41, 48, 59, 64, 75, 81, 91],
      destination_station_code: 91,
      date: 1644924365,
      map_url: "url",
      state: "Maharashtra",
      city: "Panvel"
    }
  ]);

  const [sortedRides, setsortedRides] = useState(rides);
  const [nearestRides, setnearestRides] = useState();
  const [upcomingRides, setupcomingRides] = useState();
  const [lastRides, setlastRides] = useState();
  const [display, setDisplay] = useState(false);
  var num = 40;

  useEffect(() => {
    const sortRides = () => {
      for (let i = 0; i < sortedRides.length; i++) {
        console.log(sortedRides[i].station_path);
        if (Array.isArray(sortedRides[i].station_path)) {
          const closest = sortedRides[i].station_path.reduce((a, b) => {
            return Math.abs(b - num) < Math.abs(a - num) ? b : a;
          });
          sortedRides[i].closetst_number = closest;
          sortedRides[i].distance = closest - num;
        }
        console.log(sortedRides[i]);
      }

      let nearstRides = sortedRides.sort((a, b) => {
        return a.closetst_number - b.closetst_number;
      });
      setsortedRides(nearstRides);
      setnearestRides(nearstRides);
      setDisplay(true);
    };

    const upcomingRides = () => {
      let crrDate = new Date().getTime();
      let upcmg = [];
      let last = [];
      console.log(crrDate);
      for (let i = 0; i < rides.length; i++) {
        let rideDate = new Date(rides[i].date).getTime();
        console.log(crrDate, rideDate);
        if (crrDate < rideDate * 1000) {
          upcmg.push(rides[i]);
          console.log(rides[i].date);
        } else {
          last.push(rides[i]);
        }
      }
      setupcomingRides(upcmg);
      setlastRides(last);
    };

    sortRides();
    upcomingRides();
  }, []);

  var value = {
    rides,
    display,
    upcomingRides,
    sortedRides,
    lastRides,
    setsortedRides,
    nearestRides
  };
  return (
    <ridesContext.Provider value={value}>{children}</ridesContext.Provider>
  );
}

export default ContextProvoider;

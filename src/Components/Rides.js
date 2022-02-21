import { RideContextProvoider } from "../context";
import MAP from "../images/image1.png";
function Rides() {
  const { sortedRides, display } = RideContextProvoider();

  return (
    <div className="wrapper">
      <div className="rides">
        {display &&
          sortedRides.map((ride) => (
            <div key={ride.id} className="ridebody">
              <div className="rideinfo">
                <img src={MAP} alt='Map' />
                <ul>
                  <li>Ride Id: {ride.id}</li>
                  <li>Origin Station: {ride.origin_station_code}</li>
                  <li>
                    station_path: [
                    {ride.station_path.map((e, i) => (
                      <span key={i}>
                        {e}
                        {i < ride.station_path.length - 1 ? (
                          <>,</>
                        ) : (
                          <>{null}</>
                        )}
                      </span>
                    ))}
                    ]
                  </li>
                  <li>
                    Date: {new Date(ride.date * 1000).toLocaleString("en-GB")}
                  </li>
                  <li>Distance: {ride.distance}</li>
                </ul>
              </div>
              <div className="location">
                <div className="locationdiv">
                  <span>{ride.city}</span>
                </div>
                <div className="locationdiv">
                  <span>{ride.state}</span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Rides;

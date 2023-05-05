import React from "react";
import { Map, Marker } from "pigeon-maps";
import { useState, useEffect } from "react";

export function Maps() {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation([latitude, longitude]);
      });
    }
  }, []);

  return (
    <div className="">
      <h1>Find a Gym Near You</h1>
      <p>Please note that in order to see the map you must allow the use of your current location</p>

      {userLocation && (
        <Map height={500} center={userLocation} zoom={10}>
          <Marker anchor={userLocation} />
        </Map>
      )}

      {/* <Map height={500} defaultCenter={[26.10812, -80.25222]} defaultZoom={17}>
        <Marker width={50} anchor={[26.10812, -80.25222]} />
      </Map> */}
    </div>
  );
}

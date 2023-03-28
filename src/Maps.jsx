import React from "react";
import { Map, Marker } from "pigeon-maps";

export function Maps() {
  return (
    <div className="">
      <h1>Find a Gym Near You</h1>
      <Map height={500} defaultCenter={[26.10812, -80.25222]} defaultZoom={17}>
        <Marker width={50} anchor={[26.10812, -80.25222]} />
      </Map>
    </div>
  );
}

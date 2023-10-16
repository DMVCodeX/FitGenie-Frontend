import React, { useState, useEffect } from "react";
import { Map, Marker } from "pigeon-maps";

export function Maps() {
  const [userLocation, setUserLocation] = useState(null);
  const [gyms, setGyms] = useState([]);
  const [mapCenter, setMapCenter] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation([latitude, longitude]);
        setMapCenter([latitude, longitude]);
        loadNearbyGyms([latitude, longitude]);
      });
    }
  }, []);

  async function loadNearbyGyms(location) {
    const apiKey = "GOOGLE_MAPS_API_KEY";
    const radius = 5000;
    const query = "gym";

    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location[0]},${location[1]}&radius=${radius}&keyword=${query}&key=${apiKey}`
      );

      if (response.ok) {
        const data = await response.json();
        setGyms(data.results);
      }
    } catch (error) {
      console.error("Error loading gyms:", error);
    }
  }

  const handleSearch = async () => {
    if (searchQuery) {
      setSearchQuery(searchQuery);
      const apiKey = "GOOGLE_MAPS_API_KEY";

      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${searchQuery}&key=${apiKey}`
        );

        if (response.ok) {
          const data = await response.json();
          setGyms(data.results);
        }
      } catch (error) {
        console.error("Error searching for gyms:", error);
      }
    }
  };

  return (
    <div>
      <h1>Find a Gym Near You</h1>
      <p>Please note that to see the map, you must allow the use of your current location.</p>

      <form className="form-inline ">
        <div className="form-group">
          <input
            className="form-control-plaintext"
            type="text"
            placeholder="Search for gyms..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="btn btn-outline-secondary" onClick={handleSearch}>
            <img height={20} width={20} src="https://cdn-icons-png.flaticon.com/128/2652/2652234.png" alt="" />
          </button>
        </div>
      </form>

      {userLocation && (
        <Map height={500} center={mapCenter} zoom={15}>
          <Marker anchor={userLocation} />
          {gyms.map((gym) => (
            <Marker key={gym.id} anchor={[gym.geometry.location.lat, gym.geometry.location.lng]}>
              <div>GYM</div>
            </Marker>
          ))}
        </Map>
      )}
    </div>
  );
}

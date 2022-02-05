import "leaflet/dist/leaflet.css";

import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import "./App.css";


function App() {
  return (
    <div>
      <MapContainer
        center={[51.505, -9.09]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div >
  );
}

export default App;

import React from "react";

import "leaflet/dist/leaflet.css";
import "./App.css";

import { MapContainer, TileLayer } from "react-leaflet";
import { Flex, Box } from '@chakra-ui/react'

import Drawer from "./components/Drawer";


function App() {
  return (
    <Flex direction="row">
      <Box width="25vw">
        <Drawer />
      </Box>
      <Box flex="1">
        <MapContainer
          center={[51.505, -9.09]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </Box>
    </Flex >
  );
}

export default App;

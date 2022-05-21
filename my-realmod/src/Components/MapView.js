import React, { useState, useEffect } from "react";
import { MapContainer,TileLayer } from "react-leaflet";
import data from "../assets/data.json";
import Markers from "./VenueMarkers";
import { useLocation, useNavigate } from "react-router-dom";
import "leaflet/dist/leaflet.css";

const MapView = (props) => {
  const [state, setState] = useState({
    currentLocation: { lat:33.5547726, lng: 114.7462691 },
    zoom: 13,
    data,
  });

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state.latitude && location.state.longitude) {
      const currentLocation = {
        lat: location.state.latitude,
        lng: location.state.longitude,
      };
      console.log(state);
      setState({
        ...state,
        data: {
          venues: state.data.venues.concat({
            name: "new",
            geometry: [currentLocation.lat, currentLocation.lng],
          }),
        },
        currentLocation,
      });
      navigate.replace({
        pathname: "/map",
        state: {},
      });
    }
  }, [location]);

  return (
    <MapContainer center={state.currentLocation} zoom={state.zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
     //  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'


        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Markers venues={state.data.venues} />
    </MapContainer>
  );
};

export default MapView;

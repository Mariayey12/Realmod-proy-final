import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import data from "../assets/data.json";
import Markers from "./VenueMarkers";
import { useLocation, useNavigate } from "react-router-dom";
import { Map } from "leaflet";



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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <Map center={state.currentLocation} zoom={state.zoom}>
      <TileLayer
       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
       attribution='&copy; <link href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Markers venues={state.data.venues} />
    </Map>
    

  );
};

export default MapView;

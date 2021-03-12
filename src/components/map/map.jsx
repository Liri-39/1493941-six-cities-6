import React, {useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import leaflet from 'leaflet';
import {mapPropTypes} from "../../prop-types/map-prop-types";

import "../../../node_modules/leaflet/dist/leaflet.css";

const Map = ({offers, location}) => {
  const mapRef = useRef();
  if (mapRef.current !== undefined) {
    mapRef.current.remove();
  }

  const icon = leaflet.icon({
    iconUrl: `img/pin.svg`,
    iconSize: [30, 30],
  });
  const zoom = 12;

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: [location.location.latitude, location.location.longitude],
      zoom,
      zoomControl: false,
      marker: true,
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
      })
      .addTo(mapRef.current);

    offers.forEach((item) => {
      leaflet
        .marker({
          lat: item.location.latitude,
          lng: item.location.longitude,
        }, {icon})
        .addTo(mapRef.current)
        .bindPopup(item.title);

      return () => {
        mapRef.current.remove();
      };
    });
  });

  return (
    <div id="map" style={{height: `100%`, width: `100%`}} ref={mapRef}/>
  );
};

Map.propTypes = mapPropTypes;

const mapStateToProps = ({offers, location}) => ({
  offers: offers.filter((item) => item.city.name === location.name),
  location
});

export default connect(mapStateToProps, null)(Map);

import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import {mapPropTypes} from "../../prop-types/map-prop-types";

import "../../../node_modules/leaflet/dist/leaflet.css";

const Map = ({city, points}) => {
  const mapRef = useRef();

  const icon = leaflet.icon({
    iconUrl: `img/pin.svg`,
    iconSize: [30, 30],
  });
  const zoom = 12;

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true,
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
      })
      .addTo(mapRef.current);

    points.forEach((point) => {
      leaflet
        .marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        }, {icon})
        .addTo(mapRef.current)
        .bindPopup(point.title);

      return () => {
        mapRef.current.remove();
      };
    });
  }, []);

  return (
    <div id="map" style={{height: `579px`}} ref={mapRef}/>
  );
};

Map.propTypes = mapPropTypes;

export default Map;

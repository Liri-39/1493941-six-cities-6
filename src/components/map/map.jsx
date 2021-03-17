import React, {useEffect, useRef, useMemo} from 'react';
import {connect} from 'react-redux';
import leaflet from 'leaflet';
import {mapPropTypes} from "../../prop-types/map-prop-types";

import "../../../node_modules/leaflet/dist/leaflet.css";

const ATTRIBUTION = `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`;
const DEFAULT_ZOOM = 12;

const Map = ({offers, location, activeCard}) => {
  const mapRef = useRef();
  const iconsLayer = useRef();

  const locationOffers = useMemo(
      () => offers.filter((item) => item.city.name === location.name),
      [offers, location]
  );

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: [location.location.latitude, location.location.longitude],
      zoom: DEFAULT_ZOOM,
      zoomControl: false,
      marker: true,
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: ATTRIBUTION,
      })
      .addTo(mapRef.current);

    return () => {
      mapRef.current.remove();
    };
  }, [location]);

  useEffect(() => {
    if (iconsLayer.current) {
      iconsLayer.current.clearLayers();
    }

    iconsLayer.current = leaflet.layerGroup(locationOffers.map((item) => {
      const icon = leaflet.icon({
        iconUrl: item.id === activeCard ? `img/pin-active.svg` : `img/pin.svg`,
        iconSize: [30, 30],
      });

      return leaflet
        .marker([item.location.latitude, item.location.longitude], {icon})
        .bindPopup(item.title);
    }));
    iconsLayer.current.addTo(mapRef.current);
  }, [locationOffers, location, activeCard]);

  return (
    <div id="map" style={{height: `100%`, width: `100%`}} ref={mapRef}/>
  );
};

Map.propTypes = mapPropTypes;

const mapStateToProps = ({offers, location, activeCard}) => ({
  offers: offers.filter((item) => item.city.name === location.name),
  location,
  activeCard,
});

export default connect(mapStateToProps, null)(Map);

import React, {useEffect, useRef, useMemo} from 'react';
import {useSelector} from 'react-redux';
import leaflet from 'leaflet';
import {mapPropTypes} from "../../prop-types/map-prop-types";
import {MapType} from '../../const';

import "../../../node_modules/leaflet/dist/leaflet.css";

const ATTRIBUTION = `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`;
const DEFAULT_ZOOM = 12;

const Map = ({mapType}) => {
  const mapRef = useRef();
  const iconsLayer = useRef();

  const {offer, nearPlaces} = useSelector((state) => state.OFFER);
  const {offers, location, activeCard} = useSelector((state) => state.MAIN);

  const activeCity = mapType === MapType.MAIN ? location : offer.city;
  const activeMarker = mapType === MapType.MAIN ? activeCard : offer.id;

  const locationOffers = useMemo(
      () => mapType === MapType.MAIN ? offers : [...nearPlaces, offer],
      [offers, mapType, nearPlaces, offer]
  );

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: [activeCity.location.latitude, activeCity.location.longitude],
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
  }, [activeCity]);

  useEffect(() => {
    if (iconsLayer.current) {
      iconsLayer.current.clearLayers();
    }

    iconsLayer.current = leaflet.layerGroup(locationOffers.map((item) => {
      const icon = leaflet.icon({
        iconUrl: item.id === activeMarker ? `img/pin-active.svg` : `img/pin.svg`,
        iconSize: [30, 30],
      });

      return leaflet
        .marker([item.location.latitude, item.location.longitude], {icon})
        .bindPopup(item.title);
    }));
    iconsLayer.current.addTo(mapRef.current);
  }, [locationOffers, location, activeMarker]);

  return (
    <div id="map" style={{height: `100%`, width: `100%`}} ref={mapRef}/>
  );
};

Map.propTypes = mapPropTypes;

export default Map;

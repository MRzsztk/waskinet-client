import React, { useEffect, useRef, useState } from "react";
import mapboxgl, { mapboxSdk } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const styles = {
    margin: "30px 0",
    width: "100%",
    height: "60vh"
  };

const Mapa = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = "pk.eyJ1IjoibXJ6c3p0ayIsImEiOiJja2NicXFtcHMyN2RrMnZtZ2JwY2prMXFtIn0.Kve-wkiKTqkaXiD3fgG0MA"; 
    const initializeMap = ({ setMap, mapContainer }) => {
        const map = new mapboxgl.Map({
          container: mapContainer.current,
          style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
          center: [14.570525,53.435202],
          zoom: 13
        });
  
        map.on("load", () => {
          setMap(map);
          map.resize();
        });

        new mapboxgl.Marker()
        .setLngLat([14.570525,53.435202])
        .setPopup(new mapboxgl.Popup({ offset: 25 }).setText(`waski.net`)) // sets a popup on this marker
        .addTo(map);
      };
  
      if (!map) initializeMap({ setMap, mapContainer });
    }, [map]);
    return <div className="map-styles" ref={el => (mapContainer.current = el)} style={styles} />;
  };
    

export default Mapa;

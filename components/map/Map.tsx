import React, {useState, useRef, useEffect, FC} from 'react'
import { GOOGLE_PACES_CENTER_COORDINATES, MAP_ZOOM } from '../../utils';
interface MapProps extends google.maps.MapOptions {
  style?: { [key: string]: string };
  onClick?: (e: google.maps.MapMouseEvent) => void;
  onIdle?: (map: google.maps.Map) => void;
}


const Map: FC<MapProps> = ({
  children,
  style,
  ...options
}) => {
  const [center, setCenter] = useState(GOOGLE_PACES_CENTER_COORDINATES);
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    } 
    if(map) {
      map.setCenter(center);
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            map.setCenter({lat: position.coords.latitude, lng:position.coords.longitude });
        });
      }
      map.setOptions({
        mapTypeControl: false,
        fullscreenControl: false,
        zoomControl : false,
        zoom: MAP_ZOOM,
      })
    }
  }, [ref, map, center]);

  return (
    <>
      <div ref={ref} className="flex-1" />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // set the map prop on the child component
          return React.cloneElement(child, { map });
        }
      })}
    </>
  )
};

export default Map

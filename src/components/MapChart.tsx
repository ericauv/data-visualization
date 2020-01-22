import React, { useContext } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Point
} from 'react-simple-maps';
import { ThemeContext } from 'styled-components';
import { IAppState } from '../App';

interface IProps extends IAppState {
  points: Point[];
}

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const markers: Point[] = [
  [-58.3816, -34.6037],
  [-68.1193, -16.4897]
];

const MapChart: React.FC<IProps> = props => {
  const { selectedPoint, setSelectedPoint } = props;
  const themeContext = useContext(ThemeContext);
  return (
    <div style={{ width: '20%', marginLeft: 'auto', marginRight: 'auto' }}>
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies
              .filter(d => d.properties.REGION_UN === 'Americas')
              .map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#EAEAEC"
                  stroke="#D6D6DA"
                />
              ))
          }
        </Geographies>
        {markers.map(point => (
          <Marker
            cursor={'pointer'}
            onClick={() => setSelectedPoint(point)}
            key={`marker-${point[0]}-${point[1]}}`}
            coordinates={point}
          >
            <g>
              <circle
                strokeWidth={
                  selectedPoint[0] === point[0] && selectedPoint[1] === point[1]
                    ? 5
                    : 0
                }
                stroke="black"
                fill={themeContext.colors[0]}
                cx="12"
                cy="10"
                r="20"
              />
            </g>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default MapChart;

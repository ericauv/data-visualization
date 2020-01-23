import React, { Dispatch, SetStateAction, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Point } from 'react-simple-maps';
import Banner from './components/Banner';
import ChartContainer from './components/ChartContainer';
import DeviceChart from './components/DeviceChart';
import KPICard from './components/KPICard';
import MapChart from './components/MapChart';
import NavBar from './components/NavBar';
import ServiceChartsContainer from './components/ServiceChartsContainer';
import TrafficChart from './components/TrafficChart';

import { data, Units, TextAppend } from './data';

export interface IAppState {
  selectedPoint: Point;
  setSelectedPoint: Dispatch<SetStateAction<Point>>;
}

const theme = {
  colors: [
    '#935B92',
    '#52A429',
    '#F3B266',
    '#A09E92',
    '#634465',
    '#00AFD6',
    '#95C01F',
    '#F796B8',
    '#E67921',
    '#A62D4E'
  ]
};

const AppStyles = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100%;
  margin-bottom: 20px;
`;

const Row = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const App: React.FC = () => {
  const [selectedPoint, setSelectedPoint] = useState(data[0].coordinates);

  // get the data coressponding to the selected point on the map
  const location = data.filter(
    entry =>
      entry.coordinates[0] === selectedPoint[0] &&
      entry.coordinates[1] === selectedPoint[1]
  )[0];

  return (
    <ThemeProvider theme={theme}>
      <AppStyles className="App">
        <Banner></Banner>
        <NavBar></NavBar>
        <Row>
          <KPICard
            name="Subscriber Count"
            percentValue={location.kpi.subscriber.percent}
            value={location.kpi.subscriber.value}
            unit={Units.SUBSCRIBER}
            appendText={TextAppend.SUBSCRIBER}
          />
          <KPICard
            name="Video Volume"
            percentValue={location.kpi.volumeVideo.percent}
            value={location.kpi.volumeVideo.value}
            unit={Units.VOLUME}
            appendText={TextAppend.VOLUME_VIDEO}
          />
          <KPICard
            name="Volume Saved"
            percentValue={location.kpi.volumeSaved.percent}
            value={location.kpi.volumeSaved.value}
            unit={Units.VOLUME}
            appendText={TextAppend.VOLUME_SAVED}
          />
        </Row>
        <Row>
          <MapChart
            points={data.map(entry => entry.coordinates)}
            selectedPoint={selectedPoint}
            setSelectedPoint={setSelectedPoint}
          ></MapChart>
        </Row>
        <Row>
          <ChartContainer title="Location traffic by time of day">
            <TrafficChart data={location.traffic}></TrafficChart>
          </ChartContainer>
          <ChartContainer title="Top Devices">
            <DeviceChart data={location.device}></DeviceChart>
          </ChartContainer>
          <ChartContainer title="Top Services by Volume">
            <ServiceChartsContainer
              data={location.service}
            ></ServiceChartsContainer>
          </ChartContainer>
        </Row>
      </AppStyles>
    </ThemeProvider>
  );
};

export default App;

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import KPICard from './components/KPICard';
import DeviceChart from './components/DeviceChart';
import ServiceChartsContainer from './components/ServiceChartsContainer';
import TrafficChart from './components/TrafficChart';
import ChartContainer from './components/ChartContainer';
import Banner from './components/Banner';

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
  width: 100%;
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
  return (
    <ThemeProvider theme={theme}>
      <AppStyles className="App">
        <Banner></Banner>
        <Row>
          <KPICard
            name="Subscriber Count"
            percentValue={36}
            value={214000}
            unit=""
            appendText="in last hour"
          />
          <KPICard
            name="Subscriber Count"
            percentValue={36}
            value={214000}
            unit=""
            appendText="in last hour"
          />
          <KPICard
            name="Subscriber Count"
            percentValue={36}
            value={214000}
            unit=""
            appendText="in last hour"
          />
        </Row>
        <Row>
          <ChartContainer title="Location traffic by time of day">
            <TrafficChart></TrafficChart>
          </ChartContainer>
          <ChartContainer title="Top Devices">
            <DeviceChart></DeviceChart>
          </ChartContainer>
          <ChartContainer title="Top Services by Volume">
            <ServiceChartsContainer></ServiceChartsContainer>
          </ChartContainer>
        </Row>
      </AppStyles>
    </ThemeProvider>
  );
};

export default App;

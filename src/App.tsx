import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';
import DeviceChart from './components/DeviceChart';
import ServiceChart from './components/ServiceChart';
import TrafficChart from './components/TrafficChart';
import ChartContainer from './components/Chart';

const App: React.FC = () => {
  return (
    <div className="App">
      <ChartContainer title="Top Devices">
        <DeviceChart></DeviceChart>
      </ChartContainer>
      <ChartContainer title="Top Services by Volume">
        <ServiceChart></ServiceChart>
      </ChartContainer>
    </div>
  );
};

export default App;

import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import ServiceChart from './ServiceChart';

const data = [
  { name: 'Youtube', value: 997 },
  { name: 'Netflix', value: 759 },
  { name: 'HTTP media stream', value: 729 },
  { name: 'Amazon Prime', value: 689 },
  { name: 'Hulu', value: 563 },
  { name: 'iTunes purchase', value: 541 },
  { name: 'SSL v3', value: 540 },
  { name: 'HBO Now', value: 521 },
  { name: 'Xbox', value: 472 }
];

const ServiceChartContainer = () => {
  const themeContext = useContext(ThemeContext);
  const dataSortedByValue = data.sort((a, b) => (a.value > b.value ? -1 : 1));
  const maxValue = dataSortedByValue[0].value;
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        overflowY: 'scroll'
      }}
    >
      {dataSortedByValue.map((entry, index) => (
        <ServiceChart
          key={`service-chart-${index}`}
          domainMax={maxValue}
          data={entry}
          fill={
            themeContext.colors[index]
              ? themeContext.colors[index]
              : themeContext.colors[index % (themeContext.colors.length - 1)]
          }
        />
      ))}
    </div>
  );
};

export default ServiceChartContainer;

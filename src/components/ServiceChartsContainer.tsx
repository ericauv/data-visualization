import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import ServiceChart from './ServiceChart';
import { IServiceData } from '../data';

interface IProps {
  data: IServiceData[];
}

const ServiceChartsContainer: React.FC<IProps> = props => {
  const { data } = props;
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

export default ServiceChartsContainer;

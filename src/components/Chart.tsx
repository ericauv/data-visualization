import React from 'react';
import styled from 'styled-components';

interface IChartProps {
  title: string;
}

const ChartContainerStyles = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;
const ChartTitleStyles = styled.h2`
  align-self: flex-start;
`;

const ChartContainer: React.FC<IChartProps> = props => {
  const { title } = props;
  return (
    <ChartContainerStyles>
      <ChartTitleStyles>{title}</ChartTitleStyles>
      {props.children}
    </ChartContainerStyles>
  );
};

export default ChartContainer;

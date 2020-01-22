import React from 'react';
import styled from 'styled-components';

interface IChartProps {
  title: string;
}

const ChartContainerStyles = styled.div`
  border: 0.5px solid #eeeeee;
  padding: 10px;
  padding-top: 0px;
  margin: 20px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 450px;
`;
const ChartTitleStyles = styled.h2`
  padding: 0;
  font-size: 14px;
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

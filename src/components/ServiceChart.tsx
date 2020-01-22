import React from 'react';
import {
  Bar,
  ComposedChart,
  ContentRenderer,
  LabelList,
  LabelProps,
  ResponsiveContainer,
  XAxis,
  YAxis
} from 'recharts';
import styled from 'styled-components';
import { IServiceData } from '../data';

interface IProps {
  data: IServiceData;
  fill: string;
  domainMax: number;
}

const renderCustomizedLabel: ContentRenderer<LabelProps> = props => {
  const { x, y, width, height, value } = props;
  const xPosition = width && x ? width + x : x;
  const dy = height ? height / 2 + 2 : 12;

  return (
    <text
      x={xPosition}
      y={y}
      dx={5}
      dy={dy}
      fill="black"
      fontSize={14}
      textAnchor="right"
      dominantBaseline="middle"
    >
      {`${value} GB`}
    </text>
  );
};

const ChartContainer = styled.div`
  height: 12%;
  width: 100%;
  border-bottom: 1px solid lightgrey;
`;

const ServiceChart: React.FC<IProps> = props => {
  const { data, fill, domainMax } = props;

  return (
    <ChartContainer>
      <ResponsiveContainer height="100%" width="90%">
        <ComposedChart
          layout="vertical"
          data={[data]}
          margin={{
            right: 50,
            left: 40
          }}
        >
          <XAxis hide domain={[0, domainMax]} type="number" />
          <YAxis
            tickLine={false}
            axisLine={false}
            dataKey="name"
            type="category"
          />
          <Bar dataKey="value" barSize={20} fill={fill}>
            <LabelList
              dataKey="value"
              position="right"
              content={renderCustomizedLabel}
            />
          </Bar>
        </ComposedChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default ServiceChart;

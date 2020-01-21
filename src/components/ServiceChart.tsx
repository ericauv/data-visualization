import React from 'react';
import {
  Bar,
  ComposedChart,
  LabelList,
  Tooltip,
  XAxis,
  YAxis,
  ContentRenderer,
  LabelProps
} from 'recharts';
interface IServiceData {
  name: string;
  value: number;
}

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

const renderCustomizedLabel: ContentRenderer<LabelProps> = props => {
  const { x, y, width, height, value } = props;
  const xPosition = width && x ? width + x : x;
  const dy = height ? height / 2 + 2 : 12;
  console.log(width);

  return (
    <text
      x={xPosition}
      y={y}
      dx={5}
      dy={dy}
      fill="black"
      fontSize={14}
      textAnchor="left"
      dominantBaseline="middle"
    >
      {`${value} GB`}
    </text>
  );
};

const ServiceChart = () => {
  return (
    <ComposedChart
      layout="vertical"
      width={600}
      height={400}
      barCategoryGap="2%"
      data={data}
      margin={{
        top: 20,
        right: 50,
        bottom: 20,
        left: 40
      }}
    >
      <XAxis hide type="number" />
      <YAxis tickLine={false} axisLine={false} dataKey="name" type="category" />
      <Bar dataKey="value" barSize={20} fill="#413ea0">
        <LabelList
          dataKey="value"
          position="right"
          content={renderCustomizedLabel}
        />
      </Bar>
    </ComposedChart>
  );
};

export default ServiceChart;

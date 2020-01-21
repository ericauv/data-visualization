import React, { useState } from 'react';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Sector,
  Cell,
  Label,
  Text,
  Legend
} from 'recharts';

interface IData {
  name: string;
  value: number;
}

const data = [
  {
    name: 'iPhone 11',
    trafficValue: 1.22,
    trafficPercent: 11,
    fill: '#0088FE'
  },
  {
    name: 'Galaxy 10',
    trafficValue: 2.44,
    trafficPercent: 22,
    fill: '#00C49F'
  },
  { name: 'iPad Pro', trafficValue: 3.66, trafficPercent: 33, fill: '#FFBB28' },
  { name: 'Note 10', trafficValue: 1.75, trafficPercent: 15, fill: '#FF8042' }
];

interface IPayload {
  name: string;
  trafficValue: number;
  trafficPercent: number;
}
interface IActiveShapeProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
  fill: string;
  payload: IPayload;
  percent: number;
  value: number;
}
const renderActiveShape = (props: IActiveShapeProps) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text
        x={cx}
        y={cy}
        dy={-20}
        textAnchor="middle"
        fill={'black'}
        style={{ fontWeight: 'bold' }}
      >
        {payload.name}
      </text>
      <text
        x={cx}
        y={cy}
        dy={20}
        textAnchor="middle"
        fill={'black'}
        style={{ fontWeight: 'bold' }}
      >
        {`${payload.trafficValue} TB`}
      </text>
      <text x={cx} y={cy} dy={40} textAnchor="middle" fill={'black'}>
        {`${payload.trafficPercent}%`}
      </text>

      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle + 5}
        endAngle={endAngle - 5}
        innerRadius={innerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
    </g>
  );
};

const RADIAN = Math.PI / 180;

const DeviceChart = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const onPieEnter = (data: IData, index: number) => {
    setActiveIndex(index);
  };

  return (
    <div style={{ width: '50%', height: '400px' }}>
      <ResponsiveContainer>
        <PieChart>
          <Legend
            iconType="square"
            align="right"
            verticalAlign="top"
            layout="vertical"
          />
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx={300}
            cy={200}
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            dataKey="trafficPercent"
            onMouseEnter={onPieEnter}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill}></Cell>
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <p>Traffic share by % volume</p>
    </div>
  );
};

export default DeviceChart;

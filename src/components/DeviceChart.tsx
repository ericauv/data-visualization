import React, { useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';
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

import { data as fullDataSet, IDeviceData } from '../data';

const [data, otherData] = fullDataSet.map((entry, index) => entry.device);

interface IActiveShapeProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
  fill: string;
  payload: IDeviceData;
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
    payload
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
        style={{ fontWeight: 'bold', fontSize: '14px' }}
      >
        {payload.name}
      </text>
      <text
        x={cx}
        y={cy}
        dy={20}
        textAnchor="middle"
        fill={'black'}
        style={{ fontWeight: 'bold', fontSize: '14px' }}
      >
        {`${payload.value} TB`}
      </text>
      <text
        x={cx}
        y={cy}
        dy={40}
        textAnchor="middle"
        style={{ fontSize: '12px' }}
        fill={'black'}
      >
        {`${payload.percent}%`}
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

const DeviceChart = () => {
  const themeContext = useContext(ThemeContext);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const onPieEnter = (data: IDeviceData, index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
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
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            dataKey="percent"
            onMouseEnter={onPieEnter}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  themeContext.colors[index]
                    ? themeContext.colors[index]
                    : themeContext.colors[
                        index % (themeContext.colors.length - 1)
                      ]
                }
              ></Cell>
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <p>Traffic share by % volume</p>
    </>
  );
};

export default DeviceChart;

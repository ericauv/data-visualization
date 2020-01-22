import React from 'react';
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  ResponsiveContainer,
  XAxis,
  YAxis
} from 'recharts';
import { data as fullDataSet } from '../data';

const [data, otherData] = fullDataSet.map((entry, index) => entry.traffic);

const tickFormatter = (tick: number) => {
  // Returns time strings for 12AM, 12PM, and 11PM, otherwise returns an empty string
  let hourString = '';
  if (tick === 0) {
    hourString = '12AM';
  } else if (tick === 12) {
    hourString = '12PM';
  } else if (tick === 23) {
    hourString = '11PM';
  }

  return hourString;
};

const customizedAxisTick = (props: { x: any; y: any; payload: any }) => {
  const { x, y, payload } = props;

  // Only return tick strings for 12AM, 12PM, 11AM
  const tickValue = tickFormatter(payload.value);
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="middle" fill="#666">
        {tickValue}
      </text>
    </g>
  );
};

const TrafficChart = () => {
  return (
    <ResponsiveContainer>
      <ComposedChart
        barGap="2%"
        width={600}
        height={400}
        margin={{
          top: 10,
          right: 30,
          left: 20,
          bottom: 20
        }}
        data={data}
      >
        <CartesianGrid vertical={false} />
        <Bar barSize={15} dataKey="volume" fill="#935B92" />

        <XAxis
          tick={customizedAxisTick}
          domain={['dataMin', 'dataMax']}
          // tickFormatter={tickFormatter}
          interval="preserveStartEnd"
          // scale="time"
          tickLine={false}
          dataKey="time"
          label={{
            value: 'Time of day',
            position: 'insideBottom',
            offset: -10
          }}
        />
        <YAxis
          ticks={[0, 50, 100, 150, 200, 250, 300, 350, 400]}
          dataKey="volume"
          label={{ value: 'Volume (GB)', position: 'insideLeft', angle: -90 }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default TrafficChart;

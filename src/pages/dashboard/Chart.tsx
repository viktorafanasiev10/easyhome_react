import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(time: string, amount?: number) {
  return { time, amount };
}

const data = [
  createData('1 Nov', 0),
  createData('2 Nov', 300),
  createData('3 Nov', 250),
  createData('4 Nov', 50),
  createData('5 Nov', 34.76),
  createData('6 Nov', 823.60),
  createData('7 Nov', 34.56),
  createData('8 Nov', 367.54),
  createData('9 Nov', 34.67),
  createData('10 Nov', 0),
  createData('11 Nov', 300),
  createData('12 Nov', 250),
  createData('13 Nov', 50),
  createData('14 Nov', 34.76),
  createData('15 Nov', 34.76),
  createData('16 Nov', 823.60),
  createData('17 Nov', 34.56),
  createData('18 Nov', 367.54),
  createData('19 Nov', undefined),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>November</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Expenses (EUR)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}

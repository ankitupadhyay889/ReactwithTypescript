import React from 'react';
import { AreaChart, Area, Pie, PieChart, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';

const data = [
  {name: 'Facebook', value: 2000},
  {name: 'Instagram', value: 1000},
  {name: 'Twitter', value: 1550},
  {name: 'Whatsapp', value: 1100},
];

export default function Chaart() {
    return (
        <>
        <PieChart width={400} height={400}>
        <Pie
          data={data}
          isAnimationActive={false}
          dataKey="value"
          cx={200}
          cy={200}
          outerRadius={60}
          fill="#8884d8"
          label
        />
        <Tooltip/>
        </PieChart> 
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
        </>
      
    );
  }

'use client';

import moment from 'moment';
import React, { useEffect, useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

function CoinChart({ coinId }: { coinId: string }) {
  const [chartData, setChartData] = useState([]);

  const get7days = async () => {
    const res = await fetch(`/api/get7days?coinId=${coinId}`);
    if (res.ok) {
      const result = await res.json();
      const prices = result?.prices?.map(([timestamp, price]: any) => ({
        date: moment(timestamp).format('MM-DD HH:mm'),
        price: price.toFixed(2),
      }));
      setChartData(prices);
    }
  };

  useEffect(() => {
    get7days();
  }, []);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={400}
        height={700}
        data={chartData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip
          contentStyle={{
            borderRadius: '10px',
            border: 'none',
          }}
          labelStyle={{ fontWeight: 'bold', color: '#3b3781' }}
        />
        <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default CoinChart;

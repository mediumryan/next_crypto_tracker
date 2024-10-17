'use client';

import CoinChart from '@/Components/Coin/CoinChart';
import CoinInfo from '@/Components/Coin/CoinInfo';
import React, { useEffect, useState } from 'react';

interface CoinPageProps {
  params: {
    id: string;
  };
}

export default function CoinPage({ params }: CoinPageProps) {
  const coinId = params.id;

  const [data, setData] = useState<any>();

  const getCoin = async () => {
    const res = await fetch(`/api/getCoin?coinId=${coinId}`);
    if (res.ok) {
      const result = await res.json();
      setData(result);
    }
  };
  useEffect(() => {
    if (coinId) {
      getCoin();
    }
  }, []);

  return (
    <div className="flex flex-col items-center h-[90vh]">
      <CoinInfo data={data} />
      <CoinChart coinId={coinId} />
    </div>
  );
}

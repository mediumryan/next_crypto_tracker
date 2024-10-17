'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/Components/ui/table';
import { MarketsCoinType } from '@/service';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { VscDebugStart } from 'react-icons/vsc';
import { useMediaQuery } from 'react-responsive';

export default function HomeTable() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const [data, setData] = useState<MarketsCoinType[]>([]);

  const getData = async () => {
    const res = await fetch('/api/getMarkets');
    if (res.ok) {
      const result = await res.json();
      setData(result);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Table>
      {isMobile ? (
        <>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>Coin</TableHead>
              <TableHead className="text-center">Price</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length > 0 ? (
              data.map((coin, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell className="flex items-center">
                    <Image
                      src={coin.image}
                      alt={coin.name}
                      width={20}
                      height={20}
                      className="mr-1"
                    />
                    <span className="max-w-[150px] truncate">{coin.name}</span>
                  </TableCell>
                  <TableCell className="text-right">
                    {coin.current_price.toLocaleString()}JPY
                  </TableCell>
                  <TableCell>
                    <Link href={`/coin/${coin.id}`}>
                      <VscDebugStart />
                    </Link>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell>No Data</TableCell>
              </TableRow>
            )}
          </TableBody>
        </>
      ) : (
        <>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>Coin</TableHead>
              <TableHead className="text-right">Low</TableHead>
              <TableHead className="text-right">High</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">Total Supply</TableHead>
              <TableHead className="text-right">Market Cap</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length > 0 ? (
              data.map((coin, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell className="flex items-center">
                    <Image
                      src={coin.image}
                      alt={coin.name}
                      width={20}
                      height={20}
                      className="mr-1"
                    />
                    <span className="max-w-[150px] truncate">{coin.name}</span>
                  </TableCell>
                  <TableCell className="text-right">
                    {coin.atl.toLocaleString()} JPY
                  </TableCell>
                  <TableCell className="text-right">
                    {coin.ath.toLocaleString()} JPY
                  </TableCell>
                  <TableCell className="text-right">
                    <span className="text-red-400">
                      {coin.current_price.toLocaleString()}
                    </span>{' '}
                    JPY
                  </TableCell>
                  <TableCell className="text-right">
                    {coin.circulating_supply.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right">
                    {coin.market_cap.toLocaleString()} JPY
                  </TableCell>
                  <TableCell>
                    <Link href={`/coin/${coin.id}`}>
                      <VscDebugStart />
                    </Link>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell>No Data</TableCell>
              </TableRow>
            )}
          </TableBody>
        </>
      )}
    </Table>
  );
}

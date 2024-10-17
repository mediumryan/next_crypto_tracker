import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import Image from 'next/image';
import { FaCaretDown, FaCaretUp, FaMinus } from 'react-icons/fa';

export default function CoinInfo({ data }: any) {
  const tableData = [
    {
      key: 'Market Cap',
      value: data?.market_data?.market_cap?.jpy,
      needMark: true,
    },
    {
      key: 'Fully Diluted Valuation',
      value: data?.market_data?.fully_diluted_valuation?.jpy,
      needMark: true,
    },
    {
      key: '24 Hour Trading Vol',
      value: data?.market_data?.high_24h?.jpy,
      needMark: true,
    },
    {
      key: 'Circulating Supply',
      value: data?.market_data?.circulating_supply,
      needMark: false,
    },
    {
      key: 'Total Supply',
      value: data?.market_data?.total_supply,
      needMark: false,
    },
    {
      key: 'Max Supply',
      value: data?.market_data?.max_supply,
      needMark: false,
    },
  ];

  const percentage24h = data?.market_data?.price_change_percentage_24h;

  return (
    <div className="flex flex-col justify-center py-4">
      {/* name */}
      <div className="flex items-center my-4">
        <Image
          src={data?.image?.small}
          alt={data?.name}
          width={35}
          height={35}
        />
        <span className="font-bold text-lg mx-1">{data?.name}</span>
        <span className="text-sm italic mb-8">#{data?.market_cap_rank}</span>
      </div>
      {/* price */}
      <div className="flex items-end">
        <p className="text-4xl font-bold">
          ¥ {data?.market_data?.current_price?.jpy?.toLocaleString()}
        </p>
        <div
          className={`${
            percentage24h > 0
              ? 'text-green-400'
              : percentage24h < 0
              ? 'text-red-300'
              : ''
          } flex items-center text-xl ml-2`}
        >
          {percentage24h > 0 ? (
            <FaCaretUp />
          ) : percentage24h < 0 ? (
            <FaCaretDown />
          ) : (
            <FaMinus />
          )}
          <span>{percentage24h?.toFixed(1)}</span>
        </div>
      </div>
      {/* others */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((tData, index) => {
            return (
              <TableRow key={index}>
                <TableCell>{tData.key?.toLocaleString()}</TableCell>
                <TableCell>
                  {tData.needMark && '¥'} {tData.value?.toLocaleString()}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

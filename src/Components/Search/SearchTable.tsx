'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/Components/ui/table';
import { SearchResultType } from '@/service';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { VscDebugStart } from 'react-icons/vsc';
import { Input } from '../ui/input';
import { FaMagnifyingGlass } from 'react-icons/fa6';

export default function SearchTable() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState<SearchResultType[]>([]);

  const getSearch = async () => {
    const res = await fetch(`/api/getSearch?query=${query}`);
    if (res.ok) {
      const result = await res.json();
      console.log(result?.coins);
      setData(result?.coins);
    }
  };
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
    getSearch();
  };

  return (
    <>
      <div className="flex items-center">
        <FaMagnifyingGlass className="w-6 h-6 mr-2" />
        <Input
          type="text"
          placeholder="ex) bitcoin"
          value={query}
          onChange={onChange}
        />
      </div>
      <Table>
        <>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>Coin</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length > 0 ? (
              data.map((coin, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium text-lg">
                    {coin.market_cap_rank}
                  </TableCell>
                  <TableCell className="flex items-center text-lg">
                    <Image
                      src={coin.thumb}
                      alt={coin.name}
                      width={30}
                      height={30}
                      className="mr-2"
                    />
                    <span className="max-w-[150px] md:max-w-[400px] truncate">
                      {coin.name}
                    </span>
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
      </Table>
    </>
  );
}

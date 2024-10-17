'use client';

import SearchTable from '@/Components/Search/SearchTable';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

export default function SearchPage() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className={`px-4 mt-4 mb-12 ${!isMobile && 'px-96'}`}>
      <div className="px-4">
        <SearchTable />
      </div>
    </div>
  );
}

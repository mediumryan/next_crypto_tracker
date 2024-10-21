'use client';

import React, { useEffect, useState } from 'react';
import { MdOutlineLightMode, MdOutlineNightlight } from 'react-icons/md';

const iconStyle =
  'w-6 h-6 cursor-pointer hover:animate-spin hover:duration-3000';

export default function ToggleButton() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  return (
    <div onClick={toggleTheme}>
      {isDark ? (
        <MdOutlineNightlight className={iconStyle} />
      ) : (
        <MdOutlineLightMode className={iconStyle} />
      )}
    </div>
  );
}

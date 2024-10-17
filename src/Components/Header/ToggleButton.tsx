'use client';

import React, { useState } from 'react';
import { MdOutlineLightMode, MdOutlineNightlight } from 'react-icons/md';

const iconStyle = 'w-6 h-6';

export default function ToggleButton() {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    const html = document.getElementById('html');
    html?.classList.toggle('dark');
    if (html?.classList.contains('dark')) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  };

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

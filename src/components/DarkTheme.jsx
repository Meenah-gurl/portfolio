import { useEffect, useState } from "react";
import React from 'react'

export const DarkTheme = () => {
    const [theme, setTheme] = useState(null);

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}, []);

	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
        // console.log(theme)
	};

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

  return (
    <button type='button' onClick={handleThemeSwitch} className=" text-2xl">
        {theme === 'dark' ? '🌙' : '🌞'}
        {/* {theme === 'dark'? '<i className="ri-moon-full"><i/>' : '<i className="ri-sun-fill"><i/>'} */}
    </button>
  )
}

export default DarkTheme;



    
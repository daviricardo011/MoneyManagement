import { useState, useEffect } from "react";

interface Props {
	key: string;
	defaultValue?: any;
}

export const useLocalStorage = ({ key, defaultValue }: Props) => {
	const [value, setValue] = useState(() => {
		let currentValue;

		try {
			currentValue = JSON.parse(
				localStorage.getItem(key) || String(defaultValue)
			);
		} catch (error) {
			currentValue = defaultValue;
		}

		return currentValue;
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [value, key]);

	return [value, setValue];
};
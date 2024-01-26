import { useState, useEffect } from "react";
import axios from "axios";
import PairData from "../types";

export const useAllRecentPairs = () => {
	const [data, setData] = useState<PairData[] | undefined>(undefined);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"https://cot-data-dashboard.vercel.app/api/v1/latest"
				);
				setData(response.data.data);
			} catch (err) {
				console.log(err);
				// TODO: add error message page
			}
		};
		fetchData();
	}, []);

	return data;
};

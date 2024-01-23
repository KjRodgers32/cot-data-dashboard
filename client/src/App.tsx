import axios from "axios";
import { useEffect, useState } from "react";
import PairCard from "./components/Dashboard/PairCard";
import PairData from "./types";
import GridViewIcon from "@mui/icons-material/GridView";

const App = () => {
	const [data, setData] = useState<PairData[] | undefined>(undefined);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("http://127.0.0.1:3000/api/v1/latest");
				setData(response.data.data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	}, []);

	return (
		<div className="w-full flex">
			<div className="w-1/5 h-[100vh] flex">
				<div className="w-full bg-[#111827] text-[#ccc]">
					<div className="mt-5 pl-5 py-5 flex items-center text-center gap-5 cursor-pointer hover:bg-[#171f2e]">
						<GridViewIcon />
						<p>Dashboard</p>
					</div>
				</div>
			</div>
			<div className="w-4/5 items-center justify-center text-center">
				<div className="w-full flex mt-5 p-5 gap-5 text-center items-center justify-center">
					{data?.map((item, index) => (
						<PairCard key={index} item={item} />
					))}
				</div>
			</div>
		</div>
	);
};

export default App;

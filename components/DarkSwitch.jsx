import { Switch } from "@headlessui/react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useAtom } from "jotai";
import DarkAtom from "../jotaiAtoms/DarkAtom";
import { useEffect } from "react";

const DarkSwitch = () => {
	const [enabled, setEnabled] = useAtom(DarkAtom);

	useEffect(() => {
		if (enabled) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [enabled]);

	return (
		<>
			<div className='grid grid-flow-col justify-center content-center gap-2 p-2'>
				<div className=''>
					<SunIcon className='w-6 h-6' />
				</div>

				<div className=''>
					<Switch
						checked={enabled}
						onChange={setEnabled}
						className={`${
							enabled ? "bg-blue-600" : "bg-gray-200"
						} relative inline-flex h-6 w-11 items-center rounded-full`}>
						<span className='sr-only'>Enable notifications</span>
						<span
							className={`${
								enabled ? "translate-x-6" : "translate-x-1"
							} inline-block h-4 w-4 transform rounded-full bg-white transition`}
						/>
					</Switch>
				</div>
				<div className=''>
					<MoonIcon className='w-6 h-6' />
				</div>
			</div>
		</>
	);
};

export default DarkSwitch;

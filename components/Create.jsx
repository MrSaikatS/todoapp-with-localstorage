import { PlusIcon } from "@heroicons/react/24/outline";
import { useAtom } from "jotai";
import { useState } from "react";
import TodoAtom from "../jotaiAtoms/TodoAtom";

const Create = () => {
	const [input, setInput] = useState("");

	const [todolist, setTodolist] = useAtom(TodoAtom);

	const addItem = () => {
		if (input === "") {
			alert("Please Enter a Todo");
			console.warn("Please Enter a Todo");
		} else {
			setTodolist([...todolist, input]);
			setInput("");
		}
	};

	return (
		<>
			<div className='bg-gray-300 rounded-lg'>
				<div className='text-center py-2'>Add Todo Here</div>

				<div className='grid grid-flow-col gap-3 p-4'>
					<input
						onChange={(e) => setInput(e.target.value)}
						type='text'
						className='w-full rounded-lg'
						placeholder='Type here'
						value={input}
					/>
					<button
						onClick={addItem}
						className='w-full grid grid-flow-col justify-center content-center rounded-lg bg-green-500 hover:bg-green-600'>
						<PlusIcon className='w-6 h-6' /> <span>Add</span>
					</button>
				</div>
			</div>
		</>
	);
};

export default Create;

import {
	ClipboardDocumentListIcon,
	TrashIcon,
} from "@heroicons/react/24/outline";
import { useAtom } from "jotai";
import TodoAtom from "../jotaiAtoms/TodoAtom";

const CardTodo = ({ id, text }) => {
	const [todolist, setTodolist] = useAtom(TodoAtom);

	const delItem = (id) => {
		const updatedTodo = todolist.filter((todolist, index) => {
			return index !== id;
		});

		setTodolist(updatedTodo);
	};

	return (
		<>
			<div className='grid grid-flow-col justify-between p-3 bg-gray-300 rounded-lg'>
				<div className='flex content-center items-center gap-2'>
					<ClipboardDocumentListIcon className='w-6 h-6' />
					<div>{text}</div>
				</div>
				<button onClick={() => delItem(id)}>
					<TrashIcon className='w-6 h-6' />
				</button>
			</div>
		</>
	);
};

export default CardTodo;

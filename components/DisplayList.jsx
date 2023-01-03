import { useAtom } from "jotai";
import CardTodo from "./CardTodo";
import TodoAtom from "../jotaiAtoms/TodoAtom";

const DisplayList = () => {
	const [todolist] = useAtom(TodoAtom);

	return (
		<>
			<div className='grid grid-flow-row gap-4'>
				{todolist.map((todolist, index) => {
					return <CardTodo key={index} id={index} text={todolist} />;
				})}
			</div>
		</>
	);
};

export default DisplayList;

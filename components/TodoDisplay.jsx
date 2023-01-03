import Create from "./Create";
import DisplayList from "./DisplayList";

const TodoDisplay = () => {
	return (
		<>
			<div className='max-w-md mx-auto my-8'>
				<Create />
				<DisplayList />
			</div>
		</>
	);
};

export default TodoDisplay;

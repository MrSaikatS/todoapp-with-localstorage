import { PlusIcon } from "@heroicons/react/24/solid";

const Create = () => {
	return (
		<>
			<div className='bg-gray-300 rounded-lg'>
				<div className='text-center py-2'>Add Todo Here</div>

				<div className='grid grid-flow-col gap-3 p-4'>
					<input
						type='text'
						className='w-full'
						placeholder='Type here'
					/>
					<button className='w-full grid grid-flow-col justify-center content-center'>
						<PlusIcon className='w-6 h-6' /> <span>Add</span>
					</button>
				</div>
			</div>
		</>
	);
};

export default Create;

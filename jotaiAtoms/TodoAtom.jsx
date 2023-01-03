import { atomWithStorage } from "jotai/utils";

const TodoAtom = atomWithStorage("todolist", []);

export default TodoAtom;

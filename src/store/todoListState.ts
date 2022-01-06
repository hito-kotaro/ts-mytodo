import { atom } from 'recoil';

export const todoListState = atom({ key: 'TODO_LIST_STATE', default: [] });

export default todoListState;

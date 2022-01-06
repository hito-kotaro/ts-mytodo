import type { FC } from 'react';
import TodoCard from '../TodoCard/TodoCard';
import TodoForm from '../TodoForm/TodoForm';
import Button from '../Button/Button';

const TodoApp: FC = () => {
  const msg: string = 'test';

  return (
    <>
      <TodoForm />
      <Button>Click</Button>
      <TodoCard />
    </>
  );
};

export default TodoApp;

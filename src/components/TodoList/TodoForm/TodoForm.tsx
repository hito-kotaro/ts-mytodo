import React, { VFC, useState } from 'react';
import useInputTodo from '../../../hooks/useInputTodo';
import Button from '../Button/Button';

type Props = {};

const TodoForm: VFC = (props) => {
  const { onChange, input } = useInputTodo();

  // const onChange = (e) => {
  //   console.log('AAA');
  // };

  return (
    <div>
      <input
        className="border rounded-none w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        onChange={onChange}
        value={input}
        type="text"
        placeholder="InputTodo"
      />
      <Button>Click</Button>
    </div>
  );
};

export default TodoForm;

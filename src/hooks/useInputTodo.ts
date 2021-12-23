import React, { useState } from 'react';

const useInputTodo = () => {
  const [input, setInput] = useState('');

  const onChangeAddForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    console.log(e);
  };

  return { onChange: onChangeAddForm, input };
};

export default useInputTodo;

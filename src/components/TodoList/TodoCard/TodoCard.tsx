import React from 'react';
import type { VFC } from 'react';

type Props = {};

const TodoCard: VFC<Props> = (props: Props) => {
  const msg: string = 'msg from card';
  return <div>{msg}</div>;
};

export default TodoCard;

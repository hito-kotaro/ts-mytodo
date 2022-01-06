import React, { VFC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Button: VFC<Props> = (props: Props) => {
  const { children } = props;

  const onAddButton = () => {
    alert('alert');
  };

  return (
    <button
      type="button"
      className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
      onClick={onAddButton}
    >
      {children}
    </button>
  );
};

export default Button;

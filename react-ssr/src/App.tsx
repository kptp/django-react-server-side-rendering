import React, { useState } from "react";

export const App = ({ username }: ServerProps) => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <div>Hello {username}!</div>
      <div>{number}</div>
      <button onClick={() => setNumber((num) => num + 1)}>ADD!</button>
    </div>
  );
};

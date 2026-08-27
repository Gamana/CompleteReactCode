
import { useState, useRef } from 'react';

export default function App() {
  const num1 = useRef(0);
  const [num2, setNum2] = useState(0);

  return (
    <div>

      <button onClick={() => { num1.current += 1 }}>
        {"useRef " + num1.current.toString()}
      </button>

      <button onClick={() => setNum2(num2 + 1)}>
        {"useState " + num2}
      </button>

    </div> 
  );
}
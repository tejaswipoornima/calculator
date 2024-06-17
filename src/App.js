import React, { useState } from 'react';
import './Calculator.css'; // Optional CSS for styling

const Calculator = () => {
  const [input, setInput] = useState(''); // State to hold the input value

  // Function to handle button clicks
  const handleClick = (value) => {
    if (value === '=') {
      // Calculate result
      try {
        setInput(eval(input).toString()); // Using eval here for simplicity; consider using a library like math.js for more advanced calculations
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'C') {
      // Clear the input
      setInput('');
    } else {
      // Append the clicked button value to the input
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input type="text" value={input} readOnly />
      <div className="keypad">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('/')}>/</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('*')}>*</button>

        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('-')}>-</button>

        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClick('C')}>C</button>
        <button onClick={() => handleClick('+')}>+</button>

        <button onClick={() => handleClick('=')} className="equal">
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;

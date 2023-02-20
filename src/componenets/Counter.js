import React, { useState, useEffect } from 'react';


function Counter(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < props.target) {
        setCount(count + 1);
      }
    }, props.duration / (props.target - count));
    return () => clearInterval(interval);
  }, [count, props.target, props.duration]);

  return (
    <div className="counter">
      <div className="counter-number">
        
        {count}
        <span className="counter-symbol">+</span>
      </div>
      <div className="counter-label">{props.label}</div>
    </div>
  );
}

export default Counter;


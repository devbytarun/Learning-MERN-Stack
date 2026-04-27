import React, { useState } from 'react';

function Hello() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1>Hello, World!</h1>
            <p>Welcome to React Basics</p>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

export default Hello;
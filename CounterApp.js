"use client";

import React, { useState } from "react";
import './Counter.css'

export default function CounterApp(){
    const [count, setCount] = useState(0);

    return(
        <div className="counter-container">
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>-  increments</button>
            <button onClick={() => setCount(count - 1)}>+  decrements</button>
            <button onClick={() => setCount(0)}>resets </button>
        </div>
    )


}
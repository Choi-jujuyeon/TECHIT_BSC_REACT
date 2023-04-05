import { useState } from "react";

const FunctionComp = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="bg-blue-100 w-1/2 min-h-screen flex flex-col justify-center items-center text-2xl">
            {count} <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
};

export default FunctionComp;

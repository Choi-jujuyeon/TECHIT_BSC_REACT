import { useState } from "react";
/*useState사용 - step 01. useState import 해주기

=> useState란 ?
    : Hook 중 하나로, 함수형 컴포넌트에서 상태를 관리해준다.
    : useState를 사용해 state를 변경할 수 있다. 

    -> state란 
        : 상태를 나타내는 객체를 말한다. 
        : 컴포넌트가 관리하는 데이터를 의미한다.
*/
import Counter from "./components/Counter";
//Counter import 해주기

import { useEffect } from "react";
//useEffect(== react의 Hook) import 해주기

function App() {
    const [toggle, setToggle] = useState(false);
    const [count, setCount] = useState(0);
    /* useState - step 02. useState 사용해 state 선언하기
    
    
    */

    const onClickToggle = () => {
        setToggle(!toggle);
    };

    useEffect(() => {}, []);

    return (
        <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center">
            {toggle && <Counter count={count} setCount={setCount} />}
            {/* {toggle ? <Counter /> : "카운터"} */}
            <button
                onClick={onClickToggle}
                className="bg-pink-300 px-4 py-2 rounded-2xl text-white font-bold mt-4"
            >
                버튼
            </button>
        </div>
    );
}

export default App;

import { useEffect } from "react";

const FunctionComponent = () => {
    useEffect(() => {}, []);
    /* useEffect
    => 역할
        : 추적, 데이터 가져오기, DOM조작, 타이머 설정
        : 상태관리 -> 데이터를 가져와 상태를 관리해준다.
    
    */

    return <div className="bg-blue-100 h-96">FunctionComponent</div>;
};

export default FunctionComponent;

// 이 함수에서는 추출한 요소에 조건문을 달아 스타일을 적용할 것이다.
function Card({ symbol, score }) {
    // map함수를 통해 리턴된 symbol과 score을 Card()의 요소로 넣어준다.

    return (
        <div
            className={`relative w-24 h-36 flex justify-center items-center border-2 ${
                symbol === "♠︎" || symbol === "♣︎"
                    ? "border-black text-black"
                    : "border-red-500 text-red-500"
            }`}
        >
            {/*className 속성
                : HTML요소에 CSS클래스를 추가하는 데 사용한다.  
                : 스타일을 동적으로 변경할 수 있다.

            => {`string string ${변수}`} 와 같이 백틱을 사용하는 이유!!!
                : 문자열을 사용하기 위해서. 
                

            => relative(부모) && absolute(자식)
                : 부모의 위치를 기준점으로 삼아 자식의 배치를 결정할 수 있다.

            => 배치 
                : justify-center
                : items-center
            
                : flex
                    -> 수평 수직 영역 중 하나의 방향만 설정 가능(1차원 배치)
                    -> 컨테이너 안에 있는 items의 방향을 기본적으로 row로 설정한다. (==카드를 만든 후 나열할 방향을 설정)

                : w-24 -> width 값을 설정
                : h-36 -> height 값을 설정
                : border-2 -> border 값을 설정 
                
            => 삼항 연산자 ( 조건문 ? exprIfTrue : exprIfFalse )*/}

            <div className={"absolute top-0 left-0 m-1"}>{symbol}</div>
            <div>{score}</div>
            <div className={"absolute bottom-0 right-0 m-1"}>{symbol}</div>

            {/* 
            absolute : 부모의 위치를 기준으로 배치를 한다 
                => top : 부모 기준 top 위치 설정
                => left : 부모 기준 left 위치 설정
                => m-1 : margin 설정
            
            {~~~} : javascript의 변수를 사용할때 중괄호로 감싸줘야 한다. */}
        </div>
    );
}

export default Card;

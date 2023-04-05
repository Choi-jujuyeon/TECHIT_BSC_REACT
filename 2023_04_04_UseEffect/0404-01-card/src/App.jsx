import Card from "./components/Card";
import cardData from "./components/cardData.json";

//포커 카드 만들기
function App() {
    return (
        <div className="grid grid-cols-4 justify-center items-center gap-8 py-8">
            {/*모든 카드에 적용할 디자인

            => 배치
                : grid 사용 -> 2차원 배치를 할 것이다.
                : grid-cols-4 사용 -> 한줄에 4개씩 배치 
                : gap -> 그리드 사이의 간격을 조절
                : py -> padding의 top과 bottom을 조절

            => 정렬
                : justify-center -> (가로 축) 컨테이너내에서 중앙으로 정렬
                : items-center -> 각각의 컨테이너의 크기가 다르더라도 컨테이너의 교차 중심에 따라 정렬을 해준다. */}

            {cardData.map((v, i) => {
                return <Card key={i} symbol={v.symbol} score={v.score} />;
            })}
            {/* map함수 사용

            =>  map 함수란 ?
                : 배열의 요소를 불러와 새로운 배열을 반환한다. (= 같은 기능을 반복할 때 사용)

            => v(value) : 현재 값을 의미한다.
            => i(index) : 배열 내 현재 값의 인덱스를 의미한다. 

            => cardData에서 값의 symbol과 score을 가져와 새로운 배열로 return한다.


            => key={i}
                : react에서 제공하는 Hook이다.*/}

            <Card />
            {/* 컴포넌트 사용 */}
        </div>
    );
}

export default App;

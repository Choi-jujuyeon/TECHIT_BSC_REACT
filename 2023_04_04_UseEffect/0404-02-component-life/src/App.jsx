import ClassComponent from "./components/ClassComponents";
import FunctionComponent from "./components/FunctionalComponents";

/* React에서 Component를 만드는 방법 ! 

=> 01. Class Component
    : React.Component를 상속받아 구현할 수 있다.
    : state와 lifecycle method를 사용할 수 있다. 
    : this를 사용해 state와 props에 접근할 수 있다. 
    : render() 메소드에서 JSX를 반환한다.

=> 02. Functional Component
    : 함수형으로 구현한다. 
    : React Hooks 를 사용해 state와 lifecycle method를 사용할 수 있다.
        ex) useState Hook
    : props를 인자로 받아 사용한다. 
    : return문에서 JSX를 반환한다.

*/

/*자세히 보기
=> render() : 리액트 요소와 dom요소를 연결하는 역할을 한다.

=> lifecycle method
    -> lifecycle이란 ?
        : 컴포넌트가 생성되고 제거될때 까지의 과정을 의미한다.
        : Mounting -> Uddating -> Unmounting
        
*/

function App() {
    return (
        <div className="bg-red-100 min-h-screen">
            <ClassComponent />
            <FunctionComponent />
        </div>
    );
}

export default App;

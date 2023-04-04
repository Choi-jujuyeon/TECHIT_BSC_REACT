// 함수형 컴포넌트는 렌더링 기능 하나, Component  컴포넌트는 여러 기능을 사용할 수 있다.

// 근데 훅스가 들어온 이후부터는 클래스형에서 사용할 수 있는 기능들을 함수형에서도 사용할 수 있어서 함수형 코딩을 선호한다. 함수형이 컴퓨터가 알아듣기엔 더 쉬움.

const FunctionalComponent = () => {
    return <div className="bg-blue-100 h-96">FunctionComponent</div>;
};

export default FunctionalComponent;

import ClassComponent from "./components/ClassComponents";
import FunctionComponent from "./components/FunctionalComponents";

function App() {
    return (
        <div className="bg-red-100 min-h-screen">
            <ClassComponent />
            <FunctionComponent />
        </div>
    );
}

export default App;

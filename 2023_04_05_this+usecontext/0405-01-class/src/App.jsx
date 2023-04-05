import ClassComp from "./components/ClassComp";
import FunctionComp from "./components/FunctionComp";

function App() {
    return (
        <div className="bg-red-100 min-h-screen flex justify-center items-center">
            <ClassComp />
            <FunctionComp />
        </div>
    );
}

export default App;

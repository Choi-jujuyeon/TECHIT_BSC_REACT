import ClassComponent from "./components/ClassComponents";
import FunctionalComponent from "./components/FunctionalComponents";

function App() {
    return (
        <div className="bg-red-100 min-h-screen">
            <ClassComponent />
            <FunctionalComponent />
        </div>
    );
}

export default App;

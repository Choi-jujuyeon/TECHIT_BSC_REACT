import Card from "./components/Card";
import cardData from "./components/cardData.json";

function App() {
    return (
        <div className="grid grid-cols-4 justify-center items-center gap-8 py-8">
            {cardData.map((v, i) => {
                return <Card key={i} symbol={v.symbol} score={v.score} />;
            })}
            <Card />
        </div>
    );
}

export default App;

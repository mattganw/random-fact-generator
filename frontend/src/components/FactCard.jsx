import "../styles/FactCard.css"
import LightbulbIcon from "./LightbulbIcon";

function FactCard({fact}) {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <LightbulbIcon />
                </div>
                <p className="fact-text google-sans-fact">{fact[0].fact}</p>
                <div className="card-footer">Footer</div>
            </div>
        </>
    )
}

export default FactCard;
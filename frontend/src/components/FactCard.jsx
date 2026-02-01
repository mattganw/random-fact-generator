import "../styles/FactCard.css"
import LightbulbIcon from "./LightbulbIcon";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ReplayIcon from '@mui/icons-material/Replay';
import SunnyIcon from '@mui/icons-material/Sunny';

function FactCard({fact, onGetNewFact, onGetTodayFact, isToday, onCopy, isLoading}) {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <div className="card-header-left">
                        <LightbulbIcon />
                        <h2 
                            className="header-text google-sans-h2"
                            style={{ color: isToday ? "#3072e2" : "#6d4c9c" }}
                        >
                            {isToday ? "Today's Fact" : "Random Fact"}</h2>
                    </div>
                    <div className="card-header-right">
                        <ContentCopyIcon 
                            htmlColor="#8f8e8e" 
                            style={{cursor: "pointer"}}
                            onClick={() => onCopy(fact[0].fact)}
                        />
                    </div>
                </div>

                <div className={`fact-content ${isLoading ? "loading" : "loaded"}`}>
                    <p className="fact-text google-sans-p">{fact[0].fact}</p>
                </div>

                <div className="card-footer">
                    <button className="new-fact-btn google-sans-btn"onClick={onGetNewFact}>
                        <ReplayIcon htmlColor="#FFF"/> New Fact
                    </button>
                    <button className="today-fact-btn google-sans-btn" onClick={onGetTodayFact}>
                        <SunnyIcon htmlColor="#FFCC33"/> Today's Fact
                    </button>
                </div>
            </div>
        </>
    )
}

export default FactCard;
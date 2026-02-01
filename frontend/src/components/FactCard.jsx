import "../styles/FactCard.css"
import LightbulbIcon from "./LightbulbIcon";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function FactCard({fact}) {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <div className="card-header-left">
                        <LightbulbIcon />
                        <h2 className="header-text google-sans-h2">Random Fact</h2>
                    </div>
                    <div className="card-header-right">
                        <ContentCopyIcon />
                    </div>
                </div>
                <p className="fact-text google-sans-p">{fact[0].fact}</p>
                <div className="card-footer">Footer</div>
            </div>
        </>
    )
}

export default FactCard;
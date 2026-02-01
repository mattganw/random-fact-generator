import "../styles/FactCard.css"

function FactCard({fact}) {
    return (
        <>
            <div className="card">
                <p className="fact-text google-sans-fact">{fact[0].fact}</p>
            </div>
        </>
    )
}

export default FactCard;